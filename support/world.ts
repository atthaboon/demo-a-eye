import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium, firefox, webkit, devices } from '@playwright/test';
import config from '../playwright.config';

export class CustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    // Determine browser type from environment or config
    const browserType = process.env.BROWSER || 'chromium';
    const headless = process.env.HEADLESS === 'true' || false;
    
    // Launch browser based on type
    switch (browserType.toLowerCase()) {
      case 'firefox':
        this.browser = await firefox.launch({ headless });
        break;
      case 'webkit':
        this.browser = await webkit.launch({ headless });
        break;
      case 'chromium':
      default:
        this.browser = await chromium.launch({ headless });
        break;
    }

    // Get project configuration from playwright.config.ts
    const projectConfig = config.projects?.find(p => p.name === browserType) || config.projects?.[0];
    
    // Create context with configuration from playwright.config.ts
    const contextOptions: any = {
      ...projectConfig?.use,
      ...config.use,
    };

    // Apply device settings if specified
    const device = process.env.DEVICE;
    if (device && devices[device]) {
      Object.assign(contextOptions, devices[device]);
    }

    this.context = await this.browser.newContext(contextOptions);
    this.page = await this.context.newPage();

    // Set base URL if configured
    if (config.use?.baseURL) {
      this.page.setDefaultNavigationTimeout(30000);
    }
  }

  async cleanup() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);

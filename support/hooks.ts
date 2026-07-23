import { Before, After, Status } from '@cucumber/cucumber';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, { result }) {
  if (result?.status === Status.FAILED) {
    // Optional: Take screenshot on failure
    if (this.page) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await this.attach(screenshot, 'image/png');
    }
  }
  await this.cleanup();
});

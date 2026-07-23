## Install cucumber global
npm install -g cucumber-js 

npm install -d tsx

## package.json

```json
"scripts": {
    "test-cucumber-win": "set NODE_OPTIONS=--import tsx && cucumber-js",
    "test-cucumber": "NODE_OPTIONS='--import tsx' cucumber-js",
    "test-cucumber:headless": "NODE_OPTIONS='--import tsx' HEADLESS=true cucumber-js",
    "test-cucumber:firefox": "NODE_OPTIONS='--import tsx' BROWSER=firefox cucumber-js",
    "test-cucumber:webkit": "NODE_OPTIONS='--import tsx' BROWSER=webkit cucumber-js",
    "test-cucumber:mobile": "NODE_OPTIONS='--import tsx' DEVICE='iPhone 12' cucumber-js"
  },
```


## Run Test

```bash
# mac
npm run test-cucumber

# win
npm run test-cucumber-win
```

```bash
npm run test-cucumber --  --name "<test scenario>"
npm run test-cucumber-win --  --name "<test scenario>"

npm run test-cucumber --  --name "Cannot login with invalid credentials"
```


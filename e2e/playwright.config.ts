import type { PlaywrightTestConfig } from '@ngx-playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
};
export default config;
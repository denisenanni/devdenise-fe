/*import { AppPage } from './app.po';
import { chromium, test, expect } from '@ngx-playwright/test';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('portfolio app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const browser = await chromium.launch({
      logger: {
        isEnabled: (name, severity) => {return name === 'browser'},
        log: (name, severity, message, args) => {
          console.log(`${name} ${message}`)
          expect(severity).not.toContain(jasmine.objectContaining({
            level: 
      
          }));
          
        }
      }
    })


  });
});
*/
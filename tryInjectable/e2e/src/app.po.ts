import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('http://baidu.com');
  }

  getParagraphText() {
    return element(by.css('body')).getText();
  }
}

import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('[style*="display: block;"] .button-container > a');
  }

  public async method1(): Promise<void> {
    await this.tShirtMenu.click();
  }
}

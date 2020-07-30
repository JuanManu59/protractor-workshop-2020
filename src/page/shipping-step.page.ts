import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#cgv');
  }

  public async method5(): Promise<void> {
    await this.tShirtMenu.click();
  }
}

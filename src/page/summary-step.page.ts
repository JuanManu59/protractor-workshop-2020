import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('.cart_navigation span');
  }

  public async method2(): Promise<void> {
    await this.tShirtMenu.click();
  }
}

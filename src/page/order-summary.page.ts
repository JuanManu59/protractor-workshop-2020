import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#cart_navigation > button > span');
  }

  public async method8(): Promise<void> {
    await this.tShirtMenu.click();
  }
}

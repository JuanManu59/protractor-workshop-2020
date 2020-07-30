import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#form > p > button > span');
  }

  public async method6(): Promise<void> {
    await this.tShirtMenu.click();
  }
}

import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async method7(): Promise<void> {
    await this.tShirtMenu.click();
  }
}

import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#center_column > form > p > button > span');
  }

  public async method4(): Promise<void> {
    await this.tShirtMenu.click();
  }
}

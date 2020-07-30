import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#SubmitLogin > span');
  }

  public async method3(): Promise<void> {
    await this.tShirtMenu.click();
  }
}

import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private credentials: ElementFinder;

  constructor () {
    this.credentials = $('#SubmitLogin > span');
  }

  public async goToSignIn(): Promise<void> {
    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await this.credentials.click();
  }
}

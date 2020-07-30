import { $ } from 'protractor';

export class OrderSummaryPage {

  constructor () {
  }

  public async goToOrder(): Promise<void> {
    await expect($('#center_column > div > p > strong').getText())
    .toBe('Your order on My Store is complete.');
  }
}

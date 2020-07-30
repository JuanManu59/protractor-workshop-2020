import { $, browser } from 'protractor';
import { MenuContentPage, AddressStepPage, BankPaymentPage,
  OrderSummaryPage, PaymentStepPage, ProductAddedModalPage,
  ProductListPage, ShippingStepPage, SignInStepPage,
  SummaryStepPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));

    // await $('#block_top_menu > ul > li:nth-child(3) > a').click();
    await menuContentPage.goToTShirtMenu();

    await(browser.sleep(3000));

    // await $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default').click();
    await productListPage.method0();

    await(browser.sleep(5000));

    // await $('[style*="display: block;"] .button-container > a').click();
    await productAddedModalPage.method1();

    await(browser.sleep(3000));

    // await $('.cart_navigation span').click();
    await summaryStepPage.method2();

    await(browser.sleep(3000));

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');

    // await $('#SubmitLogin > span').click();
    await signInStepPage.method3();

    await(browser.sleep(3000));

    // await $('#center_column > form > p > button > span').click();
    await addressStepPage.method4();

    await(browser.sleep(3000));

    // await $('#cgv').click();
    await shippingStepPage.method5();

    await(browser.sleep(3000));

    // await $('#form > p > button > span').click();
    await paymentStepPage.method6();

    await(browser.sleep(3000));

    // await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await bankPaymentPage.method7();

    await(browser.sleep(3000));

    // await $('#cart_navigation > button > span').click();
    await orderSummaryPage.method8();

    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});

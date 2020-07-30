import { browser } from 'protractor';
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

    // await $('#block_top_menu > ul > li:nth-child(3) > a').click(); CHECK
    // await $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default').click(); CHECK
    // await $('[style*="display: block;"] .button-container > a').click(); CHECK
    // await $('.cart_navigation span').click(); CHECK
    // await $('#SubmitLogin > span').click(); CHECK
    // await $('#center_column > form > p > button > span').click(); CHECK
    // await $('#cgv').click(); CHECK
    // await $('#form > p > button > span').click(); CHECK
    // await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click(); CHECK
    // await $('#cart_navigation > button > span').click();

    await menuContentPage.goToTShirtMenu();

    await(browser.sleep(3000));

    await productListPage.checkProductList();

    await(browser.sleep(5000));

    await productAddedModalPage.addProduct();

    await(browser.sleep(3000));

    await summaryStepPage.goToSummary();

    await(browser.sleep(3000));

    await signInStepPage.goToSignIn();

    await(browser.sleep(3000));

    await addressStepPage.confirmAddress();

    await(browser.sleep(3000));

    await shippingStepPage.confirmShipping();

    await(browser.sleep(3000));

    await paymentStepPage.confirmPayment();

    await(browser.sleep(3000));

    await bankPaymentPage.goToBank();

    await(browser.sleep(3000));

    await orderSummaryPage.goToOrder();

  });
});

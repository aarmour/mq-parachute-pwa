import { MqParachutePwaPage } from './app.po';

describe('mq-parachute-pwa App', function() {
  let page: MqParachutePwaPage;

  beforeEach(() => {
    page = new MqParachutePwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

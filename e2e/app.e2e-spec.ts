import { AnAppPage } from './app.po';

describe('an-app App', () => {
  let page: AnAppPage;

  beforeEach(() => {
    page = new AnAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

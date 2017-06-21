import { MyCoolProjPage } from './app.po';

describe('my-cool-proj App', function() {
  let page: MyCoolProjPage;

  beforeEach(() => {
    page = new MyCoolProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

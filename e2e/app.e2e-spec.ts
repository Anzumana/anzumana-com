import { AnzumanaComPage } from './app.po';

describe('anzumana-com App', () => {
  let page: AnzumanaComPage;

  beforeEach(() => {
    page = new AnzumanaComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

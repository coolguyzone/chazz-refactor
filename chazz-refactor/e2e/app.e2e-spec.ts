import { ChazzRefactorPage } from './app.po';

describe('chazz-refactor App', () => {
  let page: ChazzRefactorPage;

  beforeEach(() => {
    page = new ChazzRefactorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

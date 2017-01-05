import { NgIfPracticePage } from './app.po';

describe('ng-if-practice App', function() {
  let page: NgIfPracticePage;

  beforeEach(() => {
    page = new NgIfPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

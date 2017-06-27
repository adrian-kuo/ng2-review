import { ReviewPage } from './app.po';

describe('review App', function() {
  let page: ReviewPage;

  beforeEach(() => {
    page = new ReviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

var until = protractor.ExpectedConditions;

describe('QA automation', function() {
  it('Check booking', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.booking.com');

    element(by.id('ss')).sendKeys('New York');
    browser.wait(until.presenceOf(element(by.css('[data-list-item]'))), 5000, 'Element taking too long to appear in the DOM');
    element(by.css('[data-list-item]')).click();
    // browser.sleep(5000);
    element(by.xpath('// div [data-placeholder="Check-in date"]')).click();
    browser.sleep(5000);

    // var todoList = element.all(by.repeater('todo in todoList.todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');
    //
    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
  });
});

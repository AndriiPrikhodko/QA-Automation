var until = protractor.ExpectedConditions;
date = new Date();
days_in_month = 31;
time_span = 7;

describe('QA automation', function() {
  it('Check booking', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.booking.com');

    element.all(by.id('ss')).first().sendKeys('New York');
    browser.wait(until.presenceOf(element(by.css('[data-list-item]'))), 5000, 'Element data-list-item not is not visible');
    element.all(by.css('[data-list-item]')).first().click();
    browser.wait(until.presenceOf(element(by.css('td.c2-day-s-today'))), 5000, 'Element c2-day-s-today not is not visible');
    element.all(by.css('td.c2-day-s-today')).first().click();
    element.all(by.css('[data-placeholder = "Check-out Date"]')).first().click();
    browser.wait(until.presenceOf(element(by.xpath("// div [contains(@class,'c2-calendar-header') and text() = 'Check-out']"))), 5000, 'Element div.c2-calendar-header is not visible');
    element.all(by.css('td.c2-day-s-last-in-range')).first()
    .element(by.xpath('..'))
    .all(by.xpath("// span [contains(@class,'c2-day-inner') and text() = '" + (date.getDate() + time_span <= days_in_month ? date.getDate() + time_span : date.getDate() + time_span - days_in_month ) + "']"))
    .get(date.getDate() + time_span < days_in_month ?  2*(date.getMonth()+1) - 1 : 2*(date.getMonth()+1) - 1 + 1 + date.getMonth()).click(); // values 8 and 9 taken from the website design
    // element.all(by.css('button.sb-searchbox__button')).first().click();
    browser.pause();
    // .then(spans => spans.map(span => span.getText().then( text => console.log(text))));
    //.get(21).click();
    // element(by.xpath("// span [contains(@class,'c2-day-inner') and text() = '" + (date.getDate()+7) + "']")).click();
    // then( spans => console.log(spans.length));
    // element(by.xpath('..'))
    // [contains(., '" + (date.getDate()+7) + "')]"
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

getInnerHTML = function(browser,webElement){
   return browser.executeScript("return arguments[0].innerHTML;", webElement);
}

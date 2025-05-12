const { sum, fromEuroToDollar, fromDollarToYen, fromYentoGBP } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745);
});

test("One yen should be 146.26 dollars", function() {
    const yenes = fromDollarToYen(1);
    expect(yenes).toBe(0.0064); 
});

test("One yen should be 0.0056 dollars", function() {
    const pounds = fromYentoGBP(1);
    expect(pounds).toBe(0.0056); 
});
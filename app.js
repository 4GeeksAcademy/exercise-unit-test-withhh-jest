// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}




const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
    

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar / 156.5;
    return parseFloat(valueInYen.toFixed(4));
}


const fromYentoGBP = function(valueInYen) {
    let valueInPounds = (valueInYen * 0.87) / 156.6;
    return parseFloat(valueInPounds.toFixed(4));
}

console.log(sum(7,3))
console.log(fromDollarToYen(1))
console.log(fromYentoGBP(1))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoGBP }
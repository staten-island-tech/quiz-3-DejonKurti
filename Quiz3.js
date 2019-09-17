
/* function calculateTotal(cost) {
   if (cost < 50) {
      tip = cost * (0.2);
   }
   else if (50 < cost < 200) {
      tip = (cost * 0.15);
   }
   else {
      tip = (cost * 0.1);
   }
   return tip + cost;
}

const tips = [calculateTotal(cost)];
console.log(tips);  */

function tipCalculator(bill) {
   let percentage;
   if (bill < 50) {
      percentage = .2;
   } else if (bill >= 50 && bill < 200) {
      percentage = .15;
   } else {
      percentage = .1;
   }
   return percentage + bill;
}

const bill = [140, 45, 270];
 
const tips = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];

const total = [(bill[0] + tips[0]), (bill[1] + tips[1]), (bill[2] + tips[2])];

function hundredFilter(value) {
    return value >= 100;
}

const overHundred = total.filter(hundredFilter);

console.log(`The cost of the bills are ${bill}`);
console.log(`The tips cost ${tips}`);
console.log(`The total paid amount is ${total}`);
console.log(`The expenditures over 100 dollars are ${overHundred}`);
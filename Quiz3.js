function calculateTotal(cost) {
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

const cost = [140, 45, 270];

const totalPrice = [calculateTotal(cost[0], cost[1], cost[2])];
console.log(totalPrice);

/* 
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
 const cost = [140, 45, 270];


 */

 // const tips = [tipCalculator(bills[0])]


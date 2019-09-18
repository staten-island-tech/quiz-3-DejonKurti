//height corresponds to meters, weight to kg

/* const dejonHeight = 1.95;
const robHeight = 1.69;
let dejonWeight = 92;
let robWeight = 78;

let dejonBMI = dejonWeight / (dejonHeight * dejonHeight);
let robBMI = robWeight / (dejonHeight * dejonHeight);

/* if (dejonBMI > robBMI) {
    print resultsBMI = false;
} */

/* let resultHigher = robBMI > dejonBMI;

print("Is Rob's BMI higher than Dejon's?" resultHigher);

console.log(resultsBMI);
 */

const dejon = {
    name : 'Dejon Kurti',
    height : 1.95,
    mass : 110,
    calculateBMI: function() {
        return ((this.mass) / (this.height * this.height));
    }
};

const rob = {
    name : 'Robert Grande',
    height : 1.69,
    mass : 78,
    calculateBMI: function() {
        return ((this.mass) / (this.height * this.height));
    }
};

if (dejon.calculateBMI() > rob.calculateBMI()) {
    console.log(`${dejon.name}` + ' is fatter with a BMI of ' + dejon.calculateBMI());
} else if (rob.calculateBMI() > dejon.calculateBMI()) {
    console.log(`${rob.name}` + 'is fatter with a BMI of ' + rob.calculateBMI());
} else
    console.log('They are equally fat with a BMI of' + dejon.calculateBMI())



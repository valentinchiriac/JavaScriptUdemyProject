//asignarea unei valori bill
const bill = 100;

//calcularea valorii tips-ului folosind operatorul ternar
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//initializarea unui array cu valorile pt fiecare bill
const bills = [125, 555, 44];

//calcularea valorilor tips-ului pentru fiecare bill folosind functia calcTip
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`The tips are: ${tips}`);

//calcularea valorilor totale pentru fiecare bill plus tips
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`The total values are: ${totals}`);

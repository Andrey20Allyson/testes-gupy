// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require("fs");

const buff = fs.readFileSync("teste-3-fat.json").toString("utf8");
/**@type { Array< { dayIndex: number; sales: number; } > } */
const days = JSON.parse(buff);

let minSalesDay = null;
let maxSalesDay = null;
let monthSales = 0;

for (const day of days) {
  if (minSalesDay == null || day.sales < minSalesDay.sales) {
    minSalesDay = day;
  }

  if (maxSalesDay == null || day.sales > maxSalesDay.sales) {
    maxSalesDay = day;
  }

  monthSales += day.sales;
}

const monthAvg = monthSales / days.length;

const numOfDaysAboveAvg = days.reduce(
  (acc, day) => (day.sales > monthAvg ? acc + 1 : acc),
  0
);

console.log(
  `O dia ${
    minSalesDay.dayIndex + 1
  } teve o menor faturamento do mês, faturamento esse de ${toCurrencyString(
    minSalesDay.sales
  )}`
);
console.log(
  `O dia ${
    maxSalesDay.dayIndex + 1
  } teve o maior faturamento do mês, faturamento esse de ${toCurrencyString(
    maxSalesDay.sales
  )}`
);
console.log(
  `E um total de ${numOfDaysAboveAvg} dias tiveram o seu faturamento acima da média mensal de ${toCurrencyString(
    monthAvg
  )}`
);

function toCurrencyString(num) {
  return `R$ ${num.toFixed(2).replace(".", ",")}`;
}

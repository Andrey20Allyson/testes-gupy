// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const invoicings = [
  { reg: "SP", value: 67836.43 },
  { reg: "RJ", value: 36678.66 },
  { reg: "MG", value: 29229.88 },
  { reg: "ES", value: 27165.48 },
  { reg: "Outros", value: 19849.53 },
];

let total = invoicings.reduce((acc, invoicing) => acc + invoicing.value, 0);

const percentages = invoicings.map((invoicing) => {
  return {
    reg: invoicing.reg,
    value: invoicing.value / total,
  };
});

percentages.forEach((percentage) => {
  const percentageString = (percentage.value * 100).toFixed(2) + "%";

  const representsString =
    percentage.reg !== "Outros" ? "representou" : "representam";

  console.log(
    `${percentage.reg} ${representsString} ${percentageString} do faturamento mensal`
  );
});

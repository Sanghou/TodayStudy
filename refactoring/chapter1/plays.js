function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = ` 청구 내역 (고객명: ${invoice.customer})\n`;

  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    // 한 번의 공연 요금에 대한 계산
    let thisAmount = amountFor(perf);

    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극 5명마다 추가 포인트
    if ("comedy" === playFor(perf).type)
      volumeCredits += Math.floor(perf.audience / 5);

    result += `${playFor(perf).name}: ${format(thisAmount / 100)} 
    (${perf.audience}석) \n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;

  return result;

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    let res = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy":
        res = 40000;
        if (aPerformance.audience > 30) {
          res += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        res = 30000;
        if (aPerformance.audience > 20) {
          res += 10000 + 500 * (aPerformance.audience - 20);
        }
        res += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르:  ${playFor(aPerformance).type}`);
    }

    return res;
  }
}

const p = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

const invoices = {
  customer: "BigCo",
  performances: [
    {
      playID: "hamlet",
      audience: 55,
    },
    {
      playID: "as-like",
      audience: 35,
    },
    {
      playID: "othello",
      audience: 40,
    },
  ],
};

console.log(statement(invoices, p));

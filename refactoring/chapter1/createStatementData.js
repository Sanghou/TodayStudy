module.exports = function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  // 한 번의 공연 요금에 대한 계산
  function amountFor(aPerformance) {
    let res = 0;
    switch (aPerformance.play.type) {
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
        throw new Error(`알 수 없는 장르:  ${aPerformance.play.type}`);
    }

    return res;
  }

  function volumeCreditsFor(aPerformance) {
    let res = 0;
    res += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === aPerformance.play.type) {
      res += Math.floor(aPerformance.audience / 5);
    }
    return res;
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((acc, p) => acc + p.amount, 0);
  }
};

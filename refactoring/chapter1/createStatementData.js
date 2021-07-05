class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  // 한 번의 공연 요금에 대한 계산
  get amount() {
    let res = 0;
    switch (this.play.type) {
      case "tragedy":
        res = 40000;
        if (this.performance.audience > 30) {
          res += 1000 * (this.performance.audience - 30);
        }
        break;
      case "comedy":
        res = 30000;
        if (this.performance.audience > 20) {
          res += 10000 + 500 * (this.performance.audience - 20);
        }
        res += 300 * this.performance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르:  ${this.play.type}`);
    }

    return res;
  }
}

export default function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerformance(aPerformance) {
    const calculator = new PerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  // 한 번의 공연 요금에 대한 계산
  function amountFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance))
      .amount;
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
}

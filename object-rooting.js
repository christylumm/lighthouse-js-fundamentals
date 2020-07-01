const judgeVegetable = function (vegetables, metric) {
  let metricMax = -1;
  let nameMax;

  vegetables.forEach((vegetable) => {
    if (vegetable[metric] > metricMax) {
      metricMax = vegetable[metric];
      nameMax = vegetable['submitter'];
    }
  });
  return nameMax;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
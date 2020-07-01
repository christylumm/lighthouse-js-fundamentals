const smartGarbage = function (trash, bins) {
  for (let x in bins) {
    if(x == trash) {
      bins[x] += 1;
    }
  }
  //console.log(bins);
  return bins;
};

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

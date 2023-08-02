const positiveSum = (arr) => (arr.length ? arr.filter((n) => n >= 0).reduce((p, c) => p + c, 0) : 0);

console.log("Expected result: 15", positiveSum([1, 2, 3, 4, 5]));

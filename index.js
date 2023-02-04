
function sum(fromN, toN, tracker = 0, total = 0) {
  // Sum all the values from fromN up to toN

  //base case
  if (toN - fromN - tracker < 0) {
    return total;
  } else {
    return sum(fromN, toN, tracker + 1, total = total + (fromN + tracker));
  }

}

// console.log(sum(3, 7));

module.exports = sum;

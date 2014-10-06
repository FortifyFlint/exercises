var dice = function (array) {
  var results = [];
  for (var i = 0; i < array.length; i += 2) {
  results.push( array[i] );
  }
  return results;
};

var scores = [10,20,30,40,50];
console.log("slice & dice:", dice(scores));

scores = [11,22,33,44];
console.log("one more:", dice(scores));
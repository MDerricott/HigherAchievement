"use strict";

const data = [
    1.9,
    2.4,
    2.4,
    1.9,
    2.6,
    3.2,
    2.5,
    3.2,
    2.5,
    1.8,
    1.6,
    2.1,
    2.5,
    2.6,
    3,
    2.6,
    2.2,
    2.1,
    3.1,
    2.2,
    1.6,
    1.9
 
]


var defaultCount = function defaultCount(i, n) {
    return n;
  };

  
  
  var defaultBin = function defaultBin(i, n) {
    return i * 150;
  };
  
  function genBin(n,i) {
    var bin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultBin;
    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : data;
    return Array(n).fill(1).reduce(function (data, d, i) {
      return data.concat([{
        bin: bin(i, n),
        count: count[i]
      }]);
    }, []);
  }

  function genBins(x, y, bin, count) {
    return Array(x).fill(1).reduce(function (data, d, i) {
      return data.concat([{
        bin: i,
        bins: (0, genBin)(y, bin, count)
      }]);
    }, []);
  }
const dataone = genBins(3,3)
  console.log(dataone)


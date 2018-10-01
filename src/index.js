module.exports = function getZerosCount(number) {

  let powValue = 0, 
      powNumber = 1,
      zeroNumber = 0;

  while(powValue <= number){
    powValue = Math.pow(5, powNumber)
    powNumber++
  }

  for (let i = 1; i < powNumber - 1; i++) {
    let iterationResult = Math.floor(number / Math.pow(5, i));
    zeroNumber = zeroNumber + iterationResult;
  }
  return zeroNumber
}

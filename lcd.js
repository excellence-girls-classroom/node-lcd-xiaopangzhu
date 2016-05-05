var allLcddigits = require('./fixtrues');

module.exports = {

printLcdDogits:function(input){
    var digits = this.buildDigits(input);
    var lcdDigits = this.buildLcdDigits(digits);
    var lcdDigitsText = this.buildLcdDigitsText(lcdDigits);
    console.log(lcdDigitsText);
},

buildDigits:function(input){
    return input.toString().split('');
},

buildLcdDigits:function(digits){
    var lcdDigits = [];
    for (var i = 0; i < digits.length; i++) {
      var getLcdDigit = this.findInAllLcdDigits(digits[i]);
      if(getLcdDigit){
          lcdDigits.push(getLcdDigit);
      }
    }
    return lcdDigits;
},

findInAllLcdDigits:function(digit){
    for (i = 0; i < allLcddigits.length; i++){
        if (allLcddigits[i].digit == digit){
            return allLcddigits[i];
        }
    }
    return false;
},

buildLcdDigitsText:function(lcdDigits){
    var lcdDigitsText = '';
    var firstLine = '\n';
    var secendLine = '\n';
    var thirdLine = '\n';
    lcdDigits.forEach(function(lcdDigit){
        firstLine += lcdDigit.lcdDigit[0] + ' ';
        secendLine += lcdDigit.lcdDigit[1] + ' ';
        thirdLine += lcdDigit.lcdDigit[2] + ' ';
    });
    lcdDigitsText += firstLine + secendLine + thirdLine;
    return lcdDigitsText;
}
};

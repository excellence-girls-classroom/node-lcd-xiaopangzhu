var lcdDigit = require('./lcd');
describe('node-lcd', function() {
  describe('buildDigits', function() {
    it('a few digits',function(){
      var input = 23;
      var expectaton = ['2','3'];
      expect(lcdDigit.buildDigits(input)).toEqual(expectaton);
    });
  });

  describe('buildLcdDigits',function(){
    it('two digits',function(){
    var digits = ['2','3'];
    var expectation =
      [
        {
          digit:'2',
          lcdDigit:['._.','._|','|_.']
        },
        {
          digit:'3',
          lcdDigit:['._.','._|','._|']
        }
      ];
      expect(lcdDigit.buildLcdDigits(digits)).toEqual(expectation);
    });
  });

  describe('buildLcdDigitsText',function(){
    it('print lcdDigit',function(){
      var lcdDigits = [
        {
          digit:'2',
          lcdDigit:['._.','._|','|_.']
        }
      ];
      var expectation =
          '\n._. ' +
          '\n._| ' +
          '\n|_. ';
      expect(lcdDigit.buildLcdDigitsText(lcdDigits)).toEqual(expectation);
    });
    it('print lcdDigits',function(){
      var lcdDigits = [
        {
          digit:'2',
          lcdDigit:['._.','._|','|_.']
        },
        {
          digit:'3',
          lcdDigit:['._.','._|','._|']
        }
      ];
      var expectation =
          '\n._. ._. ' +
          '\n._| ._| ' +
          '\n|_. ._| ';
      expect(lcdDigit.buildLcdDigitsText(lcdDigits)).toEqual(expectation);
    });
  });

  it('should print correct text', function() {
    spyOn(console,'log');
    var input = 23;
    lcdDigit.printLcdDogits(input);
    var expectText =
        '\n._. ._. ' +
        '\n._| ._| ' +
        '\n|_. ._| ';
    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});

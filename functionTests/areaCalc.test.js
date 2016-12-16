const expect = require('chai').expect
let areaCalc = require('../functions/areaCalc.js')

describe(areaCalc, function() {

  it("takes three parameters x, y, and z"), function(){
    var x = 2;
    var y = 3;
    var z = 4;
    expect(areaCalc(x,y,z)).to.deep.equal()
  }

  it("defines a value 'p'"), function(){
    var p = ((x + y + z) / 2)
    expect(areaCalc(x, y, z))

  }

  it("returns Math.sqrt(p * (p-x) * (p-y) * (p-z))"), function(){

  }
})

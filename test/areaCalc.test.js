const expect = require('chai').expect
let areaCalc = require('../functions/areaCalc.js')

describe('areaCalc', function() {

  it("takes three parameters x, y, and z", function(){

    expect(areaCalc(3,4,5)).to.deep.equal(6)
  })

  it("defines a value p", function(){
    let x, y, z
    let p = ((x + y + z) / 2)
    expect(((3 + 4 + 5) / 2).to.deep.equal(6))

  })

  it("returns Math.sqrt(p * (p-x) * (p-y) * (p-z))", function(){
    expect(areaCalc(3, 4, 5)).to.deep.equal(6)
  })
})

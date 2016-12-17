const expect = require('chai').expect
let pokeSort = require('../functions/pokeSort.js')

describe (pokeSort, function(){

  it("takes two parameters: an array and sortBy", function(){

    expect(pokeSort(pokeArray, 'name')).to.deep.equal([ { id: 144, name: 'articuno', weight: 60.2 },
  { id: 1, name: 'bulbasaur', weight: 22.4 },
  { id: 4, name: 'charmander', weight: 12.3 },
  { id: 7, name: 'squirtle', weight: 17.9 } ])
})

  it("returns sorted array of pokeObjects sorted by id", function(){
    expect(pokeSort(pokeArray, 'id')).to.deep.equal([ { id: 1, name: 'bulbasaur', weight: 22.4 },
  { id: 4, name: 'charmander', weight: 12.3 },
  { id: 7, name: 'squirtle', weight: 17.9 },
  { id: 144, name: 'articuno', weight: 60.2 } ])
})

  it("returns sorted array of pokeObjects sorted by name", function(){
    expect(pokeSort(pokeArray, 'name')).to.deep.equal([ { id: 144, name: 'articuno', weight: 60.2 },
  { id: 1, name: 'bulbasaur', weight: 22.4 },
  { id: 4, name: 'charmander', weight: 12.3 },
  { id: 7, name: 'squirtle', weight: 17.9 } ])
})
  it("returns sorted array of pokeObjects sorted by weight", function(){
    expect(pokeSort(pokeArray, 'weight')).to.deep.equal([ { id: 4, name: 'charmander', weight: 12.3 },
  { id: 7, name: 'squirtle', weight: 17.9 },
  { id: 1, name: 'bulbasaur', weight: 22.4 },
  { id: 144, name: 'articuno', weight: 60.2 } ])
})
})

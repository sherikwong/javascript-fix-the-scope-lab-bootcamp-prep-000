function myAnimal() {
  var animal = 'dog'
  return animal;
}

function yourAnimal() {
  var animal = "cat";
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

function funkyFunction() {
  return "FUNKY!"
}

 
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction


/*global describe, it */


  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})






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



 
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction


/*global describe, it */



  describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})






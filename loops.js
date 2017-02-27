// function forloop() {
//   console.log('I am ${i} strange loop')
// }

// var demo = {};

// var strangeArray = []

function forLoop(array) { //This is the correct form, yes?

  for(var i=0; i < 25; i++) {
  // var demo = {};
  array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`); //putting items into the array
  // console.log('I am ' + i + ' strange loop');
  // console.log(array);
  
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    --n
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue(true))
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  return array
}
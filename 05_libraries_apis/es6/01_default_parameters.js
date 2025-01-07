

// Defining a function 

// function lordify (firstName) {
//   return `${firstName} of Canterbury`;
// }

// console.log(lordify('Dale'));


// const lordify =  (firstName) => {`${firstName} of Canterbury`;}


// function lordify (firstName) {
//   return `${firstName} of Canterbury`;
// }

// console.log(lordify('Michael'))

// document.querySelector('.btn').addEventListener('click', function (e) {
//   console.log(this)
//   this.innerText = 'Submitted'
// })

document.querySelector('.btn').addEventListener('click', e => {
  console.log(e)
  // e.target.innerText = 'Submitted'
})
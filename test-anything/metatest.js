module.exports = function (food) {
  if (food === 'chocolate') {
    throw new Error('No, chocolate is dangerous!')
  } else {
    return 'yum'
  }
}

// module.exports = function repeatCallback (n, cb) {
//   if (n < 1) return
//   cb()
//   repeatCallback(n - 1, cb)
// }


// module.exports = function (str, allcaps, char) {
//   if (allcaps) str = str.toUpperCase()
//   char = char || '*'
//   return '~' + char + '~' + str + '~' + char + '~'
// }

// module.exports = function (n) {
//      return n === 42
//    }

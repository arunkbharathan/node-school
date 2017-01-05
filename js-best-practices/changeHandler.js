module.exports = {



  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    let coins = {p:1, n:5, d:10, q:25};


         if(coins[coinType])
            return coins[coinType];
        else
            throw new Error('Unrecognized coin ' + coinType);
  },

  convertToChange: function (amo){
    cnt=0;
    result=[];
    let q = parseInt(amo/25);
    let qR = amo%25;
    let d = parseInt(qR/10);
    let dR = qR%10;
    let n = parseInt(dR/5);
    let nR = dR%5;
    let p = parseInt(nR/1);
console.log(q,d,n,p)
    while(q){result.push('q');--q;}
    while(d){result.push('d');--d;}
    while(n){result.push('n');--n;}
    while(p){result.push('p');--p;}

    return result;
  }

};


// var coins = {
//       'p': 1,
//       'n': 5,
//       'd': 10,
//       'q': 25
//     };
//
//     var coinsByAmount = ['q', 'd', 'n', 'p'];
//
//     module.exports = {
//       convertToChange: function(amount) {
//         var change = [];
//         for(var i in coinsByAmount){
//           var coinType = coinsByAmount[i];
//           var coinValue = coins[coinType];
//
//           while(amount >= coinValue){
//             change.push(coinType);
//             amount -= coinValue;
//           }
//         }
//         return change;
//       }
//     };

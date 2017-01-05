
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

var balance = 0;



module.exports = {



  insertCoin: function(coinType){
    var value = this.getAmount(coinType);
    this.increaseBalance(value);
  },
  releaseChange: function(){
    var currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  vendProduct: function(productId){
    var product = this.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  }

};

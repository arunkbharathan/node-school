
module.exports = {
  increaseBalance: function(amount){
    balance += amount;
  },
  getBalance: function(){
    return balance;
  },
  canAfford: function(amount){
    if(this.isValidAmount(amount)){
        var errorMessage = 'Invalid Input';
    }
    if(errorMessage){
        throw new Error(errorMessage);
    }
    return amount <= balance;
  },
  decreaseBalance: function(amount){
    if(!this.canAfford(amount)){
      var errorMessage = 'Insufficient balance';
    }
    if(errorMessage){
      throw new Error(errorMessage);
    }
    balance -= amount;
  },
  isValidAmount: function(amount){
    if(!amount){
      return false;
    } else {
      return true;
    }
  }
};


    function Spy(target, method) {
      // SOLUTION GOES HERE
      debugger;
      originalFunction = target[method];
      result = { count:0 };

      target[method] = function(){
      	debugger;
      	result.count++;
      	return originalFunction.apply(this,arguments);
      };

      return result;
    }

    module.exports = Spy
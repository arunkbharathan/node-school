// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.
// You only need to check that the ids match.
// Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.


    function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(isValid);
      };

      function isValid(obj){

      	return goodUsers.some(hasobj);

      	function hasobj(vObj){
      		return (obj.id === vObj.id);
      	}

      }
      
    }

    module.exports = checkUsersValid




//     var goodUsers = [
//       { id: 1 },
//       { id: 2 },
//       { id: 3 }
//     ]

//     // `checkUsersValid` is the function you'll define
//     var testAllValid = checkUsersValid(goodUsers)

//     testAllValid([
//       { id: 2 },
//       { id: 1 }
//     ])
//     // => true

//     testAllValid([
//       { id: 2 },
//       { id: 4 },
//       { id: 1 }
//     ])



//     function isBigEnough(element, index, array) { 
//   return element >= 10; 
// } 

// [12, 5, 8, 130, 44].every(isBigEnough);   // false 
// [12, 54, 18, 130, 44].every(isBigEnough); // true


// function isBiggerThan10(element, index, array) {
//   return element > 10;
// }

// [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
// [12, 5, 8, 1, 4].some(isBiggerThan10); // 

// module.exports = function checkUsersValid(goodUsers) {
//       return function allUsersValid(submittedUsers) {
//         return submittedUsers.every(function(submittedUser) {
//           return goodUsers.some(function(goodUser) {
//             return goodUser.id === submittedUser.id
//           })
//         })
//       }
//     }
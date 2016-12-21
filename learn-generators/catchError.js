function *upper (items) {
  // your code goes here
let out;
for(let item of items){
  try{
    out = item.toUpperCase();
  }catch(err){
    out = null;
  }
  yield out;
}

}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C

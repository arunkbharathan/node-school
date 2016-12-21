const fs = require('fs');
fs.readFile(process.argv[2], (err,data) => {
  if(err)throw err;
  let ind = 0;
  do
  {
    ind = data.indexOf('\n');
    //console.log(ind);
    console.log(data.slice(0,ind));
    data = data.slice(ind+1);
  }
  while(ind>=0)
  //console.log(data.toString());
});

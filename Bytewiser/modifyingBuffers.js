process.stdin.on("data", (data) => {
  //console.log(data.toString());
  let output = data.map(q => {if(q===46){return q-13}else{return q}})
  console.log(output);
})

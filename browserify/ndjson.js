exports.parse = function(val){
let tmp = val.split('\n');
for(let tt of tmp){

};	
return JSON.parse(val);
};

exports.stringify = function(rows){
	return JSON.stringify(rows);
};

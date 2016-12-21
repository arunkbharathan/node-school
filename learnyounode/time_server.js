var net = require('net')
function format(digit){
	digit = digit.toString()
	val = digit.length==1? '0'+digit:digit;
	return val;
}
var server = net.createServer(function (socket) {
   // socket handling logic
   var date = new Date()
   // "YYYY-MM-DD hh:mm"
   //date_ = date.toISOString().split('T')[0]
   //socket.end(date_+' '+date.getHours()+':'+date.getMinutes()+'\n')
   year = format(date.getFullYear())
   month =  format(1+date.getMonth())     // starts at 0
   dateday =  format(date.getDate())    // returns the day of month
   //debugger;
   hour =  format(date.getHours())
   min =  format(date.getMinutes())

   val = year+'-'+month+'-'+dateday+' '+hour+':'+min
   //console.log(val)
   socket.write(val)
   socket.end('\n');
})

server.listen(process.argv[2])


     //
    //  var net = require('net')
     //
    //  function zeroFill (i) {
    //    return (i < 10 ? '0' : '') + i
    //  }
     //
    //  function now () {
    //    var d = new Date()
    //    return d.getFullYear() + '-' +
    //      zeroFill(d.getMonth() + 1) + '-' +
    //      zeroFill(d.getDate()) + ' ' +
    //      zeroFill(d.getHours()) + ':' +
    //      zeroFill(d.getMinutes())
    //  }
     //
    //  var server = net.createServer(function (socket) {
    //    socket.end(now() + '\n')
    //  })
     //
    //  server.listen(Number(process.argv[2]))

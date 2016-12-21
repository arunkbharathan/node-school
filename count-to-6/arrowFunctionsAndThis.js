
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate( () => console.log(this.yelp) );
    }
};
foot.kick();





// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(function () {
//             console.log(this.yelp);
//         });
//     }
// };
// foot.kick();
//
// //OUTPUT undefined

//Work around in ES5

// setImmediate(function () {
//     console.log(this.yelp);
// }.bind(this));
//
// or even
//
// var that = this;
// setImmediate(function () {
//     console.log(that.yelp);
// });

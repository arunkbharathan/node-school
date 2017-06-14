var firebase = require('firebase');
//api access key admin
//key=-E
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  var messagesRef = database.ref('messages');
  // messagesRef.off();
  // messagesRef.limitToLast(12).on('child_changed', setMessage);

// writeUserData('-K2ib4H77rj0LYewF7dP','arun','qwe@asd.com')
//
//   function writeUserData(userId, name, text) {
//   database.ref('messages/' + userId).set({
//     name: name,
//     text: text,
//   }).catch(console.log);
// }



 // function setMessage(data) {
 //    console.log(data)
 //  }

  var starCountRef = firebase.database().ref('messages/');
  starCountRef.on('value', function(snapshot) {
    console.log( snapshot.val());
  });
      // messagesRef.push({
      //   name: 'shebeer',
      //   text: 'server',
      //   house:  'thrissur'
      // }).catch(function(error) {
      //   console.error('Error writing new message to Firebase Database', error);
      // });

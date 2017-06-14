var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./fcmtest-bc2cd-firebase-adminsdk-a42gq-a50ce34be3.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fcmtest-bc2cd.firebaseio.com",
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("user");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

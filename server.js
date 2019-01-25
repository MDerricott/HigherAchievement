const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const nforce = require('nforce');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ha-app", { useNewUrlParser: true });

var org = nforce.createConnection({
  clientId: "3MVG9KsVczVNcM8zb1zGBoc_xD0hLQwqfLrHJuwme.MQ99pITjWWThzENLLyz_2Mf.mee1PuQvtOWBhlDJLTB",
  clientSecret: "7937743243733928750",
  redirectUri: "https://localhost:3001/oauth/_callback",
  mode: 'single',
  username: 'mderricott@playful-fox-8jc9x7.com',
  password: "Sf18101014!BYRs81HPHz87o0jQ6SOqcDBGS"
});

org.authenticate().then(function(res){
  console.log('authenticated!');
}).catch(function(err) {
  console.error('failed');
  console.error(err);
});




// org.authenticate({ username: 'mderricott@playful-fox-8jc9x7.com', password: 'Sf18101014!'}, function(err, resp){
//   // the oauth object was stored in the connection object
//   if(!err){console.log('Cached Token: ' + org.oauth.access_token)} 
//   else {console.log(err)}
// });



// // authenticate and return OAuth token
// org.authenticate({
//   username: "mderricott@playful-fox-8jc9x7.com",
//   password: "Sf18101014!BYRs81HPHz87o0jQ6SOqcDBGS"
// }, function(err, resp){
//   if (!err) {
//     console.log('Successfully logged in! Cached Token: ' + org.oauth.access_token);
//     // execute the query
//     // org.query({ query: 'select id, name from account limit 5' }, function(err, resp){
//     //   if(!err && resp.records) {
//     //     // output the account names
//     //     for (i=0; i<resp.records.length;i++) {
//     //       console.log(resp.records[i].get('name'));
//     //     }
//     //   }
//     // });
//   }
//   if (err) console.log(err);
// });
app.get('/services/data/v44.0', function(req, res) { 
      org.authenticate()
      .then(function(data){
        res.json(data)
        
        
      console.log('authenticated with route');
      
  })
 
})






// const org = nforce.createConnection({
//   clientId: "3MVG9KsVczVNcM8zb1zGBoc_xD0hLQwqfLrHJuwme.MQ99pITjWWThzENLLyz_2Mf.mee1PuQvtOWBhlDJLTB",
//   clientSecret: '7937743243733928750',
//   redirectUri: 'https://localhost:3001/oauth/_callback',
//   apiVersion: 'v44.0',  // optional, defaults to current salesforce API version
//   environment: 'production',  // optional, salesforce 'sandbox' or 'production', production default
//   mode: 'multi' // optional, 'single' or 'multi' user mode, multi default
// });

// var oauth;
// org.authenticate({ 
//     username: "mderricott@playful-fox-8jc9x7.com", 
//     password: "Sf18101014!BYRs81HPHz87o0jQ6SOqcDBGS" 
//   }, function(err, resp) {
//     if(!err) {oauth = resp;
//     console.log("successfull")
//     }
//   else{
//     console.log("error " + err.message)
//   }
// }
//   );

  //   if (!err) {
  //     oauth = resp;
  //     console.log('Successfully logged in! Cached Token: ' + org.oauth.access_token);
  //     // execute the query
  //     org.query({ query: 'select id, name from account limit 5' }, function(err, resp){
  //       if(!err && resp.records) {
  //         // output the account names
  //         for (i=0; i<resp.records.length;i++) {
  //           console.log(resp.records[i].get('name'));
  //         }
  //       }
  //     });
  //   }
  //   if (err) console.log(err);
  // });

  

  // app.get('/auth/sfdc/callback', function(req, res) {
  //   org.authenticate({code: req.query.code}, function(err, resp){
  //     if(!err) {
  //       console.log("connected to Salesforce");
  //     } else {
  //       console.log('Error: ' + err.message);
  //     }
  //   });
  // });

  // app.get('/services/data/v44.0', function(req, res) {
  //   org.authenticate({code: req.query.code}, function(err, resp){
  //     if(!err) {
  //       console.log("connected to Salesforce with data");
  //     } else {
  //       console.log('Error: ' + err.message);
  //     }
  //   })
    
  // }).then(res => console.log(res))

// app.get('/services/data/v44.0', function(req, res) {
//     org.authenticate({}, function(err, resp){
//       if(!err) {
//         console.log(resp);
//       } else {
//         console.log('Error: ' + err.message);
//       }
//     })
//   })
// .then(res => {
//   console.log(res.data)
// })
// .catch(err => console.log(err));
//   var oauth;

//   function getRecord(id) {
//     console.log('attempting to get the lead');
//     org.getRecord({ type: 'lead', id: id, oauth: oauth }, function(err, ld) {
//       if(err) {
//         console.error('--> unable to retrieve lead');
//         console.error('--> ' + JSON.stringify(err));
//       } else {
//         console.log('--> lead retrieved');
//         ld.set('firstname', 'Terry');
//         console.log('changed: ' + JSON.stringify(ld.changed(), '  '));
//       }
//     });
//   }
  
//   getRecord("00Q1U000002OUZfUAO")
// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

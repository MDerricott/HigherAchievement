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


app.get('/sobjects/account', function(req, res) { 
      org.authenticate(

        org.query({ query: 'select id, name from account limit 5' }, function(err, resp){
           
         
          if(!err && resp.records) {
            // output the account names
            for (i=0; i<resp.records.length;i++) {
              console.log(resp.records[i].get('name'))
              }
            }

            res.json(resp.records)
           })
        
      )
      .then(function(data){
        // res.json(data)
        
        
      console.log('authenticated with route');
      
  })
 
})

// org.getRecord({ type: 'account', id: "0011U000008XFtSQAW"}, function(err, resp){
  // var search = 'FIND {Henderson}';
app.get("/api/salesforce/findCenter", function(req, res) { 

  org.authenticate(
    org.search(req.body, function(err,resp) {
     
      if(err) {
        console.error(err)
      
      } else {
        res.json(resp)
        
      }
      
    })
  )
})


app.get("/services/data/v44.0/sobjects/Account/:centerId", function(req, res) { 

  org.authenticate(
    org.getRecord({type: 'account', id: req.params.centerId}, function(err, resp){
      res.json(resp)
     })
)
});


app.get('/ui-api/record-ui/:centerId', function(req, res) { 
  org.authenticate(
    
    org.getRecord({type: 'account', id: req.params.centerId}, function(err, resp){
       
     
  
        res.json(resp)
       })
    
  )
  .then(function(data){
    // res.json(data)
    
    
  console.log('authenticated with route');
  
})

})


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

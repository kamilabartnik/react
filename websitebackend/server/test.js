var models = require('./server.js').models;

models.Profile.findOrCreate({name: 'kama'}, (err, profile) => {
  if(err){
    console.log("Error", err);
  } else if(profile){
      profile.email = "blads@f.pl";
      profile.save((ue, updated) => {
        console.log("Updated", updated);
      });
  }
})
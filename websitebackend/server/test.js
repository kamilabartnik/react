var models = require('./server.js').models;

/*
var toSave = [
  { name: 'kama', email: 'blads@s.pl' },
  { name: 'lijf', email: 'blads1@s.pl' },
  { name: 'vbrt', email: 'blads2@s.pl' },
  { name: 'bvdt', email: 'blads3@s.pl' },
  { name: 'bcgh', email: 'blads4@s.pl' },
  { name: 'rtwrt', email: 'blads5@s.pl' },
  { name: 'kczxc', email: 'blads6@s.pl' },
  { name: 'fadf', email: 'blads7@s.pl' },
];

toSave.map(obj => {
  models.Profile.create(obj, (err, created) => {
    console.log("Created", created);
  })
})

*/
var filter = {
  where: {
    name: {like: 'f'}
  },
  order: 'id ASC',
  limit: 3
}


models.Profile.findById(filter.where, (err, found) => {
  console.log("Found", err, found);
  found.destroy();
})


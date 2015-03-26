module.exports = {
  // utilizing local mongodb: http://help.nitrous.io/mongodb/
  // if there are issues with connecting, scroll to the bottom
  // and follow the directions on how to build your MongoClient
  //'url' : 'mongodb://127.0.0.1:27017/'

  // tutsplus tutorial mentions to utilize:
  //'url' : 'mongodb://localhost/passport'

  // I *think* this http://stackoverflow.com/a/3597922/355627 helps explain what's going on
  // not sure how /passport will affect things
  'url' : 'mongodb://127.0.0.1:27017/passport'
};
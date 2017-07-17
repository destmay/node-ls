module.exports = {
  port: 3000,
  session: {
    secret: 'node-ls',
    key: 'node-ls',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/node-ls'
};
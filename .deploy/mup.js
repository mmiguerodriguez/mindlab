module.exports = {
  servers: {
    one: {
      host: '104.131.190.219',
      username: 'root'
      // pem:
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },
  "setupMongo": true,
  "setupNode": true,
  "nodeVersion": "0.10.36",

  meteor: {
    name: 'learn',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'https://beta.ga',
      //MONGO_URL: 'mongodb://localhost/meteor'
    },
    /*ssl: {
      crt: './bundle.crt', // this is a bundle of certificates
      key: './private.key', // this is the private key of the certificate
      port: 443, // 443 is the default value and it's the standard HTTPS port
    },*/
    docker: {
      image: 'abernix/meteord:base',
    },
    deployCheckWaitTime: 30
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};

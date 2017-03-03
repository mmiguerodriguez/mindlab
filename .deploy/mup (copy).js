module.exports = {
  servers: {
    one: {
      host: '104.131.190.219',
      username: 'root',
      // no password, use ssh
    },
  },
  // Install Node.js on the server which is required
  setupNode: true,

  meteor: {
    name: 'Learn',
    path: '../',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'https://beta.ga',
      MONGO_URL: 'mongodb://localhost/meteor',
    },
    ssl: {
      crt: './bundle.crt', // this is a bundle of certificates
      key: './private.key', // this is the private key of the certificate
      port: 443, // 443 is the default value and it's the standard HTTPS port
    },
    docker: {
      image: 'abernix/meteord:base', // use this image if using Meteor 1.4+
    },

    // dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60,
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};

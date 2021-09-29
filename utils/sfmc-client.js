const FuelRest = require('fuel-rest');

const options = {
  auth: {
    clientId: process.env.SFMC_CLIENT_ID,
    clientSecret: process.env.SFMC_CLIENT_SECRET,
    authOptions: {
      authVersion: 2,
      accountId: process.env.SFMC_ACCOUNT_ID,
    },
    authUrl: `https://process.env.mc6vgk-sxj9p08pqwxqz9hw9-4my.auth.marketingcloudapis.com/v2/token`,
  },
  origin: `https://process.env.mc6vgk-sxj9p08pqwxqz9hw9-4my.rest.marketingcloudapis.com/`,
  globalReqOptions: {
  },
};

const client = new FuelRest(options);

/**
 * Save data in DE
 * @param externalKey
 * @param data
 * @returns {?Promise}
 */
const saveData = async (externalKey, data) => client.post({
  uri: `/hub/v1/dataevents/key:12345678/rowset`,
  headers: {
    'Content-Type': 'application/json',
  },
  json: true,
  body: data,
});

module.exports = {
  client,
  saveData,
};

const CryptoHelper = require('./src/cryptoHelper');
const app = require('./src/app');


;(async () => {
  const config = {
    cryptoKey: 'minha-senha-super-segura',
  }
  const cryptoHelper = CryptoHelper.setup()
  
  await app.run();
})();
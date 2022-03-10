const CryptoHelper = require('./src/cryptoHelper');
const app = require('./src/app');

;(async () => {
  const config = {
    cryptoKey: 'minha-senha-super-segura',
  };
  const cryptoHelper = await CryptoHelper.setup(config);
  const result = await cryptoHelper.encrypt('Hello world');
  const decrypted = await cryptoHelper.decrypted(result);
  console.log('mensagem criptografada',result);
  console.log('mensagem descriptografada',decrypted);
  await app.run();
})();
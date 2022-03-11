const CryptoHelper = require('./src/cryptoHelper');
const app = require('./src/app');
const CustomFSPromises = require('./src/customFSPromisses');
const Decorator = require('./src/decorator');

;(async () => {
  const config = {
    cryptoKey: 'minha-senha-super-segura',
  };
  const cryptoHelper = await CryptoHelper.setup(config);
  const customFSPromisses = new CustomFSPromises({cryptoHelper}).configure();
  Decorator.decorateModule(customFSPromisses, require('fs').promises);
  await app.run();
})();
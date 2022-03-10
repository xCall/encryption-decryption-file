const { createCipheriv } = require('crypto');

class CryptoHelper {
  constructor({ cryptoKey }) {
    this.cryptoConfig = Object.values({
      algorithm: 'aes-192-ecb',
      cryptoKey,
      initializationVectorKey: null,
    });


  }

  static async setup({ cryptoKey }) {
    return new CryptoHelper({ cryptoKey });
  }

  async encrypt(data) {
    const cipher = createCipheriv(...this.cryptoConfig);
    return cipher
      .update(data, 'utf8', 'base64')
      .concat(cipher.final('base64'));
  }
}

modules.exports = { CryptoHelper };
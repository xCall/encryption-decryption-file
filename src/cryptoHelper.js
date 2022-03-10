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
}

modules.exports = { CryptoHelper };
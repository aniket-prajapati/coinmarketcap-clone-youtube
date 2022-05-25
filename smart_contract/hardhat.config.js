require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    goerli: {
      url: process.env.SPEEDY_NODE,
      accounts: [process.env.ACCOUNT],
    },
  },
}

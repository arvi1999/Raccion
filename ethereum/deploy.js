const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const tokenSale = require('./build/Token.json');

const provider = new HDWalletProvider(
  'opera intact grass artefact open swamp beach debate category act snake orchard',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(tokenSale.interface)
  )
    .deploy({ data: tokenSale.bytecode,
              arguments:[100000000]})
    .send({ gas: '1500000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();

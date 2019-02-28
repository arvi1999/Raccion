import web3 from './web3';
import TokenSale from './build/TokenSale.json';

const instance = new web3.eth.Contract(
  JSON.parse(TokenSale.interface),
  '0xDAc40A947834341B3e18A0D8D1B1cb04D26606F9'
);

export default instance;

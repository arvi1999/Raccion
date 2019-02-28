import web3 from './web3';
import Token from './build/Token.json';

const instance = new web3.eth.Contract(
  JSON.parse(Token.interface),
  '0xB62677E7406E3832b9b12F2c1C01befdcfB2E623'
);

export default instance;

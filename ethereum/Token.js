import web3 from './web3';
import Token from './build/Token.json';

const instance = new web3.eth.Contract(
  JSON.parse(Token.interface),
  '0x8DA681e392992846cf89aB2C14f30AceF07AADF8'
);

export default instance;

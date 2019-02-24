pragma solidity ^0.4.20;

import './Token.sol';

contract TokenSale {
  address admin;
  Token public tokenContract;
  uint256 public tokenPrice;
  uint256 public tokenSold;

  event Sell(
    address _buyer,
    uint _amount
  );

  function TokenSale(Token _tokenContract, uint _tokenPrice) public {
    admin = msg.sender;
    tokenContract = _tokenContract;
    tokenPrice = _tokenPrice;
  }

  function multiply(uint x, uint y) internal pure returns (uint z) {
    require(y == 0 || (z = x * y) / y == x);
  }

  function buyTokens(uint256 _numberOfTokens) public payable {

    require(msg.value == multiply(_numberOfTokens, tokenPrice));

    require(tokenContract.balanceOf(this) >= _numberOfTokens);

    require(tokenContract.transfer(msg.sender, _numberOfTokens));

    tokenSold += _numberOfTokens;
    Sell(msg.sender, _numberOfTokens);
  }

  function endSale() public {
    require(msg.sender == admin);
    require(tokenContract.transfer(admin, tokenContract.balanceOf(this)));
    //selfdestruct(admin);
    admin.transfer(address(this).balance);
  }
}

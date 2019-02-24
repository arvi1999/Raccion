pragma solidity ^0.4.17;

contract Token {
  string public name = "Raccion";
  string public sumbol = "RAC";
  string public standard = "Raccion v1.0";
  uint256 public totalSupply;

  event Transfer(
    address indexed _from,
    address indexed _to,
    uint256 _value
  );

  event Approval(
    address indexed _owner,
    address indexed _spender,
    uint256 _value
  );

  mapping(address => mapping(address => uint256)) public allowance;
  mapping(address => uint256) public balanceOf;

  function Token(uint _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
  }

  function totalSupply() public view returns (uint256) {
    return totalSupply;
  }

  function transfer(address _to, uint256 _value) public returns
  (bool success) {
    require(balanceOf[msg.sender] >= _value);
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;
    Transfer(msg.sender, _to, _value);
    return true;
  }

  function approve(address _spender, uint256 _value) public returns (bool success) {
    allowance[msg.sender][_spender] = _value;
    Approval(msg.sender, _spender, _value);
    return true;
  }

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
    require(_value <= balanceOf[_from]);
    require(_value <= allowance[_from][msg.sender]);
    balanceOf[_from] -= _value;
    balanceOf[_to] += _value;

    allowance[_from][msg.sender] -= _value;

    Transfer(_from, _to, _value);
    return true;
  }
}

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

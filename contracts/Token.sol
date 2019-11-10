pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/GSN/GSNRecipient.sol";

contract Token is ERC20Mintable, ERC20Burnable {
  constructor() public {
  }
}
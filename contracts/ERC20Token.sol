// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // Sesuaikan dengan versi Solidity yang digunakan

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    uint256 public INITIAL_SUPPLY = 20000 * (10 ** uint256(decimals()));

    constructor() ERC20("Ujian Asal Silang", "UAS") Ownable(msg.sender) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * (10 ** uint256(decimals())));
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount * (10 ** uint256(decimals())));
    }

    function batchTransfer(address[] memory recipients, uint256[] memory amounts) public {
        require(recipients.length == amounts.length, "Arrays must be the same length");

        for (uint256 i = 0; i < recipients.length; i++) {
            transfer(recipients[i], amounts[i]);
        }
    }
}

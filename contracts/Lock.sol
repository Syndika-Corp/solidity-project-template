// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

/**
 * @title Lock contract
 * @notice Default Lock contract from Hardhat sample.
 */
contract Lock {
    /**
     * @notice The time when locked amount is available for withdraw.
     */
    uint public unlockTime;

    /**
     * @notice The owner of the contract.
     */
    address payable public owner;

    /**
     * @notice Withdrawal event.
     * @param amount The amount of withdrawal
     * @param when The event triger time
     */
    event Withdrawal(uint amount, uint when);

    /**
     * @notice Constructor.
     * @param _unlockTime The time when locked amount is available for withdraw
     */
    constructor(uint _unlockTime) payable {
        require(block.timestamp < _unlockTime, "Unlock time should be in the future");

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    /**
     * @notice Withdraw locked amount.
     */
    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}

# Solidity API

## Lock

Default Lock contract from Hardhat sample.

### unlockTime

```solidity
uint256 unlockTime
```

The time when locked amount is available for withdraw.

### owner

```solidity
address payable owner
```

The owner of the contract.

### Withdrawal

```solidity
event Withdrawal(uint256 amount, uint256 when)
```

Withdrawal event.

#### Parameters

| Name   | Type    | Description              |
| ------ | ------- | ------------------------ |
| amount | uint256 | The amount of withdrawal |
| when   | uint256 | The event triger time    |

### constructor

```solidity
constructor(uint256 _unlockTime) public payable
```

Constructor.

#### Parameters

| Name         | Type    | Description                                           |
| ------------ | ------- | ----------------------------------------------------- |
| \_unlockTime | uint256 | The time when locked amount is available for withdraw |

### withdraw

```solidity
function withdraw() public
```

Withdraw locked amount.

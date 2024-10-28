// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

interface IContract {
    function attempt() external;
}

contract Caller {
    function callAtempt(address _targetContractAdd) external {
        IContract(_targetContractAdd).attempt();
    }
}
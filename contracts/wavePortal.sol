// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract wavePortal {
    uint TotalWaves;
    constructor(){
        console.log("Hello World");
    }
    function wave() public {
        TotalWaves+=1;
        console.log("%s has send a wave", msg.sender);
    }
    function getTotalWaves() public view returns(uint){
        console.log("Total Waves: %d", TotalWaves);
        return TotalWaves;
    }
}
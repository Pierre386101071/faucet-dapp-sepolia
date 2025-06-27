// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
contract Owner {
    address owner;
    constructor(){
        owner = msg.sender;
    }
    modifier onlyOwner(){
        require (msg.sender == owner , "Only contract owner can call this function");
        _;
    }
}
contract faucet is Owner{
    event Claimed (address user, uint time);
    struct User {
        uint timestamp;
        uint total_claimed;
    }
    mapping (address => User) users;
    function claimEth() external {
        require(block.timestamp - users[msg.sender].timestamp >= 24 hours , "You have to wait 24h before claiming");
        require (address(this).balance >= 0.01 ether, "Balance is insufficient");
        require (users[msg.sender].total_claimed < 100 , "You claimed 1 ether already ( 100 claims )");
        payable(msg.sender).transfer(0.01 ether);
        users[msg.sender].total_claimed ++;
        users[msg.sender].timestamp = block.timestamp;
        emit Claimed(msg.sender, block.timestamp);
    }
    receive () external payable onlyOwner{
    }
    function withdraw() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
    function getUser(address _userAddress) external view onlyOwner returns(uint){
        return users[_userAddress].total_claimed;
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Medikal {
    string public name = "Medikal";
    string public location = "1800 Abbot Kinney Blvd. Unit D & E, Venice, CA 90291";
    string public email = "contact@medikalclinic.com";
    string public website = "www.medikalclinic.com";

    function aboutUs() public view returns (string memory) {
        return "Medikal is a health clinic that uses cutting-edge therapies to care for your health!";
    }
}
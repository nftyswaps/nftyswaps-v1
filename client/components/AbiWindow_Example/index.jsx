import React, { useEffect, useState } from 'react'
import Web3 from "web3";

// function balanceOf(address _owner) external view returns (uint256);
// function ownerOf(uint256 _tokenId) external view returns (address);
// function approve(address _approved, uint256 _tokenId) external payable;
// function transferFrom(address _from, address _to, uint256 _tokenId) external payable;

// Token that I did not lanuch or have the ABI for
var ERC721_TOKEN_ADDRESS = "0x07477fEf74E7F008147e014F17e615467D79b780";
var ERC721_TOKEN_ID = 714;

//Random second wallet valid on rinkeby network
var APPROVE_ADDRESS_TEST = "0xE9BC460FD66E3Ae01dFEbEB79A9429061276f42c";

var ERC_721_ABI = [
    {
        "constant": true,
        "inputs": [{ "name": "_owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{ "name": "_tokenId", "type": "uint256" }],
        "name": "ownerOf",
        "outputs": [{ "name": "owner", "type": "address" }],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "name": "_approved", "type": "address" },
            { "name": "_tokenId", "type": "uint256" }
        ],
        "name": "approve",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "name": "_from", "type": "address" },
            { "name": "_to", "type": "address" },
            { "name": "_tokenId", "type": "uint256" }
        ],
        "name": "transferFrom",
        "type": "function"
    }
];

export default function Hello_World_Example() {

    async function Test_Functions() {

        const web3 = await new Web3(window.ethereum);
        await window.ethereum.enable();

        const Ethaccounts = await web3.eth.getAccounts();
        console.log(Ethaccounts[0]);

        const NftContract = await new web3.eth.Contract(ERC_721_ABI, ERC721_TOKEN_ADDRESS);

        //balanceOf Function
        await NftContract.methods.balanceOf(Ethaccounts[0]).call(function (error, result) {
            console.log("balanceOf: " + result);
        });

        //ownerOf Function
        await NftContract.methods.ownerOf(ERC721_TOKEN_ID).call(function (error, result) {
            console.log("OwnerOf: " + result);
        });

        //approve Function
        await NftContract.methods.approve(APPROVE_ADDRESS_TEST, ERC721_TOKEN_ID).send({
            from: Ethaccounts[0],
        })

        //transferFrom Function
        await NftContract.methods.transferFrom(Ethaccounts[0], APPROVE_ADDRESS_TEST, ERC721_TOKEN_ID).send({
            from: Ethaccounts[0],
        })
    }

    useEffect(() => {
        //Test_Functions();
    }, []);

    return (
        <>
            <h1>Quick Transfer Demo</h1>
            <h2>Input Contract Address: {ERC721_TOKEN_ADDRESS} </h2>
            <h2>Token ID: {ERC721_TOKEN_ID} </h2>

            <h2>TransferTo: {APPROVE_ADDRESS_TEST} </h2>
        </>
    )

}
import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';

async function deploy () {
    const factory = await ethers.getContractFactory('HelloWorld');
    const contract = await factory.deploy();
    await contract.deployed;

    return contract;
}

async function sayHello (contract) {
    console.log('say hello:',  await contract.hello());
}

deploy().then(sayHello)
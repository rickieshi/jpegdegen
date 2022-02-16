import '@nomiclabs/hardhat-ethers';

import { ethers } from 'hardhat';

import { expect } from 'chai';

describe('hello', function () {
    it('should say hi', async function () {
        const contract = await ethers.getContractFactory('HelloWorld');
        const hello = await contract.deploy();
        await hello.deployed;

        expect(await hello.hello()).to.equal('hello world');
    })
})

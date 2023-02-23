import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import PaidPromotion from "./../chain-info/contracts/PaidPromotion.json";
import { useContractFunction } from "@usedapp/core";
import LinkToken from "./../chain-info/contracts/LinkToken.json"


const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider('https://eth-mainnet.g.alchemy.com/v2/SdXGsCutSdh6h4RgJyh08PiP99G7nMlO');
const web3 = new Web3(provider);


const paidPromotionAddress = "0x6f0424cB89Cc3eCe46D2FA1dcC7fd1907357ED47"
const { abiPaidPromotion } = PaidPromotion
const paidPromotionInterface = new ethers.utils.Interface(abiPaidPromotion)
const paidPromotionContract = new Contract(paidPromotionAddress, paidPromotionInterface)

const linkTokenAddress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
const abi = await web3.eth.getAbi(linkTokenAddress);
const linkTokenInterface = new ethers.utils.Interface(LinkToken)
const linkTokenContract = new Contract(linkTokenAddress, linkTokenInterface)


export const useClaimOwings = (id) => {

    // const data = paidPromotionContract.methods['withdrawEther'](id).encodeABI();


    const { state, send } = useContractFunction(linkTokenContract, "transferAndCall", {});
    return { state, send };
}


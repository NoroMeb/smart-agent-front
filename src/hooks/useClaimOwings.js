import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import LinkToken from "./../chain-info/contracts/LinkToken.json"
import { useContractFunction } from "@usedapp/core";


const linkTokenAddress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
const { abi } = LinkToken
const linkTokenInterface = new ethers.utils.Interface(abi)
const linkTokenContract = new Contract(linkTokenAddress, linkTokenInterface)


export const useClaimOwings = (id) => {




    const { state, send } = useContractFunction(linkTokenContract, "transferAndCall", {});
    return { state, send };
}
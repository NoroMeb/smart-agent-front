import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import PaidPromotion from "./../chain-info/contracts/PaidPromotion.json";
import { useContractFunction } from "@usedapp/core";


const paidPromotionAddress = "0x6f0424cB89Cc3eCe46D2FA1dcC7fd1907357ED47"
const { abi } = PaidPromotion
const paidPromotionInterface = new ethers.utils.Interface(abi)
const paidPromotionContract = new Contract(paidPromotionAddress, paidPromotionInterface)


export const useEndCollaboration = () => {


    const { state, send } = useContractFunction(paidPromotionContract, "endCollab", {});
    return { state, send };
}


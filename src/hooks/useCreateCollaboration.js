import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import PaidPromotion from "./../chain-info/contracts/PaidPromotion.json"
import { useContractFunction } from "@usedapp/core";
export function useCreateCollaboration() {

    const paidPromotionAddress = "0x30401029AfD9f2835260886c2E1aF2359ff77d4C"
    const { paidPromotionAbi } = PaidPromotion
    const paidPromotionInterface = new utils.Interface(paidPromotionAbi)
    const paidPromotionContract = new Contract(paidPromotionAddress, paidPromotionInterface)
    const { state, send } = useContractFunction(paidPromotionContract, "startACollab", {});
    return { state, send };
}
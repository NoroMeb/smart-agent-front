import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import PaidPromotion from "./../chain-info/contracts/PaidPromotion.json";
import { useContractFunction } from "@usedapp/core";


const paidPromotionAddress = "0x35B520F9BE399b6Ca2686eF46eeFE484Dc741B9C"
const { abi } = PaidPromotion
const paidPromotionInterface = new ethers.utils.Interface(abi)
const paidPromotionContract = new Contract(paidPromotionAddress, paidPromotionInterface)


export const useCreateCollaboration = () => {


    const { state, send } = useContractFunction(paidPromotionContract, "startACollab", {});
    return { state, send };
}


import { useState } from "react";
import { useClaimOwings } from "../../../hooks/useClaimOwings";
import { ethers } from "ethers";
import { Contract } from '@ethersproject/contracts';
import { Popover } from "bootstrap";

import PaidPromotion from "./../../../chain-info/contracts/PaidPromotion.json";
function ClaimOwings() {

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTrigger) {
        return new Popover(popoverTrigger);
    });




    const paidPromotionAddress = "0x6f0424cB89Cc3eCe46D2FA1dcC7fd1907357ED47"
    const { abi } = PaidPromotion
    const paidPromotionInterface = new ethers.utils.Interface(abi)
    const paidPromotionContract = new Contract(paidPromotionAddress, paidPromotionInterface)


    const [id, setId] = useState(null)

    function handleInputChange(event) {
        setId(event.target.value);
    }

    const { state, send } = useClaimOwings();

    const { status } = state

    function handleClaimOwings(event) {
        const paidPromotionAddress = "0x6f0424cB89Cc3eCe46D2FA1dcC7fd1907357ED47"
        const fee = ethers.utils.parseEther("0.1")
        const myFunctionInterface = new ethers.utils.Interface(["function withdrawEther(uint256 _id) public returns (bytes32 requestId)"]);
        const encodedParams = myFunctionInterface.encodeFunctionData("withdrawEther(uint256)", [id]);
        send(paidPromotionAddress, fee, encodedParams);

        event.currentTarget.disabled = true;
        event.preventDefault();

    }


    return (
        <div class=" col-lg-6 col-md-6 col-12 collaboration" style={{ color: 'white' }}>
            <form >


                <div class="input-group mb-3">
                    <span class="input-group-text">ID</span>
                    <input type='number' class="form-control" step={1} min="0" onChange={handleInputChange} />
                </div>
                <div class="d-flex justify-content-center ">

                    <button type="submit" class="btn btn-primary create-collab-button mt-4" onClick={handleClaimOwings}
                        data-toggle="popover"
                        data-bs-content="You need 0.1 LINK in addition to network fees"
                        data-bs-trigger="hover focus"
                        data-bs-placement="bottom"
                    >Claim Owings</button>
                </div>
            </form>
        </div>
    );
}

export default ClaimOwings;
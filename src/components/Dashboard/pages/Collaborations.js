import PaidPromotion from "./../../../chain-info/contracts/PaidPromotion.json"
import { useState } from "react"
import { useEthers } from "@usedapp/core";
import { Contract as CTR } from 'ethers';

function Collaborations() {

    const paidPromotionAddress = "0x35B520F9BE399b6Ca2686eF46eeFE484Dc741B9C"
    const { abi } = PaidPromotion


    const [inputValue, setInputValue] = useState();

    const [collab, setCollab] = useState();

    const { account, library } = useEthers();

    const getTokenBalance = async () => {
        const signer = library.getSigner();
        const ctr = new CTR(paidPromotionAddress, abi, signer);
        let tx = await ctr.getCollab(inputValue);
        setCollab(tx)
    }

    const handleSubmit = (event) => {
        getTokenBalance();
        console.log(collab)

        event.preventDefault();

    };
    return (

        <form onSubmit={handleSubmit} style={{ width: '600px' }}>


            <div class="input-group mb-3">
                <span class="input-group-text">ID</span>
                <input type='number' class="form-control" step={1} min="0" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <div class="d-flex justify-content-center ">

                <button type="submit" class="btn btn-primary create-collab-button mt-4" >See Collab</button>
            </div>


        </form>
    );
}



export default Collaborations;
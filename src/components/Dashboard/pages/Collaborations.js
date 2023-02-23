import PaidPromotion from "./../../../chain-info/contracts/PaidPromotion.json"
import { useState } from "react"
import { useEthers } from "@usedapp/core";
import { Contract as CTR } from 'ethers';
import { ethers } from 'ethers';



function Collaborations() {

    const paidPromotionAddress = "0x6f0424cB89Cc3eCe46D2FA1dcC7fd1907357ED47"
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

    function formatDate(timestamp) {
        const date = new Date(timestamp)
        return date.toDateString()
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        getTokenBalance();
        console.log(collab)
    };


    return (

        <div class=" col-lg-6 col-md-6 col-12">

            {!collab && <form onSubmit={handleSubmit} >


                <div class="input-group mb-3">
                    <span class="input-group-text">ID</span>
                    <input type='number' class="form-control" step={1} min="0" value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                </div>
                <div class="d-flex justify-content-center ">

                    <button type="submit" class="btn btn-primary create-collab-button mt-4" >See Collab</button>
                </div>
            </form>}
            {collab && <div class="mt-4">
                <div class="card text-center ">
                    <div class="card-body">
                        <button type="button" class="btn-close" onClick={() => setCollab(undefined)}></button>
                        <h5 class="card-title">Collaboration</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <a href={"https://goerli.etherscan.io/address/" + collab[0]} target="_blank"><li class="list-group-item">Promoter</li></a>
                        <a href={"https://goerli.etherscan.io/address/" + collab[1]} target="_blank"><li class="list-group-item">Client</li></a>
                        <a href={collab[2]} target="_blank"><li class="list-group-item">Video Infos</li></a>
                        <li class="list-group-item">End date : {formatDate(Number(collab[3]))}</li>
                        <li class="list-group-item">amount : {ethers.utils.formatEther(collab[4])} ETH</li>
                        <li class="list-group-item">clientBalance : {ethers.utils.formatEther(collab[5])} ETH</li>
                        <li class="list-group-item">lastViewsCount : {collab[6].toString()}</li>
                    </ul>
                </div>
            </div>}
        </div>
    );
}



export default Collaborations;
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useCreateCollaboration } from "./../../../hooks/useCreateCollaboration";
import { ethers } from 'ethers';

export function AddCollaboration() {



    // -------------------------------------------------------------------------------
    const apiKey = process.env.REACT_APP_COIN_BASE_API_KEY;// Your Coinbase API key
    const apiUrl = `https://api.coinbase.com/v2/exchange-rates?currency=ETH`;
    const [data, setData] = useState(null);
    const [ethAmount, setEthAmount] = useState(null);
    const [changedInput, setChangedInput] = useState(null);


    const account = useOutletContext();
    useEffect(() => {
        fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
            .then(response => response.json())
            .then(data => {
                const ethToUsd = data.data.rates.USD;
                const usdAmount = ethAmount * ethToUsd;
                setData(usdAmount);
            })
            .catch(error => console.error(error));
    }, [ethAmount]);
    // -------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------
    const [values, setValues] = useState({
        promoterAddress: "",
        videoUrl: "",
        amountPerView: "",
        Total: "",
        endDate: ""
    });


    function handleInputChange(event) {
        const { name, value } = event.target
        if (name === "amountPerView") {
            setEthAmount(event.target.value)
            setChangedInput(1)
        }
        if (name === "Total") {
            setEthAmount(event.target.value)
            setChangedInput(2)
        }
        setValues(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        })
    }

    const { state, send } = useCreateCollaboration();
    const { status } = state

    function getVideoId(url) {
        const match = url.match(/(?:\/|%3D|v=)([\w-]{11})(?:[%#?&]|$)/);
        return match ? match[1] : null;
    }


    const handleCreateCollaboration = (event) => {
        const promoterAddress = values["promoterAddress"]
        const clientAddress = account

        const videoId = getVideoId(values["videoUrl"])
        const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

        const videoUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + videoId + "&key=" + youtubeApiKey;

        // const endDate = values["endDate"].split("-")
        const date = new Date(values['endDate']);
        const endTimestamp = Math.round(date.getTime() / 1000);
        const amount = ethers.utils.parseEther(values["amountPerView"])
        const total = ethers.utils.parseEther(values["Total"])

        send(promoterAddress, clientAddress, videoUrl, endTimestamp, amount, { value: total })
        // console.log(seconds)
        event.preventDefault();
    }
    // -------------------------------------------------------------------------------

    return (
        <form style={{ width: '600px' }}>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2"><i class='fas fa-wallet' style={{ marginRight: '4px' }}></i></span>
                <input type="text" class="form-control" placeholder="Promoter Address" value={values.promoterAddress} name="promoterAddress" onChange={handleInputChange} />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3"><i class='fab fa-youtube'></i></span>
                <input type="text" class="form-control" id="basic-url" placeholder="Video URL" name="videoUrl" value={values.videoUrl} onChange={handleInputChange} />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Amount Per view</span>
                <input type='number' class="form-control" id="myInput" min="0.000000000000000001" max="1" step="0.000000000000000001" name="amountPerView" value={values.amountPerView} onChange={handleInputChange} />
                <span class="input-group-text">ETH</span>
                {data && changedInput === 1 ? <span class="input-group-text"> {data.toFixed(2)} $</span> : <span class="input-group-text">$</span>}
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Total</span>
                <input id="startDate" class="form-control" type="number" name="Total" value={values.Total} onChange={handleInputChange} />
                <span class="input-group-text">ETH</span>
                {data && changedInput === 2 ? <span class="input-group-text"> {data.toFixed(2)} $</span> : <span class="input-group-text">$</span>}
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">End date</span>
                <input id="startDate" class="form-control" type="date" name="endDate" value={values.endDate} onChange={handleInputChange} />
            </div>


            <div class="d-flex justify-content-center mb-3">

                <button type="submit" class="btn btn-primary create-collab-button mt-4" onClick={handleCreateCollaboration}>Create Collaboration</button>
            </div>

        </form>

    );
}

export default AddCollaboration;
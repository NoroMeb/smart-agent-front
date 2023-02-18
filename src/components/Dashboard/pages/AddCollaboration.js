import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useCreateCollaboration } from "../../../hooks/useCreateCollaboration";
export function AddCollaboration() {

    // -------------------------------------------------------------------------------
    const apiKey = process.env.REACT_APP_COIN_BASE_API_KEY;// Your Coinbase API key
    const apiUrl = `https://api.coinbase.com/v2/exchange-rates?currency=ETH`;
    const [data, setData] = useState(null);
    const [ethAmount, setEthAmount] = useState(null);


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
    const initialValues = {
        promoterAddress: "",
        videoUrl: "",
        amountPerView: "",
        endDate: ""
    };
    const [values, setValues] = useState({
        promoterAddress: "",
        videoUrl: "",
        amountPerView: "",
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

    // const { state, send } = useCreateCollaboration();

    const handleCreateCollaboration = (event) => {
        console.log(Object.values(values));
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
                <span class="input-group-text" id="basic-addon3">Video URL</span>
                <input type="text" class="form-control" id="basic-url" placeholder="https://www.youtube.com/watch?v=VIDEO-ID" name="videoUrl" value={values.videoUrl} onChange={handleInputChange} />
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

            <div class="d-flex justify-content-center ">

                <button type="submit" class="btn btn-primary create-collab-button mt-4" onClick={handleCreateCollaboration}>Create Collaboration</button>
            </div>

        </form>

    );
}

export default AddCollaboration;
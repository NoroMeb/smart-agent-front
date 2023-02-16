import { useState, useEffect } from "react";

function AddCollaboration() {

    // const ethAmount = 1; // Amount of ETH to convert
    const apiKey = 'ZKW7whJ5AjQoMhcg'; // Your Coinbase API key
    const apiUrl = `https://api.coinbase.com/v2/exchange-rates?currency=ETH`;

    // Make a request to the Coinbase API

    const [data, setData] = useState(null);
    const [ethAmount, setEthAmount] = useState(1);

    const handleInputChange = (event) => {
        setEthAmount(event.target.value);
    };


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

    return (
        <form >
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class='fas fa-wallet' style={{ marginRight: '4px' }}></i></span>
                <input type="text" class="form-control" placeholder="Your Address" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2"><i class='fas fa-wallet' style={{ marginRight: '4px' }}></i></span>
                <input type="text" class="form-control" placeholder="Promoter Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            {data ? <h1>{data} $</h1> : <h1>HIII</h1>}

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Video URL</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="https://www.youtube.com/watch?v=VIDEO-ID" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Amount Per view</span>
                <input type='number' class="form-control" id="myInput" min="0.000000000000000001" max="1" step="0.000000000000000001" onChange={handleInputChange} />
                <span class="input-group-text">ETH</span>
            </div>


            <div class="input-group mb-3">
                <span class="input-group-text">End date</span>
                <input id="startDate" class="form-control" type="date" />

            </div>
            <hr />
            <button type="submit" class="btn btn-primary custom-button ">Submit</button>

        </form>

    );
}

export default AddCollaboration;
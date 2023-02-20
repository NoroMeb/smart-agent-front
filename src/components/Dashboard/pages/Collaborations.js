import PaidPromotion from "./../../../chain-info/contracts/PaidPromotion.json"

function Collaborations() {

    const paidPromotionAddress = "0x30401029AfD9f2835260886c2E1aF2359ff77d4C"
    const { abi } = PaidPromotion

    const handleClick = (event) => {
        event.preventDefault();
    }
    return (

        <form style={{ width: '600px' }}>


            <div class="input-group mb-3">
                <span class="input-group-text">ID</span>
                <input type='number' class="form-control" step={1} min="0" />
            </div>
            <div class="d-flex justify-content-center ">



                <button type="submit" class="btn btn-primary create-collab-button mt-4" onClick={handleClick}>See Collab</button>
            </div>



        </form>
    );
}



export default Collaborations;
import { useState } from "react";
import { useEndCollaboration } from "../../../hooks/useEndCollaboration";





function EndCollaboration() {

    const [id, setId] = useState(null)

    function handleInputChange(event) {
        setId(event.target.value);
    }

    const { state, send } = useEndCollaboration();

    const { status } = state

    function handleEndCollaboration(event) {
        send(id);
        console.log(state.status);
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

                    <button type="submit" class="btn btn-primary create-collab-button mt-4" onClick={handleEndCollaboration} >End Collaboration</button>
                </div>
            </form>
            <p>Status: {status}</p>
        </div>
    );
}

export default EndCollaboration;
import Explain from "./../../images/how-it-works.png"
function HowItWorks() {
    return (<div class="how-it-works-div" id="how-it-works-div">
        {/* <h1>How It works</h1> */}
        <div class="row">
            <div class="col-12">
                {/* <img src={Explain} style={{ width: "950px", marginBottom: "100px", marginTop: "100px" }}></img> */}
                <img src={Explain} class="img-fluid" style={{ maxWidth: "100%", marginBottom: "100px", marginTop: "100px" }}></img>
            </div>
        </div>
    </div>);
}

export default HowItWorks;
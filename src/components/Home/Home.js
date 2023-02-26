import Main from "./Main";
import NavBar from "./NavBar";
import HowItWorks from "./HowItWorks";
function Home() {
    return (
        <div class="container-fluid home" >
            <div class="row" style={{ height: '62px' }}>
                <NavBar />

            </div>
            <div class="row">
                <div class="col px-0">
                    <Main />
                </div>
            </div>
            <div class="row" style={{ backgroundColor: 'black' }}>
                <HowItWorks />
            </div>
        </div>

    );
}

export default Home;
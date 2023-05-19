import Banner from "../components/banner";
import NavBar from "../components/navbar";
import Carousal from "../components/carousal";
import Featured from "../components/featured";
import JoinUs from "../components/joinus";
import Footer  from "../components/footer";

export default function WhoWeAre() {
    return (
        <>
            <Banner />
            <NavBar />
            <Carousal />
            <section className="who mt-4 mb-4 text-left container mx-auto px-2">
                <div>
                    <p className="lead mt-4 w-1/2 text-2xl">We are an local humanitarian organisation that strives for a world free from poverty, fear and oppression.</p>
                    <p className="mt-4 text-lg w-1/2">We deliver life-saving and life-changing interventions to the world's poorest and most vulnerable people. From rapid emergency response to innovative development programming, we go to the hardest to reach places to make sure that no-one is left behind.</p>
                </div>
            </section>
            <section class="inthis-section">
                <div class="container mx-auto px-2">
                    <h1 class="green header-with-line">In this section</h1>
                    <div className="flex-container mb-4 grid-container w-full">
                        <Featured
                            title="What we stand for"
                            body="our mission is to end extreme poverty whatever it takes"
                        />
                        <Featured
                            title="What we stand for"
                            body="our mission is to end extreme poverty whatever it takes"
                        />
                        <Featured
                            title="What we stand for"
                            body="our mission is to end extreme poverty whatever it takes"
                        />
                    </div>
                </div>
            </section>

            <section className="join-us container mx-auto px-2">
                <JoinUs/>
            </section>
            <Footer/>
        </>
    );
}
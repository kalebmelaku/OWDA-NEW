import Banner from "../components/banner";
import DonationCard from "../components/donationCard";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function Donate() {
    return (
        <>
           <Banner/>
           <NavBar/>
            <h1 className="text-2xl mt-4 py-4 font-bold text-center"> Donate to our Programs </h1>
           <div className="container w-full mx-auto p-2 flex-container mb-4 w-full">
                <DonationCard title='Ebirr' number='222023'/>
                <DonationCard title='Ebirr' number='222023'/>
                <DonationCard title='Ebirr' number='222023'/>
                <DonationCard title='Ebirr' number='222023'/>
           </div>

           <Footer/>
        </>
    )
}
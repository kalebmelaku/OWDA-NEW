import Banner from "../components/banner";
import DonationCard from "../components/donationCard";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function Donate() {
    return (
        <>
           <Banner/>
           <NavBar/>
           <div className="container mx-auto p-2 flex-container mb-4 grid-container w-full">
                <DonationCard title='Ebirr'/>
                <DonationCard title='Ebirr'/>
           </div>

           <Footer/>
        </>
    )
}
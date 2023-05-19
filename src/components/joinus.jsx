import Img from '../assets/home-img.png';
import { Link } from 'react-router-dom';
export default function JoinUs() {
    return (
        <>
				<div className="join-us-elements">
					<img src={Img} alt="join-us" />
					<div className="detail text-center">
						<p>Join us in building a more equitable world.</p>
						<Link to="#" className="bg-red-700 text-white py-3 px-5">Donate</Link>
					</div>
				</div>
        </>
    );
}
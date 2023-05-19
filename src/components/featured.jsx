import { Link } from "react-router-dom";
import Img from '../assets/home-img.png'
import { PropTypes } from "prop-types";
export default function Featured(props) {
    return (
        <>
					<div className="box text-left h-full">
						<div className="img">
							<img src={Img} alt="Emergency" />
						</div>
						<h3 className="font-bold">
                        { props.title }
						</h3>
						<p className="mb-4">
							{props.body}
						</p>
						<a href="#" className="btn btn-green">Read More</a>
					</div>
					
			
			
		
        </>
    )
}
Featured.propType = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}
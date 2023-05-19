import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Img from '../assets/home-img.png'
export default function WhatBox(props) {
    return (
        <>
            <div
                className="card-custom card-custom-two bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <div className="img-container">
                    <img src={Img} alt="image" />
                </div>
                <div className="text-container flex items-center justify-between p-4">
                    <p className="text-lg">{ props.title }</p>
                    <Link to='/program'>Learn More</Link>
                </div>  
            </div>
        </>
    );
}
WhatBox.propTypes = {
    title: PropTypes.string.isRequired,
  };
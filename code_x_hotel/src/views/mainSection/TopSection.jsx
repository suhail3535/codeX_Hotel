import React from "react";
import "./topsection.css";
import sectionImage from "../../images/image.png";
const TopSection = () => {
    return (
        <div className="main_section">
            <div className="content_div">
                <h1 className="heading">Find your perfect place to stay</h1>
                <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
                <button> watch video</button>
            </div>
            <div className="image_div">
                <img src={sectionImage} alt="topsectionimage" />
            </div>
        </div>
    );
};

export default TopSection;

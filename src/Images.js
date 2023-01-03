import React from "react";
import image0 from './images/0.jpg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';

const Images = (props) => {
    const { mistakes } = props;
    let mistake = mistakes.length;
    let image = '';

    if (mistake === 0) {
        image = <img src={image0} alt="image0" className="img" />
    } else if (mistake === 1) {
        image = <img src={image1} alt="image1" className="img" />
    } else if (mistake === 2) {
        image = <img src={image2} alt="image2" className="img" />
    } else if (mistake === 3) {
        image = <img src={image3} alt="image3" className="img" />
    } else if (mistake === 4) {
        image = <img src={image4} alt="image4" className="img" />
    } else if (mistake === 5) {
        image = <img src={image5} alt="image5" className="img" />
    } else if (mistake === 6) {
        image = <img src={image6} alt="image6" className="img" />
    };

    return image;
};

export { Images };

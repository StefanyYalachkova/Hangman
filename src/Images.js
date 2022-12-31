import React from "react";
import img0 from './images/0.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

const Images = (props) => {
    const { wrongLetters } = props;
    let result = wrongLetters.length;
    let img = ''

    if (result === 0) {
        img = <img src={img0} alt="img0" className="img" />
    } else if (result === 1) {
        img = <img src={img1} alt="img1" className="img" />
    } else if (result === 2) {
        img = <img src={img2} alt="img2" className="img" />
    } else if (result === 3) {
        img = <img src={img3} alt="img3" className="img" />
    } else if (result === 4) {
        img = <img src={img4} alt="img4" className="img" />
    } else if (result === 5) {
        img = <img src={img5} alt="img5" className="img" />
    } else if (result === 6) {
        img = <img src={img6} alt="img6" className="img" />
    };

    return img;
};

export { Images };
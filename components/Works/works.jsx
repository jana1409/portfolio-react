import React from 'react'
import './works.css';
import port1 from '../../src/assets/proj1.jpeg';
import port2 from '../../src/assets/projslide.jpeg';
import port3 from '../../src/assets/proj3.jpeg';

const Works = () => {
    return(
        <section id='works'>
            <h2>My Projects</h2>
            <span className="worksDesc">I take prid in paying attention to the smallest details.</span>
            <div className="worksImgs">
                <img src={port1} alt="" className="worksImg" />
                <img src={port2} alt="" className="worksImg" />
                <img src={port3} alt="" className="worksImg" />
            </div>
        </section>

    );
}

export default Works;
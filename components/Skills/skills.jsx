import React from 'react';
import './skills.css'
import UIDesign from '../../src/assets/ui-design.png';
import WebDesign from '../../src/assets/website-design.png';
import AppDesign from '../../src/assets/app-design.png';

const Skills = () => {
    return(
        <section id ='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">A driven beginner software engineer with a solid foundation in HTML, CSS, JavaScript, React, Java,
            <br/> and SQL. Passionate about building dynamic web applications and solving complex problems through clean, efficient code.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText"></div>
                    <h2>UI/UX Design</h2>
                    <p>A passionate beginner UX/UI designer focused on creating intuitive and user-friendly digital experiences.</p>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText"></div>
                    <h2>Website Design</h2>
                    <p>A motivated beginner web designer dedicated to crafting responsive and visually appealing websites.</p>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText"></div>
                    <h2>Database Developer</h2>
                    <p>A detail-oriented beginner database developer eager to design, manage, and optimize efficient data systems.</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;
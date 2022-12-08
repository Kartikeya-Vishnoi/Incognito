import React from 'react'
import john from './images/john-doe.png'
import classes from './About.module.css'

const About = () => {
    return (
        <div className={classes.about} id='about'>
            <div className={classes.container}>
                <img src={john} alt='john' />
                <div className={classes.col-2}>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                    <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <button className={classes.button}>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About

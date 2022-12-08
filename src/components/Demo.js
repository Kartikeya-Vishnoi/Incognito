import React from 'react'
import classes from './Demo.module.css'

const Demo = () => {
    return (
        <div className={classes.demo} id='demo'>
            <div className={classes.container}>
                <div className={classes.col-1}>
                    <p>More Than 100 Financial Planners,</p>
                    <p>One Philosophy</p>
                    <p>Every single one of our financial advisors receives rigorous training according to John Doe’s philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance.</p>
                    <button className={classes.button}>Get your free financial analysis</button>
                </div>
                <div className={classes.col-2}>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo

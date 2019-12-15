import React, {Component} from 'react';

const Blogsb = (props) => {
    return(
        <div className="blogswrap2">
            <div className="contentatasb">
                <div className="gambarpaket">
                <img src={props.img} className="imageblogs23"/>
                
                </div>
                <div className="post">
                    <p>{props.date}</p>
                    <h4>{props.heading}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore maxime nihil, eaque ad doloribus!</p>
                </div>
            </div>

        </div>
        )
    }


export default Blogsb;
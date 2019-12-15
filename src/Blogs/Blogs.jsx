import React, {Component} from 'react';

const Blogs = (props) => {
    return(
        <div className="blogswrap">
            <div className="contentatas">
                <div className="gambarpaket">
                <img src={props.img} className="imageblogs"/>
                
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


export default Blogs;
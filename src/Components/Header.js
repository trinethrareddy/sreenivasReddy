import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export class Header extends Component{    
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="header-component">
                <div className="flex-1">
                    <div className="p-l-5"> Alamuru Sreenivasa Reddy</div>
                </div>
                <div className="flex-1">
                    <div className="f-r p-r-5">Contact</div>
                    <div className="f-r p-r-5">Home</div>
                </div>
            </div>
        )
    }

}
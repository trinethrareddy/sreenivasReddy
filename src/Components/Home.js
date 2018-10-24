import React, { Component } from 'react';
import { HomeSliderComponent } from './HomeSlider';
import { Header } from './Header';
import { ContactUs } from './ContactUs';

export class HomeComponent extends Component{    
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="home-component">
                <Header/>
                <HomeSliderComponent/>
                <ContactUs/>
            </div>
        )
    }

}
import React, { Component } from 'react';
import { HomeSliderComponent } from './HomeSlider';
import { Header } from './Header';

export class HomeComponent extends Component{    
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="home-component">
                <Header/>
                <HomeSliderComponent/>
            </div>
        )
    }

}
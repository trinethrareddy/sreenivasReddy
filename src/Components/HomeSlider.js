import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pic1 from  "../assets/images/pic1.png";
import pic2 from  "../assets/images/pic2.png";
import pic3 from  "../assets/images/pic3.png";
import pic4 from  "../assets/images/pic4.png";
import pic5 from  "../assets/images/pic5.png";
import pic6 from  "../assets/images/pic6.png";
import pic7 from  "../assets/images/pic7.png";
import pic8 from  "../assets/images/pic8.png";

export class HomeSliderComponent extends Component{    
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="home-slider-component">
                <Carousel showThumbs={false}
                    showStatus={false}
                    useKeyboardArrows
                    autoPlay infiniteLoop
                    >
                    <div>
                        <img src={pic1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={pic2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={pic3} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={pic4}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={pic5}/>
                        <p className="legend">Legend 5</p>
                    </div>
                    <div>
                        <img src={pic6}/>
                        <p className="legend">Legend 6</p>
                    </div>
                    <div>
                        <img src={pic7}/>
                        <p className="legend">Legend 7</p>
                    </div>
                    <div>
                        <img src={pic8}/>
                        <p className="legend">Legend 8</p>
                    </div>
                </Carousel>
            </div>
        )
    }

}
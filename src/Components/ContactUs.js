import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
export class ContactUs extends Component{    
    constructor(props){
        super(props);
        this.map = undefined;
        this.initMap = this.initMap.bind(this);
    }
     initMap() {
        this.map = new window.google.maps.Map(document.getElementById('__sr-map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
      componentDidMount(){
          let _this = this;
      }
    render(){
        return (
            <div className="contact-us">
            <h2>Contact</h2>
                <Col md={8}>
                      <iframe className="_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.806191215294!2d77.59140307797074!3d14.666937475744652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14aeed4c00df3%3A0xb86910095e709077!2sAravind+Nagar+Park!5e0!3m2!1sen!2sin!4v1540390388252" width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
                </Col>
                <Col md={4}>
                        <div className="col-xs-12 padding-none">
                            <div className="panel panel-success">
                                <div className="panel-heading">
                                    Email Id
                                </div>
                                <div className="panel-body">
                                    <i className="fa fa-envelope"></i><a href="mailto:alamurusreenivasreddy@gmail.com"> alamurusreenivasreddy@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 padding-none">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    Website
                                </div>
                                <div className="panel-body">
                                    <i className="fa fa-dribbble"></i> <a href="https://alamurusreenivasreddy.herokuapp.com" target="_blank"> https://alamurusreenivasreddy.herokuapp.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 padding-none">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Contact Number
                                </div>
                                <div className="panel-body">
                                    <i className="fa fa-whatsapp" ></i> <a href="tel:+919490979149"> +91-(9490)-(979)-(149)</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 padding-none">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    Facebook
                                </div>
                                <div className="panel-body">
                                    <i className="fa fa-github" ></i><a href="https://www.facebook.com/alamuru.sreenivasareddy" target="_blank"> https://www.facebook.com/alamuru.sreenivasareddy </a>

                                </div>
                            </div>
                        </div>
                </Col>
           
            </div>
        )
    }

}
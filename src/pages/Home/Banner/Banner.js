import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import ban1 from "../../../images/banner/banner1.jpg";
import ban2 from "../../../images/banner/banner2.jpg";
import ban3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className='banner'>
          <img className='d-block w-100' src={ban1} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='banner'>
          <img className='d-block w-100' src={ban2} alt='Second slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='banner'>
          <img className='d-block w-100' src={ban3} alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;

import React from 'react';
import { Carousel } from 'react-bootstrap';

const Landing = () => {
    return (
        <>
        <style type="text/css">
            {`
            .carousel-item {
                height: 65vh;
                min-height: 350px;
                background: no-repeat center center scroll;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
                }
            `}
        </style>

        <Carousel>
            <Carousel.Item>
                <img
                className="d-block img-fluid mx-auto"
                src="https://images.unsplash.com/photo-1509085702214-9178b0941e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=40"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img-fluid mx-auto"
                src="https://images.unsplash.com/photo-1511771983947-d0a43a94f18b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1290&q=40"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img-fluid mx-auto"
                src="https://images.unsplash.com/photo-1459347268516-3ed71100e718?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=40"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <p class="text-center font-weight-normal text-light" style={{marginTop: "20px"}}>Center aligned text on all viewport sizes.</p>
        </>
    )
}

export default Landing;
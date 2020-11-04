import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import TodoList from '../specific/todo';



const SliderContainer = styled.div`
width:100vw;
height:80vh;
background-color:green;
`

const SliderContent = styled.div`
width:100vw;
height:80vh;
background-color:green;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <SliderContainer>
            <Slider  {...settings}>
            <SliderContent>
                <TodoList></TodoList>
            </SliderContent>
            <SliderContent>
                <h3>2</h3>
            </SliderContent>
            <SliderContent>
                <h3>3</h3>
            </SliderContent>
            <SliderContent>
                <h3>4</h3>
            </SliderContent>
          </Slider>
        </SliderContainer>
      </div>
    );
  }
}

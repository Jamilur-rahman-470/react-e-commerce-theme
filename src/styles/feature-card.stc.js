import styled from "styled-components";

export const Slider = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    .tns-outer{
        button{
            display: none;
        }
    }
    .slider-btns{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        #next-slider-nav{
            position: absolute;
            top: 0;
            right: 0;
            background: #000;
            border: none;
            box-shadow: none;
            padding: 10px;
            outline: none;
            
        }
        #prev-slider-nav{
            position: absolute;
            top: 0;
            left: 0;
            background: #000;
            border: none;
            box-shadow: none;
            padding: 10px;
            outline: none;
            
        }
    }
`
import styled from "styled-components";


export const Banner = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    position: relative;
`

export const IMG = styled.div`
    width: 100%;
    height: 100%;
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    background-image: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    background: rgba(0,0,0, 0.1);
`

export const Content = styled.div`
    width: 100%;
    height: 50%;
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 30px;
        font-weight: 800;
        color: #0D1136;
    }
    h4{
        font-size: 20px;
        font-weight: 800;
        color: rgba(13, 17, 54, .8);
    }
`

export const Search = styled.div`
    width: 500px;
    @media (max-width: 768px){
        width: 400px;
    }
    @media (max-width: 430px){
        width: 300px;
    }

    form{
        margin: 30px 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 5px;
        .prefix{
            border-radius: 5px;
            box-sizing: border-box;
            padding: 10px 12px;
            margin: 2px;
            background: #f9f9f9;
            color: #019779;
            font-size: 14px;
            font-weight: 800;
        }
        input{
            width: 100%;
            border: none;
            outline: none;
            box-shadow: none;
            box-sizing: border-box;
            padding: 10px 12px;
            font-size: 14px;
            font-weight: 800;
            color: #019779;
        }
        .btn{
            background-color: #019779;
            color: #fff;
            border-radius: 0 5px 5px 0;
            width: 100px;
            font-size: 14px;
            font-weight: 800;
        }
    }
`
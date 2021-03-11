import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    :root{
        --primaryBgWhite: #FFFFFF;
        --primaryFontGrey: #474F44;
        --primaryBGBtnGreen: #1FB760;
        --secondaryBGPurple: #7F0067;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    body {
        background-image: linear-gradient(#ff9d2f, #ff6126);
        color: var(--primaryFontGrey);
        font-family: 'Lato', sans-serif;
        font-weight: bolder;
    }
`;

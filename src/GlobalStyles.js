import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    :root{
        --primaryBgWhite: #FFFFFF;
        --primaryFontGrey: #474F44;
        --primaryBGBtnGreen: #91ce7e;
        --primaryBGPurpleDarker: #7c2c7a;
        --secondaryBGPurple: #b780b7;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    body {
        background-color: (--primaryBgWhite);
        color: var(--primaryFontGrey);
        font-family: 'Lato', sans-serif;
        font-weight: bolder;
    }
`;

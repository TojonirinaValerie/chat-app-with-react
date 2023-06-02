import { createGlobalStyle } from 'styled-components';
import { color } from './variables';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: 0;
}

ul{
    list-style: none;
}

html, body, #root{
    height: 100% !important;
}

body{
    background-color: ${color.bgWhite};
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input:focus{
    outline: none;
}

i, svg{
    transition-property: color;
    transition-duration: 0.3s;
}

img {
    width: 100%;
}
.menu-active{
    color: ${color.purpleLight};
    // font-size: 2em;
}

.plus-nine{
    font-size: 0.6em;
    padding: 5px;
}

.message-content{
    background-color: ${color.purpleLight};
    color: ${color.white};
    border-radius: 20px 20px 0px 20px;
}

`;

export default GlobalStyle;

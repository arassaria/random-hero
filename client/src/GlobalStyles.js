import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle` 
body {
    font-family: "KOverwatch", sans-serif;
    background: white;
    margin: 0;
    padding: 0;
}

html {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: blue;
    font-size: 2rem;
}
`;
export default GlobalStyle;

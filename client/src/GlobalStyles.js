import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle` 
body {
    font-family: "KOverwatch", sans-serif;
    background: grey;
    margin: 0;
    padding: 0;
}

html {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}
`;
export default GlobalStyle;

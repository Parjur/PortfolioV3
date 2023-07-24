import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
    //border: 1px red solid;
}

body {
    margin: auto;
    width: 100%;
    background-image:   linear-gradient(to bottom, black 29%, transparent),
                        linear-gradient(to bottom right, #408ec6, transparent),
                        linear-gradient(to bottom left, #1e2761 20%, transparent),
                        linear-gradient(to top right, #1e2761 20%, transparent),
                        linear-gradient(to top left, #7a2048, transparent);
    }
`

export default GlobalStyle
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: "Azo Sans",sans-serif;
    font-size: 1.4rem;
  }

  @font-face {
    font-family: "Azo Sans";
    src: url("/fonts/AzoSans-BoldItalic.eot");
    src: local("Azo Sans Bold Italic"), local("AzoSans-BoldItalic"),
      url("/fonts/AzoSans-BoldItalic.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-BoldItalic.woff2") format("woff2"),
      url("/fonts/AzoSans-BoldItalic.woff") format("woff"),
      url("/fonts/AzoSans-BoldItalic.ttf") format("truetype");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "Azo Sans Tn";
    src: url("/fonts/AzoSans-Thin.eot");
    src: local("Azo Sans Thin"), local("AzoSans-Thin"),
      url("/fonts/AzoSans-Thin.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-Thin.woff2") format("woff2"),
      url("/fonts/AzoSans-Thin.woff") format("woff"),
      url("/fonts/AzoSans-Thin.ttf") format("truetype");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "Azo Sans Lt";
    src: url("/fonts/AzoSans-LightItalic.eot");
    src: local("Azo Sans Light Italic"), local("AzoSans-LightItalic"),
      url("/fonts/AzoSans-LightItalic.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-LightItalic.woff2") format("woff2"),
      url("/fonts/AzoSans-LightItalic.woff") format("woff"),
      url("/fonts/AzoSans-LightItalic.ttf") format("truetype");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "Azo Sans Tn";
    src: url("/fonts/AzoSans-ThinItalic.eot");
    src: local("Azo Sans Thin Italic"), local("AzoSans-ThinItalic"),
      url("/fonts/AzoSans-ThinItalic.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-ThinItalic.woff2") format("woff2"),
      url("/fonts/AzoSans-ThinItalic.woff") format("woff"),
      url("/fonts/AzoSans-ThinItalic.ttf") format("truetype");
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: "Azo Sans";
    src: url("/fonts/AzoSans-Regular.eot");
    src: local("Azo Sans Regular"), local("AzoSans-Regular"),
      url("/fonts/AzoSans-Regular.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-Regular.woff2") format("woff2"),
      url("/fonts/AzoSans-Regular.woff") format("woff"),
      url("/fonts/AzoSans-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Azo Sans Md";
    src: url("/fonts/AzoSans-MediumItalic.eot");
    src: local("Azo Sans Medium Italic"), local("AzoSans-MediumItalic"),
      url("/fonts/AzoSans-MediumItalic.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-MediumItalic.woff2") format("woff2"),
      url("/fonts/AzoSans-MediumItalic.woff") format("woff"),
      url("/fonts/AzoSans-MediumItalic.ttf") format("truetype");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Azo Sans Bk";
    src: url("/fonts/AzoSans-Black.eot");
    src: local("Azo Sans Black"), local("AzoSans-Black"),
      url("/fonts/AzoSans-Black.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-Black.woff2") format("woff2"),
      url("/fonts/AzoSans-Black.woff") format("woff"),
      url("/fonts/AzoSans-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Azo Sans Md";
    src: url("/fonts/AzoSans-Medium.eot");
    src: local("Azo Sans Medium"), local("AzoSans-Medium"),
      url("/fonts/AzoSans-Medium.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-Medium.woff2") format("woff2"),
      url("/fonts/AzoSans-Medium.woff") format("woff"),
      url("/fonts/AzoSans-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Azo Sans Bk";
    src: url("/fonts/AzoSans-BlackItalic.eot");
    src: local("Azo Sans Black Italic"), local("AzoSans-BlackItalic"),
      url("/fonts/AzoSans-BlackItalic.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-BlackItalic.woff2") format("woff2"),
      url("/fonts/AzoSans-BlackItalic.woff") format("woff"),
      url("/fonts/AzoSans-BlackItalic.ttf") format("truetype");
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: "Azo Sans Lt";
    src: url("/fonts/AzoSans-Light.eot");
    src: local("Azo Sans Light"), local("AzoSans-Light"),
      url("/fonts/AzoSans-Light.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-Light.woff2") format("woff2"),
      url("/fonts/AzoSans-Light.woff") format("woff"),
      url("/fonts/AzoSans-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Azo Sans";
    src: url("/fonts/AzoSans-Italic.eot");
    src: local("Azo Sans Italic"), local("AzoSans-Italic"),
      url("/fonts/AzoSans-Italic.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-Italic.woff2") format("woff2"),
      url("/fonts/AzoSans-Italic.woff") format("woff"),
      url("/fonts/AzoSans-Italic.ttf") format("truetype");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Azo Sans";
    src: url("/fonts/AzoSans-Bold.eot");
    src: local("Azo Sans Bold"), local("AzoSans-Bold"),
      url("/fonts/AzoSans-Bold.eot?#iefix") format("embedded-opentype"),
      url("/fonts/AzoSans-Bold.woff2") format("woff2"),
      url("/fonts/AzoSans-Bold.woff") format("woff"),
      url("/fonts/AzoSans-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }
`

export default GlobalStyles

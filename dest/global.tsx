import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`


  /* UltraLight */
    @font-face {
      font-family: 'Gilroy-UltraLight';
      src:
      url('/font/Gilroy-UltraLight.woff2') format('woff2'),
      url('/font/Gilroy-UltraLight.woff') format('woff'),
      url('/font/Gilroy-UltraLight.ttf') format('ttf');
    }

    @font-face {
      font-family: 'Gilroy';
      src:
      url('/font/Gilroy-Regular.woff2') format('woff2'),
      url('/font/Gilroy-Regular.woff') format('woff'),
      url('/font/Gilroy-Regular.ttf') format('ttf');
    }

    @font-face {
      font-family: 'Gilroy-bold';
      src:
      url('/font/Gilroy-Bold.woff2') format('woff2'),
      url('/font/Gilroy-Bold.woff') format('woff'),
      url('/font/Gilroy-Bold.ttf') format('ttf');
    }

  :root {
    // font
    --ff-primary: 'Gilroy', sans-serif;
    --ff-bold: 'Gilroy-bold', sans-serif;


    // colors
    --color-black: #111111;
    --color-grey-1: #131415;
    --color-grey-2: #898997;
    --color-grey-3: #E1E1E1;
    --color-grey-4: #555555;
		--color-grey-border: #D3D3D3;
		--color-blue-1: #003C96;
		--color-blue-2: #3363AB;
		--color-blue-3: #E1F5FF;
		--color-blue-4: #F0FAFF;
    --color-purple: #d0d0d0;
		--color-yellow-1: #FFB900;
    --color-yellow-2: #FECE00;
		--color-white: #FFFFFF;

    --color-hover: #296B1E;


    

    --color-table-Gr: #F1F3F9;
    --color-table-Gr-light: #F8F9FC;


    --color-button-blue-1: #003C96;
    --color-button-blue-2: #7F9DCA;

		// shadow
		--custom-box-shadow: 2px 2px 15px 0px #2A2A2A1A, -2px -2px 15px 0px #2A2A2A1A;

    --custom-box-shadow-table: 0px 2px 8px 0px #0000001F;


    // font-weight
    --fw-300: 300;
    --fw-400: 400;
    --fw-500: 500;
    --fw-600: 600;
    --fw-700: 700;
    --fw-800: 800;


    // font-size 
		--fs-12: 12px;
    --fs-14: 14px;
		--fs-16: 16px;
		--fs-22: 22px;
		--fs-24: 24px;
    --fs-30: 30px;


    // line-height

    --line-height-14: 14px;
    --line-height-16: 16px; 
    --line-height-17: 17px; 
    --line-height-18: 18px;
    --line-height-19: 19px;
    --line-height-20: 20px;
		--line-height-24: 24px; 
    --line-height-35: 35px; 


  }

  body {
		max-width: 1920px;
		margin: 0 auto;

    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
		font-variant-numeric: lining-nums proportional-nums;

    background-color: var(--color-white);
    color: var(--color-black);

    a:hover {
      color: var(--color-hover);
    }


  }
`

export default Global
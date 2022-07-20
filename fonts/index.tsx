import { Global } from '@emotion/react';

export const Fonts = () => (
    <Global
        styles={`
        @font-face {
            font-family: 'Pacifico';
            font-style: normal;
            font-weight: 400;
            src: local('Pacifico Regular'), local('Pacifico-Regular'), format('woff2');
            font-display: swap;
          }
    @font-face{
    font-family: 'slick';
    font-style: normal;
            font-weight: 400;
            src: local('Pacifico Regular'), local('Pacifico-Regular'), format('woff2');
            font-display: swap;
        }
    `}
    />
);

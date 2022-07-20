import { Global } from '@emotion/react';

export const Fonts = () => (
    <Global
        styles={`

    @font-face{
    font-family: 'slick';
    font-style: normal;
            font-weight: 400;
            src: local('Pacifico Regular'), local('/fonts/roboto-regular.woff2') format('woff2');
            font-display: swap;
        }
    `}
    />
);

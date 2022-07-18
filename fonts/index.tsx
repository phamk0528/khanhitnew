import { Global } from '@emotion/react';

export const Fonts = () => (
    <Global
        styles={`
    @font-face{
    font-family: 'slick';
    font-style: normal;
            font-weight: 400;
            src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2) format('woff2');
            font-display: swap;
        }
    `}
    />
);

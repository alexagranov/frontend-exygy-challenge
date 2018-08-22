import React from 'react';
import {
    SVGClose,
    SVGCloseLarge,
    SVGHelp,
    SVGLogo,
    SVGMenu,
    SVGSearch
} from './svgs';

const SVGDefinitions = () => (
    <svg style={ { display: 'none' } } xmlns="http://www.w3.org/2000/svg">
        <SVGClose />
        <SVGCloseLarge />
        <SVGHelp />
        <SVGLogo />
        <SVGMenu />
        <SVGSearch />
    </svg>
);

export default SVGDefinitions;

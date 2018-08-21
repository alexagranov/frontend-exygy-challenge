import React from 'react';
import {
    SVGClose,
    SVGHelp,
    SVGLogo,
    SVGMenu
} from './svgs';

const SVGDefinitions = () =>
    <svg style={ { display: 'none' } } xmlns="http://www.w3.org/2000/svg">
        <SVGClose />
        <SVGHelp />
        <SVGLogo />
        <SVGMenu />
    </svg>;

export default SVGDefinitions;

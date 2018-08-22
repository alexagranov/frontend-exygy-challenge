import React from 'react';
import {
    SVGClose,
    SVGCloseLarge,
    SVGFileExcel,
    SVGFilePdf,
    SVGFileWord,
    SVGHelp,
    SVGLogo,
    SVGMenu,
    SVGMoreVert,
    SVGSearch,
    SVGStar,
} from './svgs';

const SVGDefinitions = () => (
    <svg style={ { display: 'none' } } xmlns="http://www.w3.org/2000/svg">
        <SVGClose />
        <SVGCloseLarge />
        <SVGFileExcel />
        <SVGFilePdf />
        <SVGFileWord />
        <SVGHelp />
        <SVGLogo />
        <SVGMenu />
        <SVGMoreVert />
        <SVGSearch />
        <SVGStar />
    </svg>
);

export default SVGDefinitions;

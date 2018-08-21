import React from 'react';
import TopBar from '../top-bar/top-bar';
import SVGDefinitions from '../../svg-definitions/svg-definitions';

const Layout = () => (
    <div className="Layout">
        <TopBar classes="is-fixed" />
        <SVGDefinitions />
    </div>
);

export default Layout;

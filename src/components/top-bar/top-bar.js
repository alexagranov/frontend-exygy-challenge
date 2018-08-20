import React, { Component } from 'react';
import IconBase from '../icons/icon-base';
import { ICON_IDS } from '../../svg-definitions/svgs';
import './top-bar.scss';

class TopBar extends Component {
    render() {
        return (
            <nav className="top-bar nav-bar {{default classes ''}}">

                <div className="top-bar-title nav-logo">
                    <a href="/pages/home.html">
                        <span className="nav-bar-logo">
                            <IconBase classes="i-white i-base" id={ ICON_IDS.LOGO } />
                        </span>
                        Life Sciences
                    </a>
                </div>

                <div className="top-bar-left">
                    <nav className="main-navigation">
                        <ul className="menu">
                        </ul>
                    </nav>
                </div>

                <div className="top-bar-right">
                    <nav className="secondary-navigation">
                        <ul className="menu">
                            <li>
                                <a href="#" className="nav-bar-icon">
                                    <IconBase classes="i-primary i-base" id={ ICON_IDS.HELP } />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-bar-avatar">
                                </a>
                            </li>
                            <li>
                                <a className="nav-mobile-toggler">
                                    <IconBase classes="i-primary i-medium" id={ ICON_IDS.MENU } />
                                    <IconBase classes="i-primary i-medium" id={ ICON_IDS.CLOSE } />
                                </a>
                            </li>
                        </ul>

                    </nav>

                </div>
            </nav>
        );
    }
}

export default TopBar;

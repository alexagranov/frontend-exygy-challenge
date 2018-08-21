import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import IconBase from '../icons/icon-base';
import NavItemBase from '../nav-item-base/nav-item-base';
import { ICON_IDS } from '../../svg-definitions/svgs';

const TopBar = ({ classes }) => (
    <nav className={ `top-bar nav-bar ${classes}` }>
        <div className="top-bar-title nav-logo">
            <NavLink exact to='/'>
                <span className="nav-bar-logo">
                    <IconBase classes="i-white i-base" id={ ICON_IDS.LOGO } />
                </span>
                Life Sciences
            </NavLink>
        </div>

        <div className="top-bar-left">
            <nav className="main-navigation">
                <ul className="menu">
                    <NavItemBase url="/browse" text="Browse" />
                </ul>
            </nav>
        </div>

        <div className="top-bar-right">
            <nav className="secondary-navigation">
                <ul className="menu">
                    <li>
                        <NavLink exact to='/' className="nav-bar-icon">
                            <IconBase classes="i-primary i-base" id={ ICON_IDS.HELP } />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/' className="nav-bar-avatar">
                        </NavLink>
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

TopBar.displayName = 'TopBar';

TopBar.propTypes = {
    classes: PropTypes.string
};

TopBar.defaultProps = {
    classes: ''
};

export default TopBar;

import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItemBase = ({
    classes,
    url,
    text,
    onClick
}) =>
    <li
        id="nav-item-tasks"
        className={ classes }
    >
        <NavLink exact to={ url }>
            <span>{ text }</span>
        </NavLink>
    </li>;

NavItemBase.displayName = 'NavItemBase';

NavItemBase.propTypes = {
    classes: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
};

NavItemBase.defaultProps = {
    classes: '',
    url: '#'
};

export default NavItemBase;

import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItemBase = ({
    classes,
    url,
    text
}) => (
    <li
        id="nav-item-tasks"
        className={ classes }
    >
        <NavLink exact to={ url }>
            <span>{ text }</span>
        </NavLink>
    </li>
);

NavItemBase.displayName = 'NavItemBase';

NavItemBase.propTypes = {
    classes: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string
};

NavItemBase.defaultProps = {
    classes: '',
    url: '#',
    text: ''
};

export default NavItemBase;

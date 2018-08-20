import PropTypes from 'prop-types';
import React from 'react';
import values from 'lodash.values';
import { ICON_IDS } from '../../svg-definitions/svgs';
import './icon-base.scss';

const IconBase = ({
    classes,
    id,
    height,
    width,
    x,
    y,
    onClick
}) =>
    <span
        className={ `ui-icon ${classes}` }
        onClick={ onClick }
        width={ width }
        height={ height }
        x={ x }
        y={ y }
    >
        <svg>
            <use xlinkHref={ `#${id}` } />
        </svg>
    </span>;

IconBase.displayName = 'IconBase';

IconBase.propTypes = {
    classes: PropTypes.string,
    id: PropTypes.oneOf(values(ICON_IDS)),
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    onClick: PropTypes.func
};

IconBase.defaultProps = {
    classes: ''
};

export default IconBase;

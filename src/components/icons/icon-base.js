import PropTypes from 'prop-types';
import React from 'react';
import values from 'lodash.values';
import { ICON_IDS } from '../../svg-definitions/svgs';
import noop from '../../utils/noop';

const IconBase = ({
    classes,
    id,
    onClick
}) => (
    <span
        className={ `ui-icon ${classes}` }
        onClick={ onClick }
        onKeyDown={ onClick }
        role="link"
        tabIndex={ 0 }
    >
        <svg>
            <use xlinkHref={ `#${id}` } />
        </svg>
    </span>
);

IconBase.displayName = 'IconBase';

IconBase.propTypes = {
    classes: PropTypes.string,
    id: PropTypes.oneOf(values(ICON_IDS)).isRequired,
    onClick: PropTypes.func
};

IconBase.defaultProps = {
    classes: '',
    onClick: noop
};

export default IconBase;

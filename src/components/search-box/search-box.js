import PropTypes from 'prop-types';
import React from 'react';
import IconBase from '../icons/icon-base';
import { ICON_IDS } from '../../svg-definitions/svgs';

const SearchBox = ({ classes, placeholder }) => (
    <div className="search-box-container">
        <IconBase
            classes="i-darker-gray i-base search-box-search-icon"
            id={ ICON_IDS.SEARCH }
        />
        <input
            type="text"
            id="textInput"
            className={ `search-box ${classes}` }
            placeholder={ placeholder }
        />
        <IconBase
            classes="i-medium-gray i-base search-box-close-icon"
            id={ ICON_IDS.CLOSE_LARGE }
        />
    </div>
);

SearchBox.displayName = 'SearchBox';

SearchBox.propTypes = {
    classes: PropTypes.string,
    placeholder: PropTypes.string
};

SearchBox.defaultProps = {
    classes: '',
    placeholder: ''
};

export default SearchBox;

import PropTypes from 'prop-types';
import React from 'react';
import IconBase from '../icons/icon-base';
import { ICON_IDS } from '../../svg-definitions/svgs';

const handleChange = onChange => event =>
    onChange(event && event.target.value);

const SearchBox = ({
    classes,
    placeholder,
    onInputChange,
    clearInput,
    value
}) => (
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
            onChange={ handleChange(onInputChange) }
            value={ value }
        />
        <IconBase
            classes="i-medium-gray i-base search-box-close-icon"
            id={ ICON_IDS.CLOSE_LARGE }
            onClick={ clearInput }
        />
    </div>
);

SearchBox.displayName = 'SearchBox';

SearchBox.propTypes = {
    classes: PropTypes.string,
    placeholder: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    clearInput: PropTypes.func.isRequired,
    value: PropTypes.string,
};

SearchBox.defaultProps = {
    classes: '',
    placeholder: '',
    value: ''
};

export default SearchBox;

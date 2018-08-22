import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import IconBase from '../icons/icon-base';
import { ICON_IDS } from '../../svg-definitions/svgs';
import './slat.scss';

const Slat = ({
    title,
    subtitle,
    modified_by,
    last_modified,
    status,
    country,
}) => (
    <div href="#" className="slat row align-middle collapse word" data-ref="">
        <div className="slat-avatar item-avatar">
            <IconBase classes="i-word i-xlarge" id={ ICON_IDS.FILE_WORD } />
        </div>

        <div className="slat-body expand columns">
            <div className="rows">
                <div className="columns small-12">
                    <h3 className="slat-header">{ title }</h3>
                </div>
            </div>

            <div className="row slat-subtitle">
                <div className="columns small-12">
                    <p className="slat-title-wrapper">
                        <span className="slat-subtitle-prefix">Title:</span>
                        <span className="slat-subtitle-text">{ subtitle }</span>
                    </p>
                </div>
            </div>

            <div className="row show-for-medium">
                <div className="columns small-12 medium-6">
                    <p className="slat-attr-wrapper">
                        <span className="slat-attr-key">Modified By:</span>
                        <span className="slat-attr-value">{ modified_by }</span>
                    </p>
                    <p className="slat-attr-wrapper">
                        <span className="slat-attr-key">Last Modified:</span>
                        <span className="slat-attr-value">{ `${moment(last_modified).format('L')}` }</span>
                    </p>
                </div>

                <div className="columns small-12 medium-6">
                    <p className="slat-attr-wrapper">
                        <span className="slat-attr-key">Status:</span>
                        <span className="slat-attr-value">{ status }</span>
                    </p>
                    <p className="slat-attr-wrapper">
                        <span className="slat-attr-key">Country:</span>
                        <span className="slat-attr-value">{ country }</span>
                    </p>
                </div>
            </div>
        </div>

        <div className="slat-secondary columns shrink">
            <IconBase classes="i-darker-gray i-sm-medium slat-secondary-icon" id={ ICON_IDS.STAR } />
            <span className="float-right slat-dropdown">
                <IconBase classes="i-darker-gray i-sm-medium slat-secondary-more" id={ ICON_IDS.MORE_VERT } />
            </span>
        </div>
    </div>
);

Slat.displayName = 'Slat';

Slat.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    modified_by: PropTypes.string,
    last_modified: PropTypes.string,
    status: PropTypes.string,
    country: PropTypes.string,
};

Slat.defaultProps = {
    title: 'List and description of investigators and sites - 234567 - 00000003548',
    subtitle: '16.1.4 List of Investigators',
    modified_by: '',
    last_modified: '',
    status: '',
    country: '',
};

export default Slat;

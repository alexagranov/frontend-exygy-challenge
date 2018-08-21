import React from 'react';
import SearchBox from './search-box/search-box';

const Browse = () => (
    <div className="page" data-page="browse">
        <div className="layout-content">
            <div className="layout-main">
                <div className="browse-search">
                    <SearchBox />
                </div>

                <div className="browse-stage">
                    <div className="browse-slat-set">
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Browse;

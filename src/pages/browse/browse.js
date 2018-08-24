import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import {
    requestSearchDocuments,
    setSearchString,
    clearSearchString
} from '../../actions/search';
import SearchBox from '../../components/search-box/search-box';
import Slat from '../../components/slat/slat';
import './browse.scss';

const throttleTimeout = 400;

export class Browse extends Component {
    static propTypes = {
        currentSearch: PropTypes.string,
        documents: PropTypes.array
    };

    static defaultProps = {
        currentSearch: '',
        documents: []
    }

    componentDidMount() {
        this.fetchDocuments();
    }

    fetchDocuments = () => {
        const { dispatch } = this.props;
        dispatch(requestSearchDocuments());
    }

    handleDocumentRendering = (documents) => {
        if (!documents) return this.renderNoResultsMessage();

        if (documents.length) return this.renderDocuments(documents);

        return this.renderNoResultsMessage();
    };

    handleQueryChanging = (inputValue) => {
        const { dispatch } = this.props;

        dispatch(setSearchString(inputValue));
        this.throttledRequest(inputValue);
    };

    clearQuery = () => {
        const { dispatch } = this.props;

        dispatch(clearSearchString());
        this.throttledRequest('');
    };

    throttledRequest = throttle((searchString) => {
        const { dispatch } = this.props;
        dispatch(requestSearchDocuments(searchString));
    }, throttleTimeout);

    renderDocuments = documents => (
        <div className="browse-slat-set">
            {
                documents.map(document => (
                    <Slat key={ document.id } { ...document } />
                ))
            }
        </div>
    );

    renderNoResultsMessage = () => (
        <div className="NoDocuments">
            <span>Sorry, no results.</span>
        </div>
    );

    render() {
        const {
            currentSearch,
            documents
        } = this.props;

        return (
            <div className="page" data-page="browse">
                <div className="layout-content">
                    <div className="layout-main">
                        <div className="browse-search">
                            <SearchBox onInputChange={ this.handleQueryChanging } clearInput={ this.clearQuery } value={ currentSearch } />
                        </div>
                        <div className="browse-stage">
                            { this.handleDocumentRendering(documents) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    const {
        currentSearch,
        documents
    } = state.search;

    const mappedDocs = documents.map((document) => {
        if (!document) return null;

        const {
            country,
            documentType,
            id,
            modifiedBy,
            name,
            status,
            title,
            updatedAt
        } = document;

        return ({
            country,
            type: documentType,
            id,
            modifiedBy,
            title: name,
            status,
            subtitle: title,
            lastModified: updatedAt
        });
    });

    return {
        currentSearch,
        documents: mappedDocs
    };
};

export default connect(mapStateToProps)(Browse);

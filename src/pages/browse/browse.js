import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    requestSearchDocuments
} from '../../actions/search';
import SearchBox from '../../components/search-box/search-box';
import Slat from '../../components/slat/slat';
import './browse.scss';

export class Browse extends Component {
    static propTypes = {
        documents: PropTypes.array
    };

    static defaultProps = {
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
            documents
        } = this.props;

        return (
            <div className="page" data-page="browse">
                <div className="layout-content">
                    <div className="layout-main">
                        <div className="browse-search">
                            <SearchBox />
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
        documents: mappedDocs
    };
};

export default connect(mapStateToProps)(Browse);

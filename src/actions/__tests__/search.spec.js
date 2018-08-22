import { expect } from 'chai';
import { spy, stub } from 'sinon';
import * as api from 'src/api';
import {
    REQUEST_SEARCH_DOCUMENTS_SUCCESS
} from 'src/action-types';
import {
    requestSearchDocuments
} from 'src/actions/search';

describe('search action creators', () => {
    describe('when requestDocuments is called', () => {
        const payload = {
            id: 3,
            name: 'Approval Letter',
            title: 'NDA 94623',
            modified_by: 'Steven Aguilar',
            status: 'final',
            country: 'Germany',
            stared: false,
            created_at: '2018-08-19T23:19:19.137Z',
            updated_at: '2018-08-19T23:19:19.137Z',
            document_type: 'pdf'
        };
        const dispatch = spy();

        beforeAll(() => {
            stub(api, 'get').returns(Promise.resolve({ body: payload }));
            return requestSearchDocuments('App')(dispatch);
        });

        afterAll(() => {
            api.get.restore();
        });

        test('makes a GET with correct URL', () => {
            expect(api.get).to.have.been.called.calledWith(
                'documents?search=App&api_key=123'
            );
        });

        test(
            'dispatches proper action when received response with success status',
            () => {
                expect(dispatch).to.have.been.called.calledWith({
                    type: REQUEST_SEARCH_DOCUMENTS_SUCCESS,
                    payload: {
                        isrcs: ['BN0123456789', 'BN9092039402'],
                        payload
                    }
                });
            }
        );
    });
});

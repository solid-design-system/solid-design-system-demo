import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch';
import '@solid-design-system/components/unversioned';

import './autocomplete-theme.css';

const searchClient = algoliasearch(
    'latency',
    '6be0576ff61c053d5f9a3225e2a90f76'
);

autocomplete({
    container: '#autocomplete',
    placeholder: 'Search for products',
    insights: true,
    getSources({ query }) {
        return [
            {
                sourceId: 'products',
                getItems() {
                    return getAlgoliaResults({
                        searchClient,
                        queries: [
                            {
                                indexName: 'instant_search',
                                query,
                                params: {
                                    hitsPerPage: 5,
                                    attributesToSnippet: ['name:5', 'description:10'],
                                    snippetEllipsisText: '…',
                                },
                            },
                        ],
                    });
                },
                templates: {
                    item({ item, components, html }) {
                        return html`<sd-option>${item.name}</sd-option>`;
                    },
                },
            },
        ];
    },
});
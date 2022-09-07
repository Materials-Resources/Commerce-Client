import {NextPage} from "next";
import "../styles/Search.module.css"
import React, {Fragment} from "react"
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

import {
    ErrorBoundary,
    Facet,
    SearchProvider,
    SearchBox,
    Results,
    PagingInfo,
    ResultsPerPage,
    Paging,
    Sorting,
    WithSearch
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
    buildAutocompleteQueryConfig,
    buildFacetConfigFromConfig,
    buildSearchOptionsFromConfig,
    buildSortOptionsFromConfig,
    getConfig,
    getFacetFields
} from "../public/config/config-helper";
import Link from "next/link";
import {SearchResult} from "@elastic/search-ui";

const {hostIdentifier, searchKey, endpointBase, engineName} = getConfig();
const connector = new AppSearchAPIConnector({
    searchKey,
    engineName,
    hostIdentifier,
    endpointBase
});
const config = {
    searchQuery: {
        facets: buildFacetConfigFromConfig(),
        ...buildSearchOptionsFromConfig()
    },
    autocompleteQuery: buildAutocompleteQueryConfig(),
    apiConnector: connector,
    alwaysSearchOnInitialLoad: true
};
const searchResultView = ({result}: {result: SearchResult}) => (

        <div className={'max-w-sm rounded overflow-hidden shadow-lg'}>
            <Link href={
                {pathname: '/product', query:
                        {id: result.inv_mast_uid.raw}
                }} className="group text-sm">
                <a>
                    <div className="w-full py-20 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                    </div>
                    <h3 className="mt-4 font-medium text-gray-900">{result.item_id.snippet}</h3>
                    <p className="mt-2 font-medium text-gray-900">{result.item_desc.raw}</p>
                </a>
            </Link>
        </div>
)

const searchForm = () => (
    <></>
)

const resultGrid = ({children}: {children: any}) => (
    <div className={'grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'}>{children}</div>
)

const search: NextPage =() => {
    return(
        <div className={'bg-slate-200 text-black'}>
            <SearchProvider config={config}>
                <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
                    {({ wasSearched }) => {
                        return (
                            <div className="App">
                                <ErrorBoundary>
                                    <Layout
                                        header={
                                        <SearchBox className={'w-1/2 m-auto'}
                                            autocompleteSuggestions={true}
                                            autocompleteMinimumCharacters={3}
                                            inputView={({
                                                getAutocomplete,
                                                getButtonProps,
                                                getInputProps
                                            }) => (
                                                <div className="relative">
                                                    <input {...getInputProps({placeholder: "What can we help you find?"})} type="search" id="default-search"
                                                                   className="p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                                   />
                                                            {/*<button {...getButtonProps}*/}
                                                            {/*            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800*/}
                                                            {/*             focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2*/}
                                                            {/*              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"*/}
                                                            {/*    />*/}
                                                </div>


                                            )}
                                        />}
                                        sideContent={
                                            <div>
                                                {wasSearched && (
                                                    <Sorting
                                                        label={"Sort by"}
                                                        sortOptions={buildSortOptionsFromConfig()}
                                                    />
                                                )}
                                                {getFacetFields().map((field: any) => (
                                                    <Facet key={field} field={field} label={field} />
                                                ))}
                                            </div>
                                        }
                                        bodyContent={
                                            <Results
                                                titleField={getConfig().titleField}
                                                urlField={getConfig().urlField}
                                                resultView={searchResultView}
                                                // view={resultGrid}
                                                thumbnailField={getConfig().thumbnailField}
                                                shouldTrackClickThrough={true}
                                            />

                                        }
                                        bodyHeader={
                                            <React.Fragment>
                                                {wasSearched && <PagingInfo />}
                                                {wasSearched && <ResultsPerPage />}
                                            </React.Fragment>
                                        }
                                        bodyFooter={<Paging />}
                                    />
                                </ErrorBoundary>
                            </div>
                        );
                    }}
                </WithSearch>
            </SearchProvider>
        </div>
        )


}
export default search
import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import { createStore, applyMiddleware } from 'redux';
import { QueryClientProvider, QueryClient } from 'react-query';

import rootReducer from './redux/reducers';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk';



import { Provider } from "react-redux";


describe("testing App", () => {

    test("should match snapshot", () => {
        const queryClient = new QueryClient();
        const store = createStore(rootReducer);
        const wrapper = shallow(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </QueryClientProvider>
            </BrowserRouter>
        );
        expect(wrapper.html()).toMatchSnapshot();
    })

    test("loader", () => {
        const store = createStore(rootReducer, { auth: { loading: true } });
        const { asFragment } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        expect(asFragment(
            <Provider store={store}>
                <App />
            </Provider>))
            .toMatchSnapshot();


    })
    test("user is true", () => {
        const queryClient = new QueryClient();

        const store = createStore(rootReducer, { auth: { user: true } }, composeWithDevTools(applyMiddleware(thunk)));
        const { getByText } = render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </QueryClientProvider>
            </BrowserRouter>
        );
        const routes = getByText(/create new task/i);
        expect(routes).toBeInTheDocument();
    })
})

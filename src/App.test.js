import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import { Routes } from "react-router-dom";
import useAuth from './data/hooks/useAuth.js';
import { QueryClientProvider, QueryClient } from 'react-query';

describe("testing App", () => {

    test("should match snapshot", () => {
        const queryClient = new QueryClient();
        const wrapper = shallow(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        );
        expect(wrapper.html()).toMatchSnapshot();
    })
})

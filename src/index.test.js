import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { composeWithDevTools } from '@redux-devtools/extension'


jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("test ReactDOM.render, called with App", () => {
    it("render", () => {
        const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

        const container = document.createElement("div");
        container.id = "root";
        document.body.appendChild(container);
        require("./index.js");
        expect(ReactDOM.render).toHaveBeenCalledWith(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>, container);
    });
});

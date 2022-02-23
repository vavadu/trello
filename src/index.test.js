import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from "react-router-dom";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("test ReactDOM.render, called with App", () => {
    it("render", () => {
        const queryClient = new QueryClient()

        const container = document.createElement("div");
        container.id = "root";
        document.body.appendChild(container);
        require("./index.js");
        expect(ReactDOM.render).toHaveBeenCalledWith(
            <React.StrictMode>
                <BrowserRouter>
                    <QueryClientProvider client={queryClient}>
                        <App />
                    </QueryClientProvider>
                </BrowserRouter>
            </React.StrictMode>, container);
    });
});

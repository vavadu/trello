import axios from "axios";

import { getUserData } from "./storage";



export class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;


        this.client = axios.create({
            baseURL: baseUrl,
            timeout: 10000,
        });

        this.authClient = axios.create({
            baseURL: baseUrl,
            timeout: 10000,
        });


        this.client.interceptors.request.use((config) => {
            const userData = getUserData();

            if (userData) {
                config.headers.Authorization = `Bearer ${userData.jwt}`;
            } else {
                delete config.headers.Authorization;
            }

            return config;
        })


        this.createCard = this.createCard.bind(this);
        this.updateCard = this.updateCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.getCard = this.getCard.bind(this);
        this.getCards = this.getCards.bind(this);
        this.getStatuses = this.getStatuses.bind(this);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    createCard({ title, status, description }) {
        return this.client.post('/cards',
            {
                title: title,
                status: status,
                description: description
            },
        );
    }

    updateCard({ cardId, title, status, description }) {
        return this.client.put(`/cards/${cardId}`,
            {
                title: title,
                status: status,
                description: description
            },
        )
    }

    deleteCard({ cardId }) {
        return this.client.delete(`/cards/${cardId}`);
    }

    getCard({ cardId }) {
        return this.client.get(`/cards/${cardId}`);
    }

    getCards() {
        return this.client.get(`/cards`);
    }

    getStatuses() {
        return this.client.get(`/statuses`);
    }

    register({ login, email, password }) {
        return this.authClient.post('/auth/local/register',
            {
                username: login,
                email: email,
                password: password,
            },
        ).catch((registerError) => {
            return Promise.reject(registerError.response.data.data[0].messages[0].message);
        })
    }

    login({ login, password }) {
        return this.authClient.post('/auth/local',
            {
                identifier: login,
                password: password,
            },
        ).catch((error) => {
            return Promise.reject(error.response.data.data[0].messages[0].message);
        });
    }
}

export const api = new Api('https://radiant-temple-07706.herokuapp.com/');

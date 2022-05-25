import { api } from "./api";


describe("testing class api", () => {

    test('build client and authClient', () => {
        expect(api.client).toBeDefined();
        expect(api.authClient).toBeDefined();
    });


    test("check method getCards", () => {
        jest.spyOn(api.client, 'get');


        const cards = [{ 12: { login: 'Bob' } }];
        const resp = { data: cards };
        api.client.get.mockResolvedValue(resp);

        return api.getCards().then(data => expect(data).toEqual(resp));

    });

    test("check method getCard", () => {
        jest.spyOn(api.client, 'get');
        const cards = [{ 12: { login: 'Bob' } }];
        const resp = { data: cards };
        api.client.get.mockResolvedValue(resp);

        return api.getCard(12).then(data => expect(data).toEqual(resp));

    });
    test("check method getStatuses", () => {
        jest.spyOn(api.client, 'get');


        const statuses = [{ status: "to_do" }];
        const resp = { data: statuses };
        api.client.get.mockResolvedValue(resp);

        return api.getStatuses().then(data => expect(data).toEqual(resp));

    });

    test("check method createCard", () => {
        jest.spyOn(api.client, 'post');
        const card = [{ title: "todo", status: "todo", description: "1" }];
        const resp = { data: card };
        api.client.post.mockResolvedValue(resp);

        return api.createCard("todo", "todo", "1").then(data => expect(data).toEqual(resp));

    });
    test("check method updateCard", () => {
        jest.spyOn(api.client, 'put');
        const card = [{ title: "todo", status: "todo", description: "2" }];
        const resp = { data: card };
        api.client.put.mockResolvedValue(resp);

        return api.updateCard("todo", "todo", "2").then(data => expect(data).toEqual(resp));

    });
    test("check method deleteCard", () => {
        jest.spyOn(api.client, 'delete');
        const card = [{ 12: { title: "todo", status: "todo", description: "2" } }];
        const resp = { data: card };
        api.client.delete.mockResolvedValue(resp);

        return api.deleteCard(12).then(data => expect(data).toEqual(resp));

    });
    test("check login", () => {
        jest.spyOn(api.authClient, 'post');
        const user = [{ login: "user", password: "password" }];
        const resp = { data: user };
        api.authClient.post.mockResolvedValue(resp);

        return api.login("user", "password").then(data => expect(data).toEqual(resp));

    });
    test("check register", () => {
        jest.spyOn(api.authClient, 'post');
        const user = [{ login: "user", password: "password", email: "email" }];
        const resp = { data: user };
        api.authClient.post.mockResolvedValue(resp);

        return api.register("user", "password", "email").then(data => expect(data).toEqual(resp));

    });
})

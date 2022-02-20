import createCard from "../createCard";

describe("test fetch", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    test("server response ok", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({}),
                ok: true,
            })
        );
        const token = "123"
        const newCard = createCard(token, "title", "status", "description");
        expect(fetch).toHaveBeenCalledTimes(1);
    })
})
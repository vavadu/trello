import { getUserData, setUserData, removeUserData } from "./storage";

describe("testing storage file", () => {

    test("can we set userData from localStorage", () => {
        const result = { auth: "userData" };
        setUserData(result);
        const data = getUserData();
        expect(data).toEqual(result);
    })

    test("testing remove data", () => {
        const result = { auth: "userData" };
        const value = removeUserData(result)

        expect(value).toBeFalsy()

    })

})



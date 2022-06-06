import { createStore, combineReducers, } from 'redux';
import reducers from '.';



describe("create store", () => {
    const $$observable = (() =>
        (typeof Symbol === 'function' && Symbol.observable) || '@@observable')();

    it("create store", () => {
        const store = createStore(combineReducers(reducers))
        const methods = Object.keys(store).filter(key => key !== $$observable)

        expect(methods.length).toBe(4)
        expect(methods).toContain('subscribe')
        expect(methods).toContain('dispatch')
        expect(methods).toContain('getState')
        expect(methods).toContain('replaceReducer')
    })
})
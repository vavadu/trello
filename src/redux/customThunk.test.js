import { customThunk } from "./customThunk";


describe('thunk middleware', () => {
    const doDispatch = () => { }
    const doGetState = () => 42
    const nextHandler = customThunk({
        dispatch: doDispatch,
        getState: doGetState
    })

    it("must return a function to handle next", () => {
        expect(nextHandler).toBeInstanceOf(Function)
        expect(nextHandler.length).toBe(1)
    })

    it('must return a function to handle action', () => {
        const actionHandler = nextHandler()
        expect(actionHandler).toBeInstanceOf(Function)
        expect(actionHandler.length).toBe(1)
    })

    it('must run the given action function with dispatch and getState', done => {
        const actionHandler = nextHandler()

        actionHandler((dispatch, getState) => {
            expect(dispatch).toBe(doDispatch)
            expect(getState).toBe(doGetState)
            done()
        })
    })

    it('must pass action to next if not a function', done => {
        const actionObj = {}
        const actionHandler = nextHandler(action => {
            expect(action).toBe(actionObj)
            done()
        })

        actionHandler(actionObj)
    })


})

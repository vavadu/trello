import useAuth from "./data/hooks/useAuth";


function App() {
    return (
        <div className="">
            <form>
                <label>
                    <input placeholder="Login"></input>
                </label>
                <input placeholder="Password"></input>
                <button to="/main">Login</button>
            </form>
        </div>
    )
}

export default App;
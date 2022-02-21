import useAuth from "../../data/hooks/useAuth"

export function Register() {
    return (
        <form>
            <label>
                <input placeholder="Login"></input>
            </label>
            <label>
                <input placeholder="Email"></input>
            </label>
            <label>
                <input placeholder="Password"></input>
            </label>

            <button to="/main">Login</button>
        </form>
    )
}


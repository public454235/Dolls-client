import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const provider = new GoogleAuthProvider()


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from)
            })
            .catch(error => { console.log(error) })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className="h-[380px] w-[480px]" src="https://i.ibb.co/hgCb4QT/6310507.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <p>New to dolls account <Link className="text-orange-600" to='/signUp'>Sign Up</Link></p>

                                <div className="divider">OR</div>
                                <div className="text-center">
                                    <input onClick={handleGoogleLogin} className="btn btn-error" type="submit" value="google" />

                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
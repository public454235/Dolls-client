import { useContext } from "react";
import { Link } from "react-router-dom"
import logo from '../../assets/Logo.svg'
import { AuthContext } from "../Providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    const navItem = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/myToy'>My Toys</Link></li>
        {
            user?.email ? <li><Link to='/addAToy'>Add Toy</Link></li> :
                <li><Link to='/addAToy'>Add Toy</Link></li>
        }
        <li><Link to='/blogs'>Blogs</Link></li>

    </>

    return (
        <div className="h-16 mb-4">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-blue-950 font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className="w-20" src={logo} alt="" /></a>
                </div>
                <div className="text-blue-950 font-semibold navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="text-blue-950 navbar-end space-x-3 font-bold text-2xl">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            {user ?
                                <img title={user?.displayName} src={user?.photoURL} />
                                : <FaUserCircle className="mt-2"></FaUserCircle>
                            }
                        </div>
                    </div>
                    {user?.email ?
                        <>
                            <button onClick={handleLogOut} className="btn btn-primary"><Link to='/login'>Log Out</Link></button>
                        </>
                        : <button className="btn btn-primary"><Link to='/login'>Login</Link></button>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;
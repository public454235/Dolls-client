import { Link } from "react-router-dom"
import logo from '../../assets/Logo.svg'

const NavBar = () => {
    const navItem = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addAToy'>Add A Toy</Link></li>
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
                    <Link to='/login'><div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div></Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
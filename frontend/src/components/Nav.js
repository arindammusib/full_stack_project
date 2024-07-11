import { Link } from "react-router-dom";
const Nav=()=>{
    return(
        <div className="text-center bg-blue-300 p-2 mt-2">
            <ul className="flex font-bold" >
               <Link to={'/'}> <li className="m-2 p-2  ">Products</li></Link>
               <Link to={'/add'}> <li className="m-2 p-2  ">Add Products</li></Link>
               <Link to={'/update'}> <li className="m-2 p-2  ">Update Products</li></Link>
               <Link to={'/log out'}> <li className="m-2 p-2  ">Log Out</li></Link>
               <Link to={'/user'}> <li className="m-2 p-2  ">Profile</li></Link>
               <Link to={'/register'}> <li className="m-2 p-2  ">Register here</li></Link>
            </ul>
        </div>
    )
}
export default Nav;
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar bg-[--main-darkblue-color] px-[4rem]">
        <div className="navbar-start">
          <Link className="text-[30px] text-white" to={'/'}>Task Management</Link>
        </div>
        <div className="navbar-end">
          <Link className="btn bg-[--main-yellow-color] text-[15px] border-none w-[150px] h-[50px] hover:bg-[--main-yellow-hover-color] font-bold " to={'/signup'}>sign up</Link>
        </div>
      </div>
    )
}
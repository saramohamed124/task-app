import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar bg-[--main-darkblue-color] p-3 flex justify-between items-center">
        <div>
          <Link className="text-xl md:text-2xl text-white" to={'/'}>Task Management</Link>
        </div>
        <div>
          <Link className="btn bg-[--main-yellow-color] text-[15px] border-none w-[150px] h-[50px] hover:bg-[--main-yellow-hover-color] font-bold " to={'/signup'}>sign up</Link>
        </div>
      </div>
    )
}
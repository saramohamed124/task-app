import React from "react";

const Logout = () => {
    const handleLogout = () =>{
            window.localStorage.removeItem("User")
        window.location.pathname = '/signup'
    }
    return (
        <div>
                <button onClick={handleLogout} className="btn bg-[--main-yellow-color] text-[15px] border-none w-[150px] h-[50px] hover:bg-[--main-yellow-hover-color] font-bold " type="submit">Log out</button>
        </div>
    );
};

export default Logout;
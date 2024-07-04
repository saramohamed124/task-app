import React, { useState } from 'react';

function FormSignup() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordRepeat,setPasswordRepeat] = useState("")
    const [accept,setAccept] = useState(false);
    // const [emailError,setEmailError]= useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        setAccept(true)
        const data = {name:name,email:email,password:password,passwordRepeat:passwordRepeat}
        if(!(name === '' || password.length < 8 || passwordRepeat !== password)){
            window.localStorage.setItem("User",JSON.stringify(data))
            window.location.pathname = '/'
        }
    }
    return (
        <div className='bg-[--main-darkblue-color] p-5 m-0 flex-1 flex-col'>
            <h2 className='text-[40px] text-center text-white my-4 font-sans'>Sign up</h2>
            <form onSubmit={handleSubmit} className='flex flex-col justify-between items-center gap-[20px]'>
            <label className="form-control w-4/5">
                    <div className="label">
                        <span className="label-text text-white text-[20px] font-sans">Name</span>
                    </div>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full font-sans" value={name} onChange={(e)=> setName(e.target.value)} />
                    {accept && name === '' && (<p className='text-red-500'>UserName is Required</p>)}
                </label>
                <label className="form-control w-4/5">
                    <div className="label">
                        <span className="label-text text-white text-[20px] font-sans">Email</span>
                    </div>
                    <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full font-sans"  value={email} onChange={(e)=> setEmail(e.target.value)} required />
                </label>
                <label className="form-control w-4/5">
                    <div className="label">
                        <span className="label-text text-white text-[20px] font-sans">Password</span>
                    </div>
                    <input type="password" placeholder="Enter Your Password" className="input input-bordered w-full font-sans"  value={password} onChange={(e)=> setPassword(e.target.value)} />
                    {accept && password.length < 8 && (<p className='text-red-500'>Password must be more than 8 character</p>)}
                </label>
                <label className="form-control w-4/5">
                    <div className="label">
                        <span className="label-text text-white text-[20px] font-sans">Confirm Password</span>
                    </div>
                    <input type="password" placeholder="Enter Your Password Again" className="input input-bordered w-full font-sans"  value={passwordRepeat} onChange={(e)=> setPasswordRepeat(e.target.value)} />
                    {accept && password !== passwordRepeat&& (<p className='text-red-500'>Password mustn't match</p>)}
                </label>
                <button className='btn bg-[--main-yellow-color] text-[16px] border-none font-sans py-1 px-8 my-5' type='submit'>Sign up</button>
            </form>
        </div>
    );
};

export default FormSignup;
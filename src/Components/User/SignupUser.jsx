export const SignupUser = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");

    
    }

    return (
        <>
            <div className="flex justify-between items-center container mx-auto ">
              <h1 className="mx-auto m-8 text-2xl text-zinc-950">Signup as User</h1>

            </div>
               <div className="justify-center mx-auto" >
                <form className="flex flex-col  w-1/2 mx-auto">
                    <input type="text" placeholder="Name" className=" mx-auto size-min border-2 border-zinc-950 p-2 m-2" />
                    <input type="email" placeholder="Email" className=" mx-auto border-2 border-zinc-950 p-2 m-2" />
                    <input type="password" placeholder="Password" className=" mx-auto border-2 border-zinc-950 p-2 m-2" />
                    <input type="password"  placeholder="Confirm Password" className=" mx-auto border-2 border-zinc-950 p-2 m-2" />
                    <input type="text" placeholder="Phone Number" className=" mx-auto border-2 border-zinc-950 p-2 m-2" />
                    <textarea placeholder="Address" className=" mx-auto border-2 border-zinc-950 p-2 m-2" />
                    <button type="submit" onClick={handleSubmit} className=" mx-auto bg-zinc-950 text-white p-2 m-2">Signup</button>
                </form>
               </div>
        </>
       
    );
}
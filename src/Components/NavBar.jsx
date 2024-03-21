import { NavLink} from "react-router-dom";

export function NavBar() {
    return (
        <ul className="bg-gray-800">
        <div className="container mx-auto flex items-center justify-between p-4">
            <h1 className="text-2xl text-cyan-500">Car Sale</h1>
           
           <div className="flex">
            <li className="mx-6">
                <NavLink  to={"/"} className=" text-white">Home</NavLink>
            </li>
            <li className="mx-6">
            <NavLink to={"/about"} className=" text-white">About</NavLink>
            </li>
            <li className="mx-6">
            <NavLink to={"/contact"} className=" text-white">Contact</NavLink>
            </li>
           </div>
        </div>
       </ul>
       
    )
}
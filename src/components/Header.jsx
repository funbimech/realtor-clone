import {useLocation,useNavigate} from "react-router-dom"
export default function Header() {
     const location = useLocation();
     const navigate = useNavigate();
function pathMatchRoute(route) {
    return route === location.pathname;
}
  return (
    <div className= "sticky top-0 z-50">
        <header className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
            <div><img src="https://assets.nigeriapropertycentre.com/944254bc-bc68-4868-b16c-807d034e7681/images/logo/svg/pc-lockup-nigeria.svg" className="h-5 cursor-pointer" alt= "logo"  onClick={()=>navigate("/")}/></div>
            <div>
                <ul className="flex space-x-10">
                    <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/offers") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/signin") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`} onClick={()=>navigate("/signin")} >Signin</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
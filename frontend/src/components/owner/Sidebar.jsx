import { NavLink, useNavigate,} from "react-router-dom";
import { useEffect, useState } from "react";
import { navItems } from "../../data/index";

function Sidebar() {

  const navigate = useNavigate();
  const [owner,setOwner] = useState(true);

  useEffect(()=>{
    if(!owner){
      navigate("/");
    }
  },[owner]);


  return (
    <div className="p-4">

      <div className="bg-primary md:w-64 md:h-screen rounded-md p-5 flex md:flex-col gap-4 text-lg">

        {/* logo */}
        <h1 className="text-2xl font-bold mb-3">RENTROO</h1>

        {/* nav items */}

        {navItems.map((item)=>(
        
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/owner"}
            className={({isActive}) =>
              `flex items-center gap-2 p-2 rounded font-bold
              ${isActive ? "bg-sky-500 text-white" : "hover:bg-sky-500"}`
            }
          >
            <item.icon/>
            {item.label}
          </NavLink>
          
        ))}

        {/* user */}
        <div className="md:absolute md:bottom-5 text-sm">
          Zain Ali
        </div>
      </div>
      
    </div>
  );
}

export default Sidebar;
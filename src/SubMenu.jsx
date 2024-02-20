
import {Link} from "react-router-dom";
import SubSubMenu from "./SubSubmenu.jsx";
export default  function SubMenu({parent,sub}){
    return(
        <ul>
            {sub.map(item=>{
                return(
                    <li>
                        <Link to={`${parent}/${item.title}`}>{item.title}</Link>
                        {item.sub && <SubSubMenu grandparent={parent} parent={item.title} sub={item.sub}/>}
                    </li>
                )
            })}
        </ul>
    )

}


import {Link} from "react-router-dom";

export default  function SubSubMenu({grandparent,parent,sub}){
    return(
        <ul>
            {sub.map(item=>{
                return(
                    <li>
                        <Link to={`${grandparent}/${parent}/${item.title}`}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    )

}

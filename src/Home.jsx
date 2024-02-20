
import {Outlet,Link} from "react-router-dom";
import SubMenu from "./SubMenu.jsx";

export default function Home() {

    const data = [{
        id: 1,
        title: "unereal",
        sub: [{
            id: 1,
            title: "N2",
            sub: [{
                id: 1,
                title: "N3"
            }]
        },{
            id: 2,
            title: "Blog2"
        }]
    },{
        id: 2,
        title: "Langague"

    }]



    return(
        <div>
        <h1>nav</h1>
        <ul>
            {data.map(item=>{
            return(
                <>
                    <Link to={item.title}><li>{item.title}</li></Link>
                    {item.sub && <SubMenu parent={item.title} sub={item.sub}/>}
                </>


            )

            })}
        </ul>
        <Outlet/>
    </div>)
}

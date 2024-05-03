import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {postAdToDb} from "../Postads/firebase"


function Postads (){
    const navigate = useNavigate();
    const [title,setTitle]=useState()
    const [price,setPrice]=useState()
    const [description,setDescription]=useState()
    const [image,setImage]=useState()

    const Postads = async() => {
        console.log('image',image)
        await postAdToDb ({title,description,price,image})
navigate('/')
    }



return (
    <div>
        <h2>Post Ad</h2>
<input placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
<input placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
<input placeholder="price" onChange={(e) => setPrice(e.target.value)}/>
<input placeholder="file" onChange={(e)=> setImage(e.target.value[0])}/>
<br/>
<button onClick={Postads}>Post Ad</button>


</div>
)

}
export default Postads;







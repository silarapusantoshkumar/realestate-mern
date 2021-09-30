import React, { useEffect, useState}  from "react"
import { toast} from "react-toastify"
const Createposts = (props)=>{
    const [title,setTitle]= useState("");
    const [body,setBody]= useState("");
    const [image,setImage]=useState("");
    const [url,setUrl] = useState("")
    useEffect(()=>{
        if(url){
            fetch("http://localhost:5000/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem('jwt')
                },
                body:JSON.stringify({
                    title:title,
                    body:body,
                    pic:url
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    toast.error(data.error)
                    // M.toast({html: data.error, classes:"#c62828 red darken-3"})
                }else{
                    // M.toast({html:"Created post", classes:"#2e7d32 green darken-3"})
                    toast.success("Created Post")
                    props.history.push('/allposts')
                }
            }).catch((err)=>{console.log(err)})
        }
    },[url])
    const PostData = ()=>{
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset","Test_post");
        data.append("cloud_name","dipak1243");
        fetch("https://api.cloudinary.com/v1_1/dipak1243/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        }).catch((err)=>{console.log(err)})
    }
    return(
        <div className="card" style={{width: "50rem"}}>
            <div className="card-body">
            
                <div className="text-center text-white">
                <div className="form-group">
                    <input type="text" className="form-control"  value={title} placeholder="title" onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" value={body} placeholder="body" onChange={(e)=>setBody(e.target.value)}/>
                </div>
                    <div className="file-field input-field ">
                    <div className="btn">
                        <span>Upload Image</span>
                        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                    </div>
                
                {/* <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary btn-large" onClick={()=>PostData()}>SUBMIT POST</button>
              
               
            </div>
            </div>
        </div>
    )
}

export default Createposts
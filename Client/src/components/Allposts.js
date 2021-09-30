import React, { useEffect, useState } from "react"
import {useSelector} from 'react-redux'

const Home = (props)=> {
  
    const [result,setResult]=useState([])
    const data = useSelector(state=>state)
 
  
    useEffect(()=>{
      
        fetch("http://localhost:5000/allposts",{
            method:"get",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            }
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                props.history.push('/signin')
                
            }else{
                // setResult(data.myposts)
               
                setResult(data)
                // console.log(data)
            }
        })
    },[])

    const deletePost=(id)=>{
      fetch(`http://localhost:5000/delete/${id}`,{
        method:"delete",
        headers:{
          "Authorization":"Bearer "+localStorage.getItem('jwt')
      }
      }).then(res=>res.json())
      .then(data=>{
          const newData = result.filter(item=>{
            return item._id !== data._id
          })
          setResult(newData)
      })
    }

    return(<>
       { result?.map((res)=>{
            return(
                <div className="row" >
             
                <div className="col s12 m6 l6">
                  <div className="card " style={{width: "40rem",background:"white"}}>
                    <div className="card-image">
                     {/* <p style={{fontSize:"30px"}}>{res.postedBy.name} {res.postedBy._id === data._id && <i onClick={()=>deletePost(res._id)} className="material-icons"  style={{float:"right",padding:"17px"}}>delete</i> }</p> */}
                      
                      <img src={res.photo} style={{height: "40rem"}} />
                    </div>
                    <div className="card-content ">
                    <span className="card-title">{res.title}</span>
                      <p>{res.body}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            )
        })} 
                
        </>)
}

export default Home
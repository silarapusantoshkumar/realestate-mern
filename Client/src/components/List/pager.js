import React from 'react'

const Pager = ({MaxPostPerAction, TotalPosts, ChangeButtonNumbers})=>{
    let numbers=[];
    let NumberofButtons = TotalPosts/MaxPostPerAction;
    for(let i=1;i<Math.ceil(NumberofButtons);i++){
        numbers.push(i)
    }

    return(<>
    <nav className="mt-5 mx-auto">
        <ul className="pagination">
                {
                    numbers?.map((place,i)=>
                        <li className="page-item" key={i}>
                            <a onClick={()=>ChangeButtonNumbers(place)} className="page-link" >{place}</a>
                        </li>
                    )
                }
          
        </ul>
    </nav>
 

    
    </>)
}
export default Pager
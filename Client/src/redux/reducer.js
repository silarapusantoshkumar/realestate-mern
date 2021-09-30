import { useEffect } from "react";

const Initialstate = {
    data:null
    
}

 
const changeReducer = (state=Initialstate, action)=>{   
    switch(action.type){
        case "USER": return {
            ...state,
            data:action.payload
        }
        case "CLEAR":return{
                // ...state,
              data:null
            }
        default: return state;
        }

}
export default changeReducer
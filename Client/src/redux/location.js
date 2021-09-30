const Initialstate = null
 const location = (state=Initialstate, action)=>{
    switch(action.type){
        case "location":  
        
         return action.payload
        default: return state;
        }
}
export default location
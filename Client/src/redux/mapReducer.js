const Initialstate = {
    result:null
    
}
 const mapReducer = (state=Initialstate, action)=>{
    switch(action.type){
        case "MAP": return {
            ...state,
            result:action.payload
        }
        default: return state;
        }
}
export default mapReducer
const Initialstate = { }
 const coordsReducer = (state=Initialstate, action)=>{
    switch(action.type){
        case "coords": return action.payload
        default: return state;
        }
}
export default coordsReducer
let initalData="burgername";

const ChangeCardState=(state=initalData,action)=>{
    switch(action.type){
        case "SET_DATA":
            state=action.payload;
            return state;
        
        default:
            return state;
    }
}
export default ChangeCardState;
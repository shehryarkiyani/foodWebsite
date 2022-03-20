let model=false;

const ChangeModelState=(state=model,action)=>{
    switch(action.type){
        case "OPEN":
            state=true;
            return state;
        case "CLOSE":
            state=false;
            return state;
        default:
            return state;
    }
}
export default ChangeModelState;
let cart=false;

const ChangeCartState=(state=cart,action)=>{
    switch(action.type){
        case "OPEN_CART":
            state=true;
            return state;
        default:
            return state;
    }
}
export default ChangeCartState;
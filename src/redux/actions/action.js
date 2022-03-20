export const OpenModel=()=>{
    return{
        type:"OPEN"
        
    }
}
export const CloseModel=()=>{
    return{
        type:"CLOSE"
        
    }
}
export const CardData=(data)=>{
    return{
        type:"SET_DATA",
        payload:data
    }
}

export const SetOpenCart=()=>{
    return{
        type:"OPEN_CART",
        
    }
}
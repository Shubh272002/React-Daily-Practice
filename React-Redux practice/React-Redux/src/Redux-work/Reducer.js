const current ={counter:10}

const MyFunction = (state=current,action)=>{
    switch(action.type)
    {
        case "ins":
            return {...state,counter:state.counter+1}
            break;

            case "dec":
                return {...state,counter:state.counter-1}
                break;

                default:
                   
                        return state;
                        break;
    }
}

export default MyFunction
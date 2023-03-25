import { createStore } from "redux";


const store = createStore(function(state,action){
if(action.type == 'changeName'){
    return{
        ...state,
        user:{
            name:action.payload.name
        }
    }
}
if(action.type == 'add'){
    return{
        ...state,
        user1:{
            name1:action.payload.name
        }
    }
}

if(action.type == 'color'){
    return{
        ...state,
        color:{
            color:action.payload.color
        }
    }
}

if(action.type == 'color1'){
    return{
        ...state,
        color1:{
            color1:action.payload.color
        }
    }
}
if(action.type == 'color2'){
    return{
        ...state,
        color2:{
            color2:action.payload.color
        }
    }
}

if(action.type == 'range'){
    return{
        ...state,
        range:{
            range:action.payload.range
        }
    }
}
// if(action.type = 'color2'){
//     return{
//         ...state,
//         color2:{
//             color2:action.payload.color,
//         }
//     }
// }
return state
},
{
    user:{
        name:''
    },
    user1:{
        name:''
    },
    color:{
        color:''
    },
    color1:{
        color:''
    },
    color2:{
        color:''
    },
    range:{
        range:''
    }
}
)

export default store
  const noteActions =(state,action )=>{
    console.log(state,"reducer")
    switch (action.type) {
        case 'NOTES_FETCH':{

            return{...state,allNotes:[action.payload.notes]}
        }
     case 'NOTES_REMOVE':{
         
     }
        default:
           return state
    }

}

export {noteActions}
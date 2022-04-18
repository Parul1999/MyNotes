const noteActions = (state, action) => {

  switch (action.type) {
    case 'NOTES_FETCH': {

      return { ...state, allNotes: action.payload.notes }
    }
    case 'NOTES_TRASH': {

      return { ...state, trashNotes: [...state.trashNotes, action.payload] }
    }
    case 'NOTES_ARCHIVE_FETCH': {
      return { ...state, archiveNotes: [...state.archiveNotes, action.payload] }

    }
    default:
      return state
  }

}

export { noteActions }
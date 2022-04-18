export const addNewNote = (value) => {
    return { type: 'NOTES_ADD', payload: value }
}

export const addTrashNote = (value) => {
    return { type: 'NOTES_TRASH', payload: value }
}
 export const editNote = (value) => {
    return { type: 'NOTES_EDIT', payload: value }
}


export const fetchNoteList = (value) => {
    return { type: 'NOTES_FETCH', payload: value }
}


export const fetchArchiveNoteList = (value) => {
    return { type: 'NOTES_ARCHIVE_FETCH', payload: value }
}
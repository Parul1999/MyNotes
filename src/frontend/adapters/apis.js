export const Server_url = "http://localhost:3000"
export const API = {
    auth: {
        login: '/api/auth/login',
        signup: '/api/auth/signup'
    },
    notes: {
        note_list: '/api/notes',
        new_note: '/api/notes',
        edit: '/api/notes/:notesId',
        delete: '/api/notes/:notesId',
    }
    ,
    archive_notes: {
        new_archive: '/api/notes/archives/:noteId',
        archive_list: '/api/archives',
        restore_note: '/api/archives/restore/:noteId',
        delete: '/api/archives/delete/:noteId',
        
    }
}
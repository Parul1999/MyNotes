export const Server_url = "https://mynotess.vercel.app"
export const API = {
    auth: {
        login: '/api/auth/login',
        signup: '/api/auth/signup'
    },
    notes: {
        note_list: '/api/notes',
        new_note: '/api/notes',
        edit: '/api/notes', //:notesId
        delete: '/api/notes'
    }
    ,
    archive_notes: {
        new_archive: '/api/notes/archives',
        archive_list: '/api/archives',
        restore_note: '/api/archives/restore', //:notesId
        delete: '/api/archives/delete', //:notesId
        
    }
}

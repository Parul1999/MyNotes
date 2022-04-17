import Authentication from "../auth/authentication";
import Archive from "../pages/archivenotes/archive";
import Dashboard from "../pages/dashboard/dashboard";
import Edit from "../pages/editnotes/edit";
import Homepage from "../pages/homepage/homepage";
import Trash from "../pages/trashnotes/trash";

export const route = [
    {
        'component': <Homepage />,
        'path': '/'

    },
    {
        'component': <Dashboard />,
        'path': '/dashboard'

    },
    {
        'component': <Trash />,
        'path': '/trash'

    },
    {
        'component': <Edit />,
        'path': '/edit'

    },
    {
        'component': <Archive />,
        'path': '/archive'

    },
    {
        'component': <Authentication/>,
        'path': '/auth'

    },
]
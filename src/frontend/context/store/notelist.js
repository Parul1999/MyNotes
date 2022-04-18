
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { API, Server_url } from "../../adapters/apis";
import { getApiCall } from "../../adapters/callmethods";
import { fetchArchiveNoteList, fetchNoteList } from "../actionCreators/noteActions";
 import { FilterNotesList } from "../reducers/filters";
import { noteActions } from "../reducers/notes";
import { useAuth } from "./auth";

const NotesListContext = createContext();

const NoteListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteActions,{
    allNotes: [],
    deletedNotes:[],
    archiveNotes:[],
    sort: null,
  });

  const {auth} =useAuth()
  useEffect(() => {
      let url=Server_url+API.notes.note_list
      getApiCall(url , auth)
      .then(json=>dispatch(fetchNoteList(json)))
      


      let url1=Server_url+API.archive_notes.archive_list
      getApiCall(url1 , auth)
      .then(json=>dispatch(fetchArchiveNoteList(json)))
     
  }, []);
  return (
    <NotesListContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesListContext.Provider>
  );
};

const UsenoteList = () => {
  return useContext(NotesListContext);
};

export { NoteListProvider, UsenoteList };
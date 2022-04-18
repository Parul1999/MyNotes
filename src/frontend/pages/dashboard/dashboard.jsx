import React, { useEffect, useState } from "react";
import { API, Server_url } from "../../adapters/apis";
import {
  deleteApiCall,
  getApiCall,
  postApiCall,
} from "../../adapters/callmethods";
import Card from "../../commoncomponents/card/card";
import Searchbar from "../../commoncomponents/searchbar/searchbar";
import {
  addTrashNote,
  fetchArchiveNoteList,
  fetchNoteList,
} from "../../context/actionCreators/noteActions";
import { useAuth } from "../../context/store/auth";
import { UsenoteList } from "../../context/store/notelist";
import CreateNote from "../addnotes/addnotes";
import uuid from "react-uuid";

const Dashboard = () => {
  const { state, dispatch } = UsenoteList();
  const { auth } = useAuth();
  const [listData, setListData] = useState([])
useEffect(() => {
  setListData(state.allNotes)
}, [state])

  const deleteNote = (item) => {
    let url = Server_url + API.notes.delete + "/" + item._id;
    deleteApiCall(url, auth).then((json) => {
      dispatch(fetchNoteList(json));
    });
    dispatch(addTrashNote(item));
  };
  const addNote = (note) => {
    let url = Server_url + API.notes.new_note;
    let body = {
      note,
    };
    postApiCall(url, body, auth).then((json) => {
      dispatch(fetchNoteList(json));
    });
  };

  const archiveNote = (item) => {
    let url = Server_url + API.archive_notes.new_archive + "/" + item._id;
    postApiCall(url, auth).then((json) => {
      dispatch(fetchArchiveNoteList(item));
    });
  };

  const editNote = (id) => {};

  const [tags, setTags] = useState([
    "All",
    "Shopping",
    "Work",
    "Study",
    "Other",
  ]);
  const [note, setNote] = useState({
    _id: uuid(),
    title: "",
    content: "",
    bgcolor: "white",
    tag: "All",
  });

  return (
    <>
      <h1
        className="heading self-center"
        onClick={() => {
          editNote();
        }}
      >
        Dashboard <span onClick={()=>{
  
        setListData(state.allNotes.sort((a, b) => {
          let fa = a.title.toLowerCase(),
              fb = b.title.toLowerCase();
      
          if (fa < fb) {
              return -1;
          }
          if (fa > fb) {
              return 1;
          }
          return 0;
      }))
        }}>Sort</span>
      </h1>
      <CreateNote {...{ addNote, setNote, note, tags }} />
      <div className="flex-row  flex-wrap ">
        {listData && listData.map((item) => {
          return (
            <Card
              data={item}
              delete={() => {
                deleteNote(item);
              }}
              edit={() => {
                editNote();
              }}
              archive={() => {
                archiveNote(item);
              }}
              buttons={true}
            />
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;

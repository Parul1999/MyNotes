import React, { useEffect } from "react";
import { API, Server_url } from "../../adapters/apis";
import { getApiCall, postApiCall } from "../../adapters/callmethods";
import Card from "../../commoncomponents/card/card";
import Searchbar from "../../commoncomponents/searchbar/searchbar";
import { useAuth } from "../../context/store/auth";
import { UsenoteList } from "../../context/store/notelist";

const Dashboard = () => {
  const { state } = UsenoteList();
  const { auth } = useAuth();

  useEffect(() => {
    let url = Server_url + API.notes.new_note;
    let body = {
      note: {
        title: "title",
        note: "irdngdrg",
        date: "i42/245/25",
      },
    };
    postApiCall(url, body, auth).then((json) => {
      console.log(json, "rfe");
    });
    console.log(state);
  }, []);

  return (
    <>
      <h1 className="heading self-center">Dashboard</h1>
      <div className="flex-col  flex-wrap ">
        <Searchbar
          Onchange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Card data={[]} />
      </div>
    </>
  );
};

export default Dashboard;

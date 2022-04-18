import React,{useEffect} from 'react'
import { API, Server_url } from '../../adapters/apis'
import { postApiCall } from '../../adapters/callmethods'
import '../../commonstyles/Globalstyles.css'
import { useAuth } from '../../context/store/auth'
import './style.css'
const Edit = () => {
  const { auth } = useAuth()
  useEffect(() => {
    let url = Server_url + API.notes.new_note
    let body = {
      title: "title",
      note:"irdngdrg",
      date:"i42/245/25",

    }
    postApiCall(url,auth)
    .then(res=>res.json())
    .then(json => console.log(json))
  }, [])

  return (

    <>
      <h1 className='heading self-center'>Edit</h1>
      <div className='flex-col  flex-wrap '>
        hiiiiii
      </div>
    </>
  )
}

export default Edit
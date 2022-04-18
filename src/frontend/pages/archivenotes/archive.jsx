import React from 'react'
import { API, Server_url } from '../../adapters/apis'
import { postApiCall } from '../../adapters/callmethods'
import Card from '../../commoncomponents/card/card'
import '../../commonstyles/Globalstyles.css'
import { fetchArchiveNoteList } from '../../context/actionCreators/noteActions'
import { useAuth } from '../../context/store/auth'
import { UsenoteList } from '../../context/store/notelist'

const Archive = () => {

const {state,dispatch} = UsenoteList()
console.log(state,"archive")

  return (
    <>
    <h1 className='heading self-center'>Archive</h1>
    <div className='flex-col  flex-wrap '>
      
       {state.archiveNotes.map(item=>{
         return(<Card data={item}/>)
       })}
    </div>
    </>
  )
}

export default Archive
import React from 'react'
import Card from '../../commoncomponents/card/card'
import '../../commonstyles/Globalstyles.css'
import { UsenoteList } from '../../context/store/notelist';

const Archive = () => {
  const { state, dispatch } = UsenoteList();
  return (
    <>
    <h1 className='heading self-center'>Archived</h1>
    <div className='flex-col  flex-wrap '>
    {state.archiveNotes.map(item=>{
         return(<Card data={item}/>)
       })}
    </div>
    </>
  )
}

export default Archive
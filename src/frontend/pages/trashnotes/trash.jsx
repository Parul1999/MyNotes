import React from 'react'
import Card from '../../commoncomponents/card/card'
import '../../commonstyles/Globalstyles.css'
import { useAuth } from '../../context/store/auth'
import { UsenoteList } from '../../context/store/notelist'
import './style.css'
const Trash = () => {
  const { state, dispatch } = UsenoteList()
  console.log(state)
  return (
    <>
      <h1 className='heading self-center'>Trash</h1>
      <div className='flex-row flex-wrap content-center '>
        {state.trashNotes.map(item => {
          return (<div ><Card data={item} /></div>)
        })}
      </div>

    </>
  )
}

export default Trash
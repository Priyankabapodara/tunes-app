import {React, useState} from 'react'
import { CombinedSongs } from './CombinedSongs'
import "../Styles/List.css"

function List(props) {

    

    //create a new array by filtering the original array
    const filteredData = CombinedSongs.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return "";
        }
        //return the item which contains the user input
        else {
            return el.songName.toLowerCase().includes(props.input)
        }
    })
  return (
    <div className='list'>
      <ul>
        
            {filteredData.map((item) => (
                <li key={item.id}>{item.songName}</li>
            ))}
            
        </ul>
    </div>
  )
}

export {List}

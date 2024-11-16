import React, { useState } from 'react'
import "../styles/EditorPage.css"
import Client from '../components/Client'
import Editor from '../components/Editor'

const EditorPage = () => {

    const [clients,setClients] = useState([
        {socketId:1, username:"Harman"},
        {socketId:2, username:"Dhanveer"},
        {socketId:1, username:"Naina"},
        {socketId:2, username:"Sachveer"},
        {socketId:1, username:"Akash"},
        {socketId:2, username:"Karan"},
    ])

  return (
    <div id="EditorPageMain">
      <div id="sidebar">
        <div>logo here</div>
        <div className='connectedClientsPage'>
            <h3>Connected</h3>
            <div id="connectedClients">
                {
                    clients.map((client)=>(
                        <Client key={client.socketId} username={client.username}/>
                    ))
                }
            </div>
        </div>
        <div>
            <div>Copy Room ID</div>
            <div>Leave</div>
        </div>
      </div>
      <div id="editorOuter">
        <Editor/>
      </div>
    </div>
  )
}

export default EditorPage

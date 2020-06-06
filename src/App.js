import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Members from './components/Members'

function App() {
  const [members, setMembers] = useState([
    {
      id: "",
      name: "",
      email: "",
      role: "",
    }
  ])
  const addNewMember = memberObjParam => {
    setMembers([...members, { ...memberObjParam, id: Date.now() }])
  }

  return (
    <div className="app">
      <h1>Jason's Totally Awesome List Maker</h1>
      <h2>(now with state)</h2>
      <Form addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;

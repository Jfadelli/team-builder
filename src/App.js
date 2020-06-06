import React, { useState } from 'react';
import './App.css';
import Form from './Form'

function App() {
  const [member, setMember] = useState({ name: "", email: "", role: "" })
  console.log("member list" + member)
  return (
    <div>
      <Form member={member} setMember={setMember} />
    </div>
  );
}

export default App;

import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxNotFound from "./components/MailboxNotFound/MailboxNotFound";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';
import './App.css';


function App() {
  const navigate = useNavigate();

  const [mailboxes, setMailboxes] = useState([
    { _id: 1, owner: 'Alice', size: 'small' },
    { _id: 2, owner: 'Bob', size: 'medium' },
    { _id: 3, owner: 'Charlie', size: 'large' }
  ]);
  const [mailbox, setMailbox] = useState({});

  const addMailbox = (newMailbox) => {
    console.log("Mailbox to add:", newMailbox);
    const largestId = mailboxes.reduce((acc, mailbox) => {
      return mailbox._id > acc ? mailbox._id : acc;
    }, 0);
    newMailbox._id = largestId + 1;
    const newMailboxes = [...mailboxes, newMailbox];
    console.log("New mailboxes array:", newMailboxes);
    setMailboxes(newMailboxes);
    navigate('/mailboxes');
  }
  
  const handleMailboxClick = (id) => {
    const selectedMailbox = mailboxes.find(mailbox => mailbox._id === id);
    if (!selectedMailbox) {
      navigate('/mailboxes/not-found');
      return;
    }
    setMailbox(selectedMailbox);
    navigate(`/mailboxes/${id}`);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<div><h1>Welcome to the Post Office</h1></div>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} handleMailboxClick={handleMailboxClick}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
        <Route path="/mailboxes/not-found" element={<MailboxNotFound />} />
        <Route path="/mailboxes/:id" element={<MailboxDetails mailbox={mailbox} />} />
      </Routes>
    </>
  );
};

export default App;

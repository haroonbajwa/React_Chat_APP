import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <>
    <ChatEngine 
        height = "100vh"
        projectID = "63c6bb77-065b-4a0d-874f-404b7af97bff"
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    
    />
    </>
  );
}

export default App;

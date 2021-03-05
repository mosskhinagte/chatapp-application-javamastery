import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


    const App = () => {
        if(!localStorage.getItem('username')) return <LoginForm/>
    

    return (
        <ChatEngine
            height="100vh"
            projectID="f520c0ad-52ae-4ad7-8d14-2932319afb72"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} />}
        />

    )
}

export default App;
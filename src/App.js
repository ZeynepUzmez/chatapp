import { AppleFilled } from '@ant-design/icons';

import {ChatEngine} from 'react-chat-engine';

import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App= () =>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    
    return (
       <ChatEngine
         height="100vh"
         projectID="a2c3a5dd-1a2c-4ad1-8d3e-70c84a6c1405"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
          />
    );
}

export default App;

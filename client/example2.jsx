const React = require('react');
const ReactDOM = require('react-dom');

const { useState } = React;

const HelloUser = (props) => {
    const [username, setUsername] = useState(props.username);
    
    const handleNameChange = (e) => {
        setUsername(e.target.value);
    };
    
    return (
        <div>
            <p>Hello, {username}</p>
            <label>Change Name: </label>
            <input type="text" value={username} onChange={handleNameChange}/>
        </div>
    );
};

const init = () => {
    ReactDOM.render(
        <HelloUser username='User'/>,
        document.getElementById('app'),
    );
};

window.onload = init;
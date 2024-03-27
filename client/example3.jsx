const React = require('react');
const ReactDOM = require('react-dom');

const { useState } = React;

const SongContainer = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [songsObj, setSongsObj] = useState();

    const loadSongsFromServer = async () => {
        const response = await fetch('/getSongs');
        setSongsObj(await response.json());
        setLoaded(true);
    };

    React.useEffect( () => {
        loadSongsFromServer();
    }, [] );

    if (!loaded) {
        return (
            <div>No Songs Found!</div>
        );
    }

    const songList = songsObj.map(song => {
        return (
            <div key={song.title}>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    });

    return (
        <div>
            <h1>Favorite Songs:</h1>
            {songList}
        </div>
    );
};

const init = () => {
    ReactDOM.render(
        <SongContainer songs={[]}/>,
        document.getElementById('app'),
    );
};

window.onload = init;
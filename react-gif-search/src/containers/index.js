import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from "./components/SearchBar";
import GifModal from './components/GifModal';
import GifList from "./components/GifList";
import request from 'superagent';
import './styles/app.css';

class App extends React.Component {
    constructor() {
    super();

    this.state = {
        gifs: [],
        selectedGif: null,
        modalIsOpen: false
    };
}

openModal(gif) {
    this.setState({
        modalIsOpen: true,
        selectedGif: gif
    });
}

closeModal(gif) {
    this.setState({
        modalIsOpen: false,
        selectedGif: null
    });
}

 handleTermChange(term) {
 const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;
        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    }
    render() {
        return (
            <div>
                <SearchBar onTermChange={term => this.handleTermChange(term)} />
                <GifList gifs={this.state.gifs}
                    onGifSelect={selectedGif => this.openModal(selectedGif)}/>
                <GifModal modalIsOpen={this.state.modalIsOpen}
                    selectedGif={this.state.selectedGif}
                    onRequestClose={ () => this.closeModal() } />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));

import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component  {

    state = { videos: [], SelectedVideo: null };

    /* by default video to show on screen */
    componentDidMount() {
        this.onTermSubmit('higher score');
    }

    //Whenever making API request it is an asynchronous request

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({ 
            videos: response.data.items,
            SelectedVideo: response.data.items[0] //the first video by  default should display.
        });
    };

    onVideoSelect = (video) => {
        this.setState({ SelectedVideo: video })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar CallMe={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.SelectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
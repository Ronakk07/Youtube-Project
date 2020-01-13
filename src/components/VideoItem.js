import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    // const image = video.snippet.thumbnails.medium.url;
    // console.dir(video)
    return (
        // class = "item" is of semantic library for styling images
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img
                alt={video.snippet.thumbnails.default.url} 
                className="ui image" src={video.snippet.thumbnails.medium.url} 
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
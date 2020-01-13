import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVideoSelect}) => {
    // Here videos is an array from App.js
    const renederedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })
    return (
        // class = "ui relaxed divided list" is of semantic library for styling images
        <div className="ui relaxed divided list">
            {renederedList}
        </div>
    );
}

export default VideoList;
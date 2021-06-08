import React from 'react';

const VideoItem = props => (
    <>
    <h1>
        {props.video.snippet.title}
    </h1>
    <h3>
        {props.video.snippet.channelTitle}
    </h3>
    </>
);

export default VideoItem;
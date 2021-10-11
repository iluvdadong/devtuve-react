import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = ({videos, onSelectVideo, display}) => (
    <ul className={styles.videos}>
        {videos.map(video => (
            <VideoItem 
                key={video.etag} 
                video={video} 
                onSelectVideo={onSelectVideo}
                display={display}
            />
        ))}
    </ul>
);

export default VideoList;
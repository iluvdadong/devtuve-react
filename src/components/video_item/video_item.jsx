import React, { memo } from 'react';
import styles from './video_item.module.css'

// CSS Module style
// CSS Module은 CSS 클래스를 불러와서 사용함
// [파일이름].module.css 로 클래스네임을 자동으로 고유값으로 만들어서 컴포넌트 스타일 중첩현상을 방지함

const VideoItem = memo(
    ({ video: { snippet }, onSelectVideo, video, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
    <li className={`${styles.container} ${displayType}`}
         onClick={() => onSelectVideo(video)}
    >
        <div className={styles.video}>
            <img
                className={styles.thumbnail}
                src={snippet.thumbnails.high.url}
                alt="video thumbnail"
            />
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </div>
     </li>  
    );
    }
);

export default VideoItem;
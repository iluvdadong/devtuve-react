import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  }

  const logoClick = () => {
    setSelectedVideo(null);
  }

  // Youtube class의 instance인 youtube 내부 API 함수 호출
  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube
      .search(query)
      .then(videos => setVideos(videos));
    },[youtube]
  );

  //useEffect가 아니라 네트워킹하는 것을 함수로 만듬
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <div className={styles.app}>
        <SearchHeader onSearch={search} onLogoClick={logoClick} />
        <section>
          <h1>ㅠ</h1>
        </section>
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
               <VideoDetail video={selectedVideo} />
              </div>
           )} 
          <div className={styles.list}>
            <VideoList 
                videos={videos}
                onSelectVideo={selectVideo}
                display={selectedVideo ? 'list' : 'grid'} />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import Button from './components/common/Button';

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
  const search = query => {
    setSelectedVideo(null);
      youtube
        .search(query)
        .then(videos => setVideos(videos));
  };

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
        <section className={styles.tag}>
          <Button 
            label="Front-End"
            stylesClass=""
            onClick={()=> {
              search('프론트엔드 개발');
            }}
            disabled={false}
          />
          <Button 
            label="Back-End"
            stylesClass=""
            onClick={()=> {
              search('백엔드 개발');
            }}
            disabled={false}
          />
          <Button 
            label="iOS"
            stylesClass=""
            onClick={()=> {
              search('iOS 개발');
            }}
            disabled={false}
          />
         <Button 
            label="Android"
            stylesClass=""
            onClick={()=> {
              search('안드로이드 개발');
            }}
            disabled={false}
          />
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

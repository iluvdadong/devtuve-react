import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  // Youtube class의 instance인 youtube 내부 API 함수 호출
  const search = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  };

  //useEffect가 아니라 네트워킹하는 것을 함수로 만듬
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));

  }, []);

  return (
    <>
      <div className={styles.app}>
        <SearchHeader onSearch={search} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;

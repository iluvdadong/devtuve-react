import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }; //클래스형으로 만듬..

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <div className={styles.app}>
        <SearchHeader />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;

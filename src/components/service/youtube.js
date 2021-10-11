class Youtube {
    // index.js에서 선언한 baseURL, key가 담긴 params를 가진 httpClient
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: '30',
                type: 'video',
                q: 'IT트렌드',
            }
        });
        return response.data.items;
    }

    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: '30',
                q: query,
            }
        });
        return response.data.items.map(item => ({
            ...item,
            id: item.id.videoId
        }))
    }

    // async mostPopular() {
    //     const response = await fetch(
    //         `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //         this.getRequestOptions
    //     );
    //     const result = await response.json();
    //     return result.items;
    // }
}

export default Youtube;
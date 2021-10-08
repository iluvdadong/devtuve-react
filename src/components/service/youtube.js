class youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    }

    mostPopular() {
        console.log(`####### this.getRequestOptions ${JSON.stringify(this.getRequestOptions)}`);
        
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();


    }

}
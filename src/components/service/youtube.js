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
        
        const response = await fetch


    }

}
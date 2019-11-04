import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 
            "Bearer 7gzG0oOIJB1ot4KWOrzSTvoIz37yZf6DUlZZByOaZRKX6PRtGLheNoOVH-MrWRDtxaKCmqTu3Yvww3nUESjwxhDAzrCfX9YGBvAKOrdNLoZScNvkVyVu1Rsz7xO9XXYx"
    }
});


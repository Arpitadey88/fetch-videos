import React from 'react';

const FetchVideos = () => {
    const YOUTUBE_PLAYLISTS_ITEM_API ='https://www.googleapis.com/youtube/v3/playlistItems';
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
        console.log('object', apiKey);
        async function fetchYoutubeData() {
            try {
                const res = await fetch(
                    `${YOUTUBE_PLAYLISTS_ITEM_API}?part=snippet&playlistId=UULF9J48NTCqKe74-OCsWxcsQA&maxResults=50&key=${apiKey}`
                );
                const data = await res.json();
                console.log("my data", data);
                return { data };
            } catch (error) {
                return { data: null, error: 'Error fetching data' };
            }
        }
        fetchYoutubeData();
    return (
        <div>
            <h2>fetch videos</h2>
        </div>
    );
};

export default FetchVideos;
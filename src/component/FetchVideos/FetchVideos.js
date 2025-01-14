import React, { useEffect, useState } from 'react';

const FetchVideos = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    const YOUTUBE_PLAYLISTS_ITEM_API ='https://www.googleapis.com/youtube/v3/playlistItems';
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
        console.log('object', apiKey);
        useEffect(() => {
            const fetchYoutubeData = async () => {
                try {
                    const res = await fetch(
                        `${YOUTUBE_PLAYLISTS_ITEM_API}?part=snippet&playlistId=UULF9J48NTCqKe74-OCsWxcsQA&maxResults=10&key=${apiKey}`
                    );
                    const data = await res.json();
    console.log('object',data);
                    if (data.items) {
                        setVideos(data.items);
                    } else {
                        setError('No data found');
                    }
                } catch (err) {
                    setError('Error fetching data');
                }
            };
    
            fetchYoutubeData();
        }, [apiKey]);
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:p-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                <div className="h-32 rounded-lg bg-gray-200"></div>
                <div className="h-32 rounded-lg bg-gray-200"></div>
                <div className="h-32 rounded-lg bg-gray-200"></div>
                <div className="h-32 rounded-lg bg-gray-200"></div>
            </div>
        </div>
    );
};

export default FetchVideos;
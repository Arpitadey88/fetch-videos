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
           
            <h2 className="text-xl font-bold mb-6">YouTube Videos</h2>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                    {videos.map((video, index) => (
                        <div key={index} className="rounded-lg bg-gray-100 shadow p-4">
                            <a
                                href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <img
                                    src={video.snippet.thumbnails.medium.url}
                                    alt={video.snippet.title}
                                    className="w-full h-auto rounded mb-4"
                                />
                                <h3 className="text-md font-semibold">{video.snippet.title}</h3>
                            </a>
                            <p className="text-sm text-gray-600">
                                Published at: {new Date(video.snippet.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
           
        </div>
    );
};

export default FetchVideos;
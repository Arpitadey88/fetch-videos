import React, { useState, useEffect } from 'react';

const PexelsData = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('nature'); 
  const [error, setError] = useState(null);

  //default photos function
  const searchPhotos = async (query) => {
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}`;
    const PEXELS_API_KEY = process.env.REACT_APP_PEXEL_API_KEY;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });
      const data = await response.json();
      return data.photos;
    } catch (error) {
      console.error('Error fetching Pexels data:', error);
      throw error;
    }
  };


  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const fetchedPhotos = await searchPhotos(query);
        setPhotos(fetchedPhotos);
      } catch (err) {
        setError('Error fetching photos');
      }
    };

    fetchPhotos();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value.trim();
    if (searchTerm) {
      setQuery(searchTerm);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pexels Photo Gallery</h1>
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search for photos..."
          className="border p-2 rounded w-full sm:w-auto"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </form>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="rounded overflow-hidden shadow">
              <img
                src={photo.src.medium}
                alt={photo.alt || 'Pexels Image'}
                className="w-full h-auto"
              />
              <div className="p-2">
                <p className="text-sm text-gray-700">
                  Photographer: {photo.photographer}
                </p>
                <a
                  href={photo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm"
                >
                  View on Pexels
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PexelsData;
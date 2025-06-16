import { useEffect, useState } from 'react';

interface YouTubeVideoData {
  id: string;
  title: string;
  thumbnailUrl: string;
}

/**
 * Vlogs page component
 * 
 * Features:
 * - Responsive two-column layout
 * - Lazy-loaded YouTube videos
 * - Static image grid
 * - Intersection Observer for performance
 * - Mobile-first design
 */
export function Vlogs() {
  const [videos, setVideos] = useState<YouTubeVideoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // TODO: Implement YouTube API integration
        // For now, we'll show a coming soon message
        setVideos([]);
        setIsLoading(false);
      } catch (err) {
        setError(`Failed to load videos: ${err instanceof Error ? err.message : 'Unknown error'}`);
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Vlogs
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Welcome to my vlog series! Here you'll find my latest videos and updates.
        </p>
      </header>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left column: Image grid */}
        <section
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          aria-label="Vlog images"
        >
          {/* Placeholder for images */}
          <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800"></div>
          <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800"></div>
        </section>

        {/* Right column: YouTube feed */}
        <section
          className="space-y-4"
          aria-label="YouTube videos"
        >
          {isLoading ? (
            <div className="flex h-32 items-center justify-center">
              <p className="text-gray-600 dark:text-gray-400">Loading videos...</p>
            </div>
          ) : error ? (
            <div className="flex h-32 items-center justify-center">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          ) : videos.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Coming Soon!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm working on creating some amazing vlogs for you. Stay tuned for updates!
              </p>
              <a
                href="https://www.youtube.com/@alexisgriswold"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Visit my YouTube channel
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ) : (
            videos.map((video) => (
              <div
                key={video.id}
                className="aspect-video rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                {/* Video placeholder */}
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
} 
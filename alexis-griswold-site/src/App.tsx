import { Layout } from './components/layout/Layout';
import { siteConfig } from './config/site.config';

/**
 * Main App component
 * 
 * This is the root component that wraps the entire application.
 * It uses the Layout component to provide consistent structure
 * and styling across all pages.
 */
function App() {
  return (
    <Layout>
      <div className="prose dark:prose-invert max-w-none">
        <h1>Welcome to {siteConfig.metadata.title}</h1>
        <p>
          This is a modern, accessible, and responsive website built with React,
          TypeScript, and Tailwind CSS.
        </p>
      </div>
    </Layout>
  );
}

export default App;

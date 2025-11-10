import AnimatedPage from "@/components/AnimatedPage";

const Docs = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Documentation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <nav>
              <ul>
                <li><a href="#getting-started" className="font-semibold">Getting Started</a></li>
                <li><a href="#api-reference" className="font-semibold">API Reference</a></li>
                <li><a href="#examples" className="font-semibold">Examples</a></li>
              </ul>
            </nav>
          </aside>
          <main className="md:col-span-3">
            <section id="getting-started">
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <p>Welcome to the documentation. This guide will walk you through the essential steps to get you up and running.</p>
            </section>
            <section id="api-reference" className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
              <p>Explore our API endpoints and learn how to integrate with our services.</p>
            </section>
            <section id="examples" className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Examples</h2>
              <p>Find code examples and best practices to help you build your applications.</p>
            </section>
          </main>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Docs;

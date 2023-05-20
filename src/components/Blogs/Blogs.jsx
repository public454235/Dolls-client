

const Blogs = () => {
    return (
        <div>
            <h1 className="text-center text-blue-950 font-bold text-4xl mb-12 mt-12">Question</h1>
            <div className="text-center border-2 space-y-4 py-5">
                <h3 className="font-bold text-2xl px-12">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className="px-12">An access token and a refresh token are commonly used in authentication and authorization systems to grant and manage access to protected resources. Here s an overview of each token and their purpose.</p>
            </div>
            <div className="text-center border-2 space-y-4 py-5">
                <h3 className="font-bold text-2xl px-12">2. Compare SQL and NoSQL databases?</h3>
                <p className="px-12">SQL and NoSQL databases are two different types of database management systems that are used to store and retrieve data. Here s a comparison between SQL and NoSQL databases.</p>
            </div>
            <div className="text-center border-2 space-y-4 py-5">
                <h3 className="font-bold text-2xl px-12">3. What is express js? What is Nest JS?</h3>
                <p className="px-12">Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js is known for its unopinionated approach, meaning it gives developers a lot of freedom in structuring their applications and choosing libraries or tools to use. It offers a range of features, including routing, middleware support, and template engine integration, but it keeps the core framework lightweight and allows developers to add additional functionality through third-party libraries.</p>
            </div>
            <div className="text-center border-2 space-y-4 py-5">
                <h3 className="font-bold text-2xl px-12">4. What is MongoDB aggregate and how does it work?</h3>
                <p className="px-12">MongoDB s aggregate is a powerful framework used for data aggregation and analysis within the MongoDB database. It allows you to perform complex queries and transformations on your data, combining multiple operations into a single query pipeline.

                    The aggregate framework operates on a collection of documents and uses a pipeline approach, where each stage in the pipeline performs a specific operation on the data. The input to the pipeline is the collection of documents, and the output is the result of applying the pipeline stages sequentially.

                    Here s a high-level overview of how the MongoDB aggregate pipeline works.</p>
            </div>
        </div>
    );
};

export default Blogs;
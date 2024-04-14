import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';

const ErrorPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center mb-8 text-white">
          <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
          <p>We apologize for the inconvenience. Please try again later.</p>
        </div>
        <div>
          <Link to="/" className="text-white hover:underline">Return Home</Link>
        </div>
      </div>
      </Layout>
  );
};

export default ErrorPage;

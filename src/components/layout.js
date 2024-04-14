import React from 'react';
import Footer from './footer';



const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-gradient-to-br from-white to-black min-h-screen">
                {children}
            </div>
                <Footer />
        </div>
    );
};

export default Layout;
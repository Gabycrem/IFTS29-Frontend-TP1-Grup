import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css'

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return(
        <div className="layout">
            <button className={`hamburger ${sidebarOpen ? "open" : ""}`} onClick={toggleSidebar}>{sidebarOpen ? '✖' : '☰'}</button>
            <aside className={`sidebarLayout ${sidebarOpen ? "open" : ""}`}>
                <Sidebar onLinkClick={() => setSidebarOpen(false)} />
            </aside>
            <main className='content'>
                {children}
            </main>
        </div>
    );
};

export default Layout;
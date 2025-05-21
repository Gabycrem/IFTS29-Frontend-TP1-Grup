import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css'

const Layout = ({ children }) => {
    return(
        <div className="layout">
            <aside className="sidebarLayout">
                <Sidebar />
            </aside>
            <main className='content'>
                {children}
            </main>
        </div>
    );
};

export default Layout;
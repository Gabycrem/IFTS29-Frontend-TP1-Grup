import React from 'react';
import './Layout.css'

const Layout = ({ sidebar, main }) => {
    return(
        <div className="layout">
            <aside className="sidebarLayout">
                {sidebar}
            </aside>
            <main className='content'>
                {main}
            </main>
        </div>
    );
};

export default Layout;
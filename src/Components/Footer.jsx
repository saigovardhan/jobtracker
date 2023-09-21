import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
      <footer className=" bottom-0 footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">About me</Link>
 
        </nav>
        
        <aside>
          <p>No Copyright © 2023 - All right not reserved</p>
        </aside>
      </footer>
    );
}

export default Footer
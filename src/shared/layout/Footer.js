import React from 'react';

const Footer = () => {
   
    const root = {
        marginTop: '20px',
    }
    return (
        <footer style={root}>
            &copy; Web2 {new Date().getFullYear()}
        </footer>
    );

}

export default Footer;
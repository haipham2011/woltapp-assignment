import React from 'react';
import FooterContainer from './FooterContainer';

const Footer = () => {
    const footerProps = {
        downloadImg: {
            ios: "https://static.wolt.com/images/ios-en-2928664fe1fc6aca88583a6f606d60ba.svg",
            android: "https://static.wolt.com/images/android-en-5a7d78f3a8cd778ede8d1e352e706f6f.png"
        }
    }

    return (
        <div className="footerBottom" datatest="Footer">
           <FooterContainer {...footerProps} />
        </div>

    );
}



export default Footer;
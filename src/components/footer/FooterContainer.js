import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FooterContainer = ({ downloadImg }) => {
    return(
        <footer className="footer text-center" datatest="FooterContainer">
                <Row>
                    <Col>
                        Terms and conditions
                    </Col>
                    <Col>
                        &copy; 2020 Wolt
                    </Col>
                    <Col id="download">
                        <img src={downloadImg.ios} alt="Download app: ios" datatest="ios"/>
                        <img src={downloadImg.android} alt="Download app: android" datatest="android"/>
                    </Col>
                </Row>
        </footer>
    );
}

FooterContainer.propTypes = {
    downloadImg: PropTypes.exact({
        ios: PropTypes.string,
        android: PropTypes.string
    })
}


export default FooterContainer;
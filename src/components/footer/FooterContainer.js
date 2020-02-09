import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { content, downloadImg } from './config';

const FooterContainer = () => {
    const { term, copyRight } = content;

    return(
        <footer className="footer text-center" datatest="FooterContainer">
                <Row>
                    <Col>
                        {term}
                    </Col>
                    <Col>
                        {copyRight}
                    </Col>
                    <Col id="download">
                        {
                          downloadImg.map((image, index) => {
                              const { src, alt } = image;
                              return (
                                  <img key={index} src={src} alt={alt} datatest="image"/>
                              );
                          })
                        }
                    </Col>
                </Row>
        </footer>
    );
}

export default FooterContainer;
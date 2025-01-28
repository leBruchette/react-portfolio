import React, {useState} from "react";
import "./style.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {meta, contact} from "../../content_option";
import {Container, Row, Col, Alert} from "react-bootstrap";
import {
    FaLinkedin,
} from "react-icons/fa";

export const ContactMe = () => {
    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{meta.title} | Contact</title>
                    <meta name="description" content={meta.description}/>
                </Helmet>
                <Row className="mb-3 mt-3 pt-md-3">
                    <Col lg="10">
                        <h1 className="display-4 mb-4">Contact Me</h1>
                        <hr className="t_border my-4 ml-0 text-left"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <div className="mb-2"><p>{contact.description_1}<a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn.<br/></a>
                            {contact.description_2}</p>
                        </div>

                    </Col>
                    <Col lg="5" className="mb-5">

                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};

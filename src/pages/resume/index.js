import React, {useState} from "react";
import "../../components/aws/snspublish/style.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {meta, resume} from "../../content_option";
import {Container, Row, Col} from "react-bootstrap";
import SNSMessageSender from "../../components/aws/snspublish";

export const ResumeRequest = () => {
    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{meta.title} | Resume Request</title>
                    <meta name="description" content={meta.description}/>
                </Helmet>
                <Row className="mb-3 mt-3 pt-md-3">
                    <Col lg="10">
                        <h1 className="display-4 mb-4">Resume</h1>
                        <hr className="t_border my-4 ml-0 text-left"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <div className="mb-2">
                            <p>{resume.description}</p>
                        </div>
                    </Col>
                    <Col lg="5" className="mb-5">
                        <SNSMessageSender />
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};

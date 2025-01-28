import React from "react";
import "./style.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Container, Row, Col} from "react-bootstrap";
import {
    dataabout,
    meta,
    worktimeline,
    skills_1,
    skills_2,
} from "../../content_option";

export const About = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> About | {meta.title}</title>
                    <meta name="description" content={meta.description}/>
                </Helmet>
                <Row className="mt-3 pt-md-3">
                    <Col lg="10">
                        <h1 className="display-4 mb-4">About me</h1>
                        <hr className="t_border my-4 ml-0 text-left"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="5">
                        <h3 className="color_sec py-4">{dataabout.title}</h3>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="10" className="d-flex align-items-center">
                        <div>
                            <p>{dataabout.aboutme}</p>
                            <p>{dataabout.description}</p>
                            <ul className="bullet-circle">
                            {dataabout.history.map((data) => {
                                return(<li className="bullet-circle" key={data.id}>{data.event}</li>);
                            })}
                        </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="5">
                    <h3 className="color_sec py-4">Work</h3>
                    </Col>
                </Row>
                <Row className=" sec_sp">
                    <Col lg="10">
                        <table className="table caption-top">
                            <tbody>
                            {worktimeline.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{data.jobtitle}</th>
                                        <td><a className="no-underline" href={data.where_url}
                                               target="_blank">{data.where}</a></td>
                                        <td>{data.date}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row>
                    <Col lg="5">
                        <h3 className="color_sec py-4">Skills</h3>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="6">
                        {skills_1.map((data, i) => {
                            return (
                                <div key={i}>
                                    <h3 className="progress-title">{data.name}</h3>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${data.value}%`,
                                            }}
                                        >
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                    <Col lg="6">
                        {skills_2.map((data, i) => {
                            return (
                                <div key={i}>
                                    <h3 className="progress-title">{data.name}</h3>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${data.value}%`,
                                            }}
                                        >
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};


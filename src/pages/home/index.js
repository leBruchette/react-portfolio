import React from "react";
import "./style.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {introdata, meta} from "../../content_option";
import {Link} from "react-router-dom";
import pdf from "../../assets/mpbruzina-20241120.pdf";


export const Home = () => {
    return (
        <HelmetProvider>
            <section id="home" className="home">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> {meta.title}</title>
                    <meta name="description" content={meta.description}/>
                </Helmet>
                <div className="intro_sec d-block d-lg-flex">
                    <div className="h_bg-image order-1 order-lg-2 h-100 w-100 d-flex background"/>
                    <div className="text order-2 order-lg-1 d-lg-flex justify-content-center">
                        <div className="align-self-center ">
                            <div className="intro mx-auto">
                                <h2 className="mb-1x">{introdata.title}</h2>
                                <h3 className="mb-1x">{introdata.description}</h3>
                                <div className="intro_btn-action pb-5 pt-2">
                                    <Link to="/about" className="text_2">
                                        <div className="ac_btn btn button_p">
                                            About
                                        </div>
                                    </Link>
                                    <Link to="/contact">
                                        <div className="ac_btn btn button_p">
                                            Contact
                                        </div>
                                    </Link>
                                    <div className="ac_btn btn button_p">
                                        <a href={pdf} download="mbruzina-resume.pdf">Download Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    );
};

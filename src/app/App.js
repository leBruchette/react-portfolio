import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";
import ImagePreloader from "../components/imagepreloader";
import profileImage from "../assets/images/camping.jpeg"
import backgroundImage from "../assets/images/namur_pano_gs.jpeg";

function _ScrollToTop(props) {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);


export default function App() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imageUrls = [
        profileImage,
        backgroundImage
    ];

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ImagePreloader images={imageUrls} onLoad={() => setImagesLoaded(true)} />
            {imagesLoaded && (
            <ScrollToTop>
                <Headermain />
                <AppRoutes />
            </ScrollToTop> )}
        </Router>
    );
};

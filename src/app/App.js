import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";
import withPreloadImages from "../hooks/withPreloadImages";

function _ScrollToTop(props) {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
                <Headermain/>
                <AppRoutes/>
            </ScrollToTop>
        </Router>
    );
}

const imagesToPreload = [
    '/assets/images/camping.jpeg',
    '/assets/images/namur_pano_gs.jpeg',
];

const AppWithPreloadImages = withPreloadImages(App, imagesToPreload);
export default AppWithPreloadImages;
// export default function App() {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <PreloadImages/>
//       <ScrollToTop>
//         <Headermain />
//         <AppRoutes />
//       </ScrollToTop>
//     </Router>
//   );
// }

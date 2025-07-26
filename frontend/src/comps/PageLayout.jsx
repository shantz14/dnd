import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import "./PageLayout.css";

function PageLayout(props) {

    return (
        <div className="pageLayout">
            <Navbar />
            <Leftbar />
            <div className="pageContents">
                {props.children}
            </div>
            <Rightbar />
        </div>
    );
}

export default PageLayout;

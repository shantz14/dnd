import "./Wiki.css";
import PageLayout from "../../comps/PageLayout";
import Markdown from "marked-react";

import { useState, useEffect } from "react";

const serverURL = "http://localhost:1323/wiki";

function Wiki() {
    const [contents, setContents] = useState("");

    useEffect(() => {
        fetch(serverURL)
            .then(res => {
                return res.text();
            })
            .then(txt => {
                setContents(txt);
            })
            .catch(error => {
                console.log("Error fetching wiki page markdown: " + error);
            });
    });

    return (
        <PageLayout>
            <div className="wikiLayout">
                <Markdown>{contents}</Markdown>
            </div>
        </PageLayout>
    );
}

export default Wiki;

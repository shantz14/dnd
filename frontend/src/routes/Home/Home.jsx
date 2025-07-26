import './Home.css';
import {WikiCard, MapCard, DMToolsCard} from './HomeCards';
import PageLayout from '../../comps/PageLayout'

import { useState, useEffect } from 'react';

function Home() {
    const serverURL = "http://localhost:1323";
    const [str, setStr] = useState('');

    useEffect(() => {
        fetch(serverURL)
            .then(res => {
                return res.text();
            })
            .then(txt => {
                setStr(txt);
            })
            .catch(error => {
                console.log("There was error: " + error);
            });
    });

    return (
        <PageLayout>
            <div id='homeLayout'>
                <WikiCard />
                <MapCard />
                <DMToolsCard />
                <p>{str}</p>
            </div>
        </PageLayout>
    );
}

export default Home;

import './Home.css';
import { WikiCard, MapCard, DMToolsCard } from './HomeCards';
import { RecentlyVisited } from './RecentlyVisited';
import PageLayout from '../../comps/PageLayout';

function Home() {

    return (
        <PageLayout>
            <div id='homeLayout'>
                <WikiCard />
                <MapCard />
                <DMToolsCard />
                <DMToolsCard />
                <DMToolsCard />
                <DMToolsCard />

                <RecentlyVisited />
            </div>
        </PageLayout>
    );
}

export default Home;

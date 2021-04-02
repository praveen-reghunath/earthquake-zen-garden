import './Home.scss';
import { useAppState } from 'state/appState';
import { Link } from 'react-router-dom'

function Home() {
    const { earthquakes: { title, list = [] } = {}, sortEarthquakes } = useAppState();

    const onHeaderClick = (column) => {
        sortEarthquakes(column);
    };

    return (
        <section className="home">
            <h2 className="heading">{title}</h2>
            <table>
                <thead>
                    <tr>
                        <th><button className="header-button" onClick={() => onHeaderClick('PLACE')}>Title</button></th>
                        <th><button className="header-button" onClick={() => onHeaderClick('MAG')}>Magnitude</button></th>
                        <th><button className="header-button" onClick={() => onHeaderClick('TIME')}>Time</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(({ id, mag, place, time }) => <tr key={id}>
                            <td><Link to={`/details/${id}`}>{place}</Link></td>
                            <td>{mag}</td>
                            <td>{new Date(time).toLocaleDateString('en-US', {
                                year: 'numeric', month: 'numeric', day: 'numeric',
                                hour: 'numeric', minute: 'numeric', second: 'numeric',
                            })}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
}

export default Home;
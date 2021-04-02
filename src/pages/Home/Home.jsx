import './Home.scss';
import { useAppState } from 'state/appState';
import { Link } from 'react-router-dom'

function Home() {
    const [{ earthquakes: { title, list = [] } = {} }] = useAppState();

    return (
        <section className="home">
            <h2 className="heading">{title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Magnitude</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(({ id, mag, place, time }) => <tr key={id}>
                            <td><Link to={`/details/${id}`}>{place}</Link></td>
                            <td>{mag}</td>
                            <td>{time}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
}

export default Home;
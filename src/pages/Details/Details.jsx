import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.scss';

import InfoRow from 'components/InfoRow';

import API from 'utils/api';

function Details() {
    let { id } = useParams();
    const [{ title, mag, type, time, status, tsunami }, setDetails] = useState({});

    const requestDetails = async (id) => {
        const details = await API.getEarthquakDetails(id);
        setDetails(details);
    };

    useEffect(() => {
        requestDetails(id);
    }, []);

    return (
        <section className="details">
            <h2>{title}</h2>
            <table>
                <InfoRow label="Title">{title}</InfoRow>
                <InfoRow label="Magnitude">{mag}</InfoRow>
                <InfoRow label="Time">{time}</InfoRow>
                <InfoRow label="Status">{status}</InfoRow>
                <InfoRow label="Tsunami">{tsunami}</InfoRow>
                <InfoRow label="Type">{type}</InfoRow>
            </table>
        </section>
    );
}

export default Details;
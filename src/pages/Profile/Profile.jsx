import { useEffect, useState } from 'react';
import API from 'utils/api';
import { useAppState } from 'state/appState';

import InfoRow from 'components/InfoRow';

import './Profile.scss';

function Profile() {
    const { profile, setProfile } = useAppState();
    const { firstName, lastName, avatarImage, phone, email, bio } = profile || {};

    const requestProfile = async () => {
        const profile = await API.getProfileDetails();
        setProfile(profile);
    };

    useEffect(() => {
        if (!profile) {
            requestProfile();
        }
    }, []);

    return (
        <section className="profile">
            <h4>Profile</h4>
            <div className="personal-details">
                <picture>
                    <img className="profile-image" src={avatarImage} alt="profile picture" />
                </picture>
                <table>
                    <tbody>
                        <InfoRow label="First Name">{firstName}</InfoRow>
                        <InfoRow label="Last Name">{lastName}</InfoRow>
                        <InfoRow label="Phone">{phone}</InfoRow>
                        <InfoRow label="Email">{email}</InfoRow>
                        <InfoRow label="Bio">{bio}</InfoRow>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Profile;
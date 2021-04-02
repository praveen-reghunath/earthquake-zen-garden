
export default class API {

    static async getApplicationInfo() {
        const response = await fetch('/bootstrap');
        const appInfo = await response.json();
        return appInfo;
    }

    static async getLatestEarthquakes() {
        const response = await fetch('/latest_earthquakes');
        const earthquakes = await response.json();
        return earthquakes;
    }

    static async getEarthquakDetails(id) {
        const response = await fetch(`/earthquak/${id}`);
        const details = await response.json();
        return details;
    }

    static async getProfileDetails() {
        const response = await fetch('/profile');
        const profile = await response.json();
        return profile;
    }

}
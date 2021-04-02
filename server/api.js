const data = require('./data.json');

module.exports = function adaptEarthquakData() {
    const result = {};
    result.siteInfo = data.site;
    result.profile = data.profile;
    result.bootstrap = {
        siteInfo: data.site,
        userName: data.profile.firstName
    };

    result.latest_earthquakes = {
        title: data.data.metadata.title,
        list: data.data.features.map(item => {
            const { id, properties: { mag, place, time } } = item;
            return {
                id,
                mag,
                place,
                time
            };
        })
    };

    result.earthquak = data.data.features.map(item => {
        const { id, properties: { mag, place, time, title, status, tsunami, type } } = item;

        return {
            id,
            mag,
            place,
            time,
            title,
            status,
            tsunami,
            type
        };
    });

    return result;
}
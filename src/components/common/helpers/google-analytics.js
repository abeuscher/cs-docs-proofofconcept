export const googleAnalytics = (event, label) => {
    let eventLabel = 'Dev';
    let eventAction = event.target.getAttribute('data-ga-event');

    if (window.location.host === 'www.contentstack.com') {
        eventLabel = 'Prod';
    } else if (window.location.host.includes('.contentstack.com')) {
        eventLabel = 'Stag';
    }
    let tracker = window.ga.getAll()[0];
    if (tracker) {
        tracker.send('event', 'Run in Postman', eventAction, `${eventLabel}-${label}`);
    }
}
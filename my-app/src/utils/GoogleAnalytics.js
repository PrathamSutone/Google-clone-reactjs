import ReactGA from 'react-ga';

ReactGA.initialize('UA-000000-01');

const sendSearchEvent = (searchTerm) => {
    ReactGA.event({
        category: 'Search',
        action: 'Made a Search',
        label: searchTerm
    });
};

export { sendSearchEvent };

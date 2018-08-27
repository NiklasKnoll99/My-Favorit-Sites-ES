/* eslint-disable no-console */
import modeSwitchInit from './components/modeswitch/modeSwitch';
import personFinderInit from './components/personFinder/personFinder';
import SERVER_URL from './constants/server-url';
import List from './components/list/list/list'

const init = async () => {
    await chayns.ready;
    onChaynsReady();

    console.info('ServerUrl for current environment:', SERVER_URL);
};

init();

let onChaynsReady = function() {
    console.log('Chayns is ready!');

    let x = new List;
}

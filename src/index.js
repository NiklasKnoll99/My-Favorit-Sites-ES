/* eslint-disable no-console */
import SERVER_URL from './constants/server-url';
import Search from './components/search/search';
import Fetch from './components/fetch/fetch';
import List from './components/list/list';
import ListItem from './components/listitem/listitem';

const init = async () => {
    await chayns.ready;
    onChaynsReady();
};

init();

let fetch = null;
let list = null;

function onChaynsReady() {
    let search = new Search(document.querySelector('#search'), onSearch);

    fetch = new Fetch;
    list = new List(document.querySelector('#siteDisplay'));
};

function onSearch(searchString) {
    console.log(searchString);
    fetch.run('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=10', onJsonLoad);
};

function onJsonLoad(jsonObjects) {
    for (let i = 0; i < jsonObjects.length; i++) {
        console.log(jsonObjects[i]); // DEBUG
        list.add(new ListItem(jsonObjects[i].appstoreName, jsonObjects[i].siteId, 'https://tapp01.tobit.com/content/design/Designguide/chayns_design_guide/chayns_icon.png', ''));
    }

    list.print();
};

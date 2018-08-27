/* eslint-disable no-console */
import SERVER_URL from './constants/server-url';
import Search from './components/search/search';
import fetch from './utils/fetch';
import List from './components/list/list';
import ListItem from './components/listitem/listitem';

const init = async () => {
    await chayns.ready;
    onChaynsReady();
};

init();

let list = null;

function onChaynsReady() {
    let search = new Search(document.querySelector('#search'), onSearch);

    list = new List(document.querySelector('#siteDisplay'));
};

function onSearch(searchString) {
    console.log(searchString);
    
    if (searchString != '')
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + searchString + '&Skip=' + 0 + '&Take=' + 10, onJsonLoad);

    else
        list.clear();
};

function onJsonLoad(jsonObjects) {
    list.clear();

    for (let i = 0; i < jsonObjects.length; i++) {
        let $siteItem = new ListItem(jsonObjects[i].appstoreName, jsonObjects[i].siteId, 'https://sub60.tobit.com/l/' + jsonObjects[i].siteId + '?size=45', 'https://chayns.net/' + jsonObjects[i].siteId + '/');

        list.add($siteItem.getHTML());
    }

    list.print();
};

/* eslint-disable no-console */
import SERVER_URL from './constants/server-url';
import Search from './components/search/search';
import fetch from './utils/fetch';
import List from './components/list/list';
import ListItem from './components/listitem/listitem';
import setLoadMoreCb from './utils/setloadmorecb';

const init = async () => {
    await chayns.ready;
    onChaynsReady();
};

init();

let list = null;
let filter = null;

let skip = 0;
let take = 10;

function onChaynsReady() {
    let search = new Search(document.querySelector('#search'), onSearch);

    list = new List(document.querySelector('#siteDisplay'));

    setLoadMoreCb(document.querySelector('#loadMore'), onLoadMoreClick);
};

function onLoadMoreClick($Btn) {
    skip += 10;
    fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + filter + '&Skip=' + skip + '&Take=' + take, onJsonLoad);
};

function onSearch(searchString) {
    filter = searchString;
    skip = 0;
    
    if (searchString != '')
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + filter + '&Skip=' + skip + '&Take=' + take, onJsonLoad);

    else
        list.clear();
};

function onJsonLoad(jsonObjects) {
    if (skip === 0)
        list.clear();

    for (let i = 0; i < jsonObjects.length; i++) {
        let $siteItem = new ListItem(jsonObjects[i].appstoreName, jsonObjects[i].siteId, 'https://sub60.tobit.com/l/' + jsonObjects[i].siteId + '?size=45', 'https://chayns.net/' + jsonObjects[i].siteId + '/');

        list.add($siteItem.getHTML());
    }

    list.print();
};

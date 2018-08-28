/* eslint-disable no-console */
import SERVER_URL from './constants/server-url';
import Search from './components/search/search';
import fetch from './utils/fetch';
import ListItem from './components/listitem/listitem';
import setLoadMoreCb from './utils/setloadmorecb';
import NewFavoritForm from './components/newfavoritform/newfavoritform';
import DisplayForm from './components/displayform/displayform';

const init = async () => {
    await chayns.ready;
    onChaynsReady();
};

init();

let filter = null;

let newFavForm = null;
let displayForm = null;

let skip = 0;
let take = 10;

function onChaynsReady() {
    let $tappContent = document.querySelector('.tapp__content');

    newFavForm = new NewFavoritForm;
    newFavForm.create($tappContent);

    displayForm = new DisplayForm;
    displayForm.create($tappContent);

    let search = new Search;
    search.create(displayForm.getHTML().querySelector('.accordion__head'), onSearch);

    setLoadMoreCb(displayForm.getHTML().querySelector('#loadMore'), onLoadMoreClick);
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
        displayForm.clear();
};

function onJsonLoad(jsonObjects) {
    if (skip === 0)
        displayForm.clear();

    for (let i = 0; i < jsonObjects.length; i++) {
        let $siteItem = new ListItem(jsonObjects[i].appstoreName, jsonObjects[i].siteId, 'https://sub60.tobit.com/l/' + jsonObjects[i].siteId + '?size=45', 'https://chayns.net/' + jsonObjects[i].siteId + '/');

        displayForm.add($siteItem);
    }

    displayForm.print();
};

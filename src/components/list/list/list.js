import htmlToElement from 'html-to-element'
import Search from '../../search/search'
import ListItem from '../listitem/listItem'

export default class List {
    siteDisplay = null;
    search = null;
    listItems = [];

    constructor() {
        this.createElement(htmlToElement(`
        <div class="accordion accordion--open accordion--fixed">
            <div class="accordion__head">
                Suchen 
                    <div style="text-align: right; margin-top: -35px">
                        <input id="search" style="width: 50%; height: 40px; font-size: 14px" class="input" placeholder="Suche" type="text" value>
                        <label>
                            <i class="fa fa-search" style="font-size: 15px; position: absolute; top: 15px; right: 12px"></i>
                        </label>
                    </div>
                <br>
            </div>
            <div class="accordion__body">
                <div class="accordion__content">
                    <div style="width: 100%" id="siteDisplay">
                    </div>

                    <div style="text-align: right; margin: 10px">
                        <a id="loadMore" href="#">Mehr anzeigen</a>
                    </div>
                </div>
            </div>
        </div>`));

        //this.search = new Search(this.onJsonLoad.bind(this));
        this.search = new Search(json => this.onJsonLoad(json));
        this.siteDisplay = document.querySelector('#siteDisplay');
    };

    createElement(siteDisplayElement) {
        document.querySelector('.tapp__content').appendChild(siteDisplayElement);
    };

    onJsonLoad(jsonObjects) {
        for (let i = 0; i < jsonObjects.length; i++) {
            let siteElement = new ListItem(jsonObjects[i].appstoreName, jsonObjects[i].siteId, 'https://sub60.tobit.com/l/' + jsonObjects[i].siteId + '?size=45');
            this.listItems.push(siteElement);
            this.siteDisplay.appendChild(this.listItems[i].getElement());
        }
    };
}
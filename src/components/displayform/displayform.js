import htmlToElement from 'html-to-element';

export default class DisplayForm {
    $siteDisplay = null;
    itemList = null;

    create($parent) {
        $parent.appendChild(htmlToElement(`
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
                <div style="width: 100%" id="siteDisplay"></div>
            </div>

        <div style="text-align: right; margin: 10px">
            <a id="loadMore" href="#">Mehr anzeigen</a>
        </div>
            </div>
        </div>`));

        this.$siteDisplay = document.querySelector('#siteDisplay');
        this.itemList = [];
    };

    add($listItem) {
        this.itemList.push($listItem);
    };

    clear() {
        this.$siteDisplay.innerHTML = '';
        this.itemList = [];
    };

    print() {
        for (let i = 0; i < this.itemList.length; i++) {
            this.$siteDisplay.appendChild(this.itemList[i].getHTML());
        }
    };
}
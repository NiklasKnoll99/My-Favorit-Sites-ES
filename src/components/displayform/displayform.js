import htmlToElement from 'html-to-element';

export default class DisplayForm {
    $siteDisplay = null;
    $html = null;

    itemList = null;

    create($parent) {
        this.$html = htmlToElement(`
            <div class="accordion accordion--open accordion--fixed">
                <div class="accordion__head">
                    Suchen 
                    <br>
                </div>
                <div class="accordion__body">
                    <div style="width: 100%" id="siteDisplay"></div>
                </div>

            <div style="text-align: right; margin: 10px">
                <a id="loadMore" href="#">Mehr anzeigen</a>
            </div>
                </div>
            </div>`);

        $parent.appendChild(this.$html);

        this.$siteDisplay = this.$html.querySelector('#siteDisplay');
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

    getHTML() {
        return this.$html;
    };
}
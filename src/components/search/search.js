import htmlToElement from 'html-to-element';

export default class Search {
    $html = null;
    $searchBox = null;

    timeout = null;

    create($parent, onSearch) {
        this.$html = htmlToElement(`
            <div style="text-align: right; margin-top: -35px">
                <input id="search" style="width: 50%; height: 40px; font-size: 14px" class="input" placeholder="Suche" type="text" value>
                <label>
                    <i class="fa fa-search" style="font-size: 15px; position: absolute; top: 15px; right: 12px"></i>
                </label>
            </div>`);

        $parent.appendChild(this.$html);

        this.$searchBox = this.$html.querySelector('#search');
        this.$searchBox.addEventListener('keyup', () => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => onSearch(this.$searchBox.value), 500);
        });
    };

    getHTML() {
        return this.$html;
    };
}
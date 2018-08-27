export default class Search {
    $searchBox = null;
    onJsonLoadCallback = null;

    constructor(onJsonLoad) {
        this.$searchBox = document.querySelector('#search');
        this.$searchBox.addEventListener('keyup', () => { this.onKeyUp(); });
        this.onJsonLoadCallback = onJsonLoad;
    };

    onKeyUp() {
        this.fetchSites(10, this.$searchBox.value, 0);
    };

    fetchSites(amount, filter, skip) {
        window.fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + filter + '&Skip=' + skip + '&Take=' + amount).then((response) => {
            if (response.ok)
                return response.json();
        }).then((json) => {
            this.onJsonLoadCallback(json.Data);
        });
    };
}
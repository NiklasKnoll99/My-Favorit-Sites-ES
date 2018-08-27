export default class Search {
    timeout = null;

    constructor($searchBox, onSearch) {
        $searchBox.addEventListener('keyup', () => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => onSearch($searchBox.value), 500);
        });
    }
}
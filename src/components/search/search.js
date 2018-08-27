export default class Search {
    constructor($searchBox, onSearch) {
        $searchBox.addEventListener('keyup', () => onSearch($searchBox.value));
    }
}
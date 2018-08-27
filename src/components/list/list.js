export default class List {
    listItems = null;
    $display = null;

    constructor($display) {
        this.listItems = [];
        this.$display = $display;
    };

    add(listItem) {
        this.listItems.push(listItem);
    };

    print() {
        for (let i = 0; i < this.listItems.length; i++) {
            this.$display.appendChild(this.listItems[i].getHTML());
        }
    };
}
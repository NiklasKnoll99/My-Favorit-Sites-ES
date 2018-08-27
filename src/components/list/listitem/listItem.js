import htmlToElement from 'html-to-element'

export default class ListItem {
    listItemElement = null;

    constructor(heading, description, iconUrl) {
        this.listItemElement = htmlToElement(`
        <div>
            <div style="display: flex; align-items: center; padding: 8px 0px 8px 10px">
                <div style="width: 45px; height: 45px; background-color: #AAAAAA; background-image: url(` + iconUrl + `); background-size: cover"></div>
                <div style="padding-left: 8px">
                    <h4 style="line-height: 0.9em">` + heading + `</h4>
                    <p style="line-height: 0.9em; font-size: 85%">` + description + `</p>
                </div>
            </div>
            <div style="height: 1px; background-color: #335360"></div>
        </div>`);
    };

    getElement() {
        return this.listItemElement;
    };
}
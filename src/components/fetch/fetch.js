export default class Fetch {
    run(url, onJsonLoad) {
        window.fetch(url).then((response) => {
            if (response.ok)
                return response.json();
        }).then((json) => {
            onJsonLoad(json.Data);
        });
    };
}
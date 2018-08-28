import htmlToElement from 'html-to-element';

export default class NewFavoritForm {
    $name = null;
    $facebookpage = null;
    $address = null;
    $email = null;

    create($parent) {
        $parent.appendChild(htmlToElement(`
        <div class="accordion">
            <div class="accordion__head">Neuen Favoriten hinzufügen</div>
            <div class="accordion__body">
                <!--<div class="accordion__intro"></div>-->
                <div class="accordion__content">
                    <input id="name" style="width: 100%; height: 34px" class="input" placeholder="Name" type="text" value>
                    <input id="facebookpage" style="width: 100%; height: 34px" class="input" placeholder="Facebook-Seite" type="text" value>
                    <input id="address" style="width: 100%; height: 34px" class="input" placeholder="Adresse" type="text" value>
                    <input id="email" style="width: 100%; height: 34px" class="input" placeholder="E-Mail" type="text" value><br>
                    <textarea id="comment" style="width: 100%" class="input" placeholder="Kommentar" type="text" autogrow value></textarea>
                    <br><br>

                    <div style="text-align: center">
                        <button id="sendFavoritData" class="button">Abschicken</button>
                    </div>
                    <br>
                </div>
            </div>
        </div>`));

        this.$name = document.querySelector('#name').innerHTML;
        this.$facebookpage = document.querySelector('#facebookpage').innerHTML;
        this.$address = document.querySelector('#address').innerHTML;
        this.$email = document.querySelector('#email').innerHTML;
    };

    checkInput() {
        let errors = [];
        let errString = null;

        if (this.$name === '')
            errors.push('Name');

        if (this.$facebookpage === '')
            errors.push('Facebookseite');

        if (this.$address === '')
            errors.push('Adresse');

        if (this.$email === '')
            errors.push('Email');

        if (errors.length === 1) {
            errString = 'Das Feld "' + errors[0] + '" darf nicht leer sein!';
        }

        else if (errors.length > 1) {
            errString = 'Die Felder "';

            for (let i = 0; i < errors.length; i++) {
                if (i < errors.length - 1)
                    errString += errors[i] + ', ';

                else if (i === errors.length - 1)
                    errString += errors[i] + '" dürfen nicht leer sein!';
            }
        }

        if (errString != null)
            chayns.dialog.alert('Fehler', errString);
        };
}
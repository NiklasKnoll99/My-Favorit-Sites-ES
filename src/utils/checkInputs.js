export default (name, facebookpage, address, email) => {
    let errors = [];
    let errString = null;

    if (name === '')
        errors.push('Name');

    if (facebookpage === '')
        errors.push('Facebookseite');

    if (address === '')
        errors.push('Adresse');

    if (email === '')
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
export function cantidadCaracteres(input) {
    
    if (input.length >= 2 && input.length <= 50) {

        return true; //Dato correcto
    }else{

        return false;//Dato incorrecto
    }
}

export const validarPrecio = (dato) => {
    let patron = /^[0-9]{1,4}$/
    if (patron.test(dato)) {
        return true
    }else{
        return false
    }
}

export const validarImagen = (url) => {
    let patron = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/;

    if (patron.test(url)) {
        return true
    }else{
        return false
    }
}
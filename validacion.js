function validar(form) {
    let array = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let dni = form.dni.value.trim();
    let dniletra = form.dniletra.value.trim();
    let DNILETRA = dniletra.toUpperCase();


    if (dni < 0 || dni > 99999999 || isNaN(dni) || dni === '') {
        alert("El número proporcionado no es válido");
        return false;
    } else if (dni.length !== 8) {
        alert("El número de caracteres no es el solicitado");
        return false;
    } else if (DNILETRA.length !== 1 || !(DNILETRA >= 'A' && DNILETRA <= 'Z')) {
        alert("Ingrese un solo carácter alfabético para la letra del DNI");
        return false;
    } else {
        let letraCalculada = array[dni % 23];
        alert("Tu letra es: " + letraCalculada);
        if (letraCalculada === DNILETRA) {
            alert("El DNI y la Letra son correctos");
        } else {
            alert("La letra que ha indicado no es correcta");
        }
    }
    return true;
}

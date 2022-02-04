import {numberToSpanishString} from "./static";

export function clockToString(hour, minute) {
    return _translateNumber(num).toLowerCase() +
        _clockMinuteToString(minute) +
        _clockPrefixToString(hour);
}

function _clockMinuteToString(minute) {
    switch (minute % 60) {
        case 0: return " en punto";
        case 15: return " y cuarto";
        case 30: return " y media";
        case 45: return " menos cuarto";
        default: return " y " + numberToSpanishString(minute % 61);
    }
}

function _clockPrefixToString(hour) {
    switch (hour) {
        case 1: case 2: case 3: case 4: case 5: return " de la madrugada";
        case 6: case 7: case 8: case 9: case 10: case 11: return " de la mañana";
        case 12: return " de la mediodía";
        case 13: case 14: case 15: case 16: case 17: case 18: case 19: return " de la tarde";
        case 20: case 21: case 22: case 23: case 24: case 0: return " de la noche";
        default: return "Error";
    }
}

function _translateNumber(num) {
    switch (num) {
        case 0: return "Cero";
        case 1: case 13: return "Una";
        case 2: case 14: return "Dos";
        case 3: case 15: return "Tres";
        case 4: case 16: return "Cuatro";
        case 5: case 17: return "Cinco";
        case 6: case 18: return "Seis";
        case 7: case 19: return "Siete";
        case 8: case 20: return "Ocho";
        case 9: case 21: return "Nueve";
        case 10: case 22: return "Diez";
        case 11: case 23: return "Once";
        case 12: case 24: return "Doce";
        default: return "ERR [" + num + "] ";
    }
}
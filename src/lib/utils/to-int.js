import absFloor from './abs-floor';

export default function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    // return undefined ints (eg. values not entered) as null to allow defaults later on
    if (argumentForCoercion === undefined || argumentForCoercion === null) {
        return null;
    }

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

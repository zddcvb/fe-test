export function validateFeild(target: string, msg: string) {
    if (target == '' || target == null) {
        msg = "current input can not be empty"
        return false;
    }
    msg = "";
    return true;
}
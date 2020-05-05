function deepNullCheck(data) {
    let flag = null;
    if ((data !== null || data !== undefined) && Object.keys(data).length > 0) {
        for (const key in data) {
            if (typeof data[key] !== 'object') {
                if (data.hasOwnProperty(key)) {
                    flag = nullCheck(data[key]);
                }
            } else {
                if (data[key] === null || data[key] === undefined || deepNullCheck(data[key])) {
                    flag = true;
                    break;
                } else {
                    flag = false;
                }
            }
        }
    } else {
        return true;
    }
    if (flag != null) return flag;
}

function nullCheck(data) {
    return data === null || data === undefined;
}

module.exports.deepNullCheck = deepNullCheck;

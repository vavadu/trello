export function normalizeDate(date) {
    date = new Date(date);

    date = date.toDateString();

    date = date.split(' ')
    date.shift();

    date[0] += "'";
    date[1] += ",";

    return date.join('');
}


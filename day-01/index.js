import userData from "./data.js";

function getFullName(name = { first: '', last: '' }) {
    const { first, last } = name;

    return `${first} ${last}`;
}

function getBirthdayFormated(birthday) {
    const date = new Date(birthday);
    const birthdayFormated = date.toDateString();

    return birthdayFormated;
}

function getNewDataFormat(data) {
    const { dob: { date } } = data;
    const { name } = data;

    const newDataFormat = {
        fullName: getFullName(name),
        birthday: getBirthdayFormated(date)
    }

    return newDataFormat;
}

function transformData(data) {
    const dataTransformed = data.length && data.map(getNewDataFormat);

    return dataTransformed;
}

console.log(transformData(userData));

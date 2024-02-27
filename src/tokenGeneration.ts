import md5 from 'md5';

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const day = date.getDate().toString().padStart(2, '0');

const password = "Valantis";
const currentDate =`${year}${month}${day}`;

export const hash = md5(`${password}_${currentDate}`);




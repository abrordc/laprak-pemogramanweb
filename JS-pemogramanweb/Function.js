//FUNCTION EXPRESION
function hallo(nama) {
    return `hallo, ${nama}`;
}
console.log(hallo("abror"));

//ARROW FUNCTION
const Hallo = nama => {
    return `hallo, ${nama}`;
};
console.log(Hallo("anjai"));

/* ARROW Function versi lebih singkat jika memiliki satu parameter, dan tanpa menggunakan return
 */
const Hai = nama => `hai , ${nama}`;

console.log(Hai("holil"));

//contoh 2 parameter
const game = (nama, waktu) => {
    return `selamat ${waktu}, ${nama}`;
};
console.log(game("moh", "malam"));

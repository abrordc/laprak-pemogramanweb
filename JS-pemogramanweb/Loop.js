for (let i = 0; i < 6; i++) {
    console.log(i);
}

const data = ["kamu", "dia", "bersama", "tetap"];

data.forEach((value, index, array) => {
    console.log(value); //nilai dari data array
    console.log(index); // nilai indexnya
    console.log(array); // nilai array nya
});

let i = 0;
while (true) {
    // terus di ulang sampai nilainya false
    console.log(i + 1);
    if (i >= 10) {
        //perkondisia  agar perulangan di break atau false
        break;
    }
}

// break menghentikan statementeksekusi dan melanjutkan ke pernyataan pertama setelah perulangan.
// continue menghentikan statementeksekusi dan melanjutkan ke iterasi loop berikutnya.

// array loop
for (let i of data) {
    console.log(i);
}

const datas = { name: "abrordc", semester: 4 };
// untuk me looping data object 
// property di isi oleh data key  dan untuk menampilkan kita tinggal menggunakan datas[property]
for (let property in datas) {
  // 
    console.log(`${property} : ${datas[property]}`);
}

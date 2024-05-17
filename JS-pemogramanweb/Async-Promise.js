function name() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (false) {
                resolve("berhasil");
            } else {
                reject("gagal");
            }
        }, 1000);
    });
}


// untuk menghandle nilai dari data promise
async function run() {
    let data = await name()
        .then(result => {
            return result;
        })
        .catch(reject => {
            return reject;
        });

    console.log(data);
}
run();

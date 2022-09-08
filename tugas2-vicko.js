const getMonth = (callback) =>{
    setTimeout(() => {
        let error = true
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

        if (!error){
            callback(null, month)
        }else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);
}

const hasil = (err,bulan) =>{
    if (err){
        console.log(err.message);
    }else{
        bulan.map((item) => console.log(item));
    }
}
getMonth(hasil);
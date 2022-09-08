//3a
const penyanyi = (kegiatan) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const janji = kegiatan;
        if (janji === "bernyanyi") {
          resolve("Penonton senang");
        } else {
          reject("Penonton tidak senang karena penyanyi" + " "+ janji);
        }
      }, 2000);
    });
  };
  
  penyanyi("bernyanyi")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

//=======================================================
    //no 3b 
    const cekUmur = (umur) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const x = umur;
          if (x >= 10) {
            resolve("Umur lebih dari atau sama dengan 10");
          }else{
            reject("Umur kurang dari 10");
          }        
          },3000)
        });
    };
    
    cekUmur(20)
        .then((res) => {
          console.log(`Terpenuhi karena ${res}`);
        })
        .catch((err) => {
          console.log(`Tidak terpenuhi karena ${err}`);
        });
        
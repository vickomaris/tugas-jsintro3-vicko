// then - catch
const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek) 
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}
cekHariKerja("senin")
.then((res) => {
    console.log(res);
})
.catch((err) =>{
    console.log(err.message);
})

//=============================================================
//try catch
// const cekHariKerja = (day) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
//             let cek = dataDay.find((item)=>{
//                 return item === day
//             })
//             if(cek){
//                 resolve(cek)
//             }else{
//                 reject(new Error('Hari ini bukan hari kerja'))
//             }
//         }, 3000)
//     })
// }
// // cekHariKerja("senin")
// // .try((res) => {
// //     console.log(res);
// // })
// // .catch((err) =>{
// //     console.log(err.message);
// // })

// const HariKerja = async (day) => {  
//     try { 
//         const response = await cekHariKerja(day)
//         console.log(response); 
//     } catch (error) { 
//         console.log(error.message); 
//     }
// };
// HariKerja("senin");
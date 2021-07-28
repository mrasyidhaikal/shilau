import firebase, { users } from './firebase';

/**
 * @param {Number} uid
 */
export const getUsulan = async (uid) => {
    const Pribadi = users.doc(uid).collection('pribadi');
    const Perusahaan = users.doc(uid).collection('perusahaan');
    try {
        let resultGetUsulanPribadi = [];
        let dataPribadi = await Pribadi.get();
        dataPribadi.forEach(val => {
            let res = val.data();
            res.id = val.id;
            resultGetUsulanPribadi.push(res)
        })
        

        let resultGetUSulanPerusahaan = [];
        let dataPerusahaan = await Perusahaan.get();
        dataPerusahaan.forEach(val => {
            let res = val.data();
            res.id = val.id;
            resultGetUSulanPerusahaan.push(res);
        })
        return resultGetUsulanPribadi.concat(resultGetUSulanPerusahaan);
    } catch (error) {
        throw error;
    }
    

    // return PribadiRef;
}
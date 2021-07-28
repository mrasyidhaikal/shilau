export const checkEmailFormat = (email) => {
  if (email.length == 0) {
    throw new Error('Email Tidak Boleh Kosong')
  }

  if (!/^[\w\.\-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    throw new Error('Format Email Salah')
  }
  return
}

export const checkLengthNoPhone = (phoneNumber) => {
  if (phoneNumber <= 6) {
    throw new Error('Nomor Handphone Terlalu Pendek')
  }

  const regex = /[0-9+\/ ]/gi
  if (!regex.test(phoneNumber)) {
    throw new Error('No Hp Berisi Angka saja')
  }
  return
}

export const checkTipeKlustur = (kluster) => {
  if (kluster.length == 0) {
    throw new Error('Silahkan Pilih Tipe Kluster Proyek')
  }
  return
}

export const checkLengthDesk = (deksripsi) => {
  if (deksripsi.length < 30) {
    throw new Error('Isi Deskripsi Minimal 30 Karakter')
  }
  return
}

export const checkUrlWebsite = (url) => {
  const regex =
    '/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/'

  if (url.length !== 0) {
    if (!regex.test(url)) {
      throw new Error('Format URL Website Salah')
    }
  }
  return
}
/**
 *
 * @param {*} s
 * @returns {String}
 */
export const timeConversion = (s) => {
  let aa = s.replace(/[^A-Z]/g, '')
  let hours = parseInt(s.split(':')[0])
  let minute = parseInt(s.split(':')[1])

  if (aa === 'PM') {
    if (hours !== 12) {
      hours += 12
    }
  } else if (aa === 'AM' && hours >= 12) {
    hours -= 12
  }
  let time = s.split(':')
  if (hours < 10) {
    time[0] = `0${hours}`
  } else {
    time[0] = hours
  }
  time[2] = time[2].replace(/[A-Z]/g, '')
  return time.join(':')
  // console.log(hours)
}

/**
 *
 * @param {string}} status
 * @returns
 */
export const HandleTextStatus = (status) => {
  if (status === 0) {
    return 'Belum Checkout'
  }
  if (status === 1) {
    return 'Lihat Tracking'
  }
  if (status === 2) {
    return 'Selesai'
  }
}

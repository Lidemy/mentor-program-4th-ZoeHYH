const axios = require('axios');

const clientId = '60d001ddde24940';
const albumDeletehash = '8ltPC9MScGpHIFY';

const imgur = {
  uploadImg: async (image, title) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: 'https://api.imgur.com/3/image',
        headers: {
          Authorization: `Client-ID ${clientId}`,
        },
        data: { image, album: albumDeletehash, title },
      });
      return data.data;
    } catch (err) {
      if (err.response) {
        console.log(`*${err.response.data.data.error}`);
      } else {
        console.log(`*${err}`);
      }
      throw new Error('未成功上傳圖片');
    }
  },
  deleteImg: async (imageDeleteHash) => {
    try {
      await axios({
        method: 'delete',
        url: `https://api.imgur.com/3/image/${imageDeleteHash}`,
        headers: {
          Authorization: `Client-ID ${clientId}`,
        },
      });
    } catch (err) {
      if (err.response) {
        console.log(`*${err.response.data.data.error}`);
      } else {
        console.log(`*${err}`);
      }
      throw new Error('未成功刪除舊圖片');
    }
  },
};

module.exports = imgur;

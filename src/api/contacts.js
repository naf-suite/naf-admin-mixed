import axios from 'axios';

export default {
  async create({ appid, appname }) {
    const res = await axios.post('/itembank/admin/apps/create', { appid, appname });
    return res.data;
  },

  async list() {
    const res = await axios.get('/itembank/admin/apps/list');
    return res.data;
  },
};


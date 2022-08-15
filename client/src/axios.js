export default {
  async get(commit, uri) {
    try {
      const response = await axios.get(uri);
      return response.data;
    }
    catch (err) {
      console.warn(err);
      commit('displayInfo', { text: err.response.data, type: 'error' });
    }
  },
  async post(commit, uri, data) {
    try {
      const response = await axios.post(uri, data);
      return response.data;
    }
    catch (err) {
      console.warn(err);
      commit('displayInfo', { text: err.response.data, type: 'error' });
    }
  },
}
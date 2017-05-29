import Axios from 'axios';

export default class NotesGetter {
  constructor(url) {
    this.url = url;
  }

  getData(suffixUrl) {
    return Axios.get(`${this.url}${suffixUrl}`)
      .then(response => response.data)
      .catch((error) => {
        console.error(`Error getting the data from the server\nDetails: ${error}`);
        return [];
      });
  }

  getNotes() {
    return this.getData('notes');
  }

  getFolders() {
    return this.getData('folders');
  }
}

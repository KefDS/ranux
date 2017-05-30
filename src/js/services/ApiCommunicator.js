import Axios from 'axios';

export default class ApiCommunicator {
  constructor(url) {
    this.url = url;
    this.newNote = this.newNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  getData(suffixUrl) {
    return Axios.get(`${this.url}${suffixUrl}`).then(response => response.data);
  }

  getNotes() {
    return this.getData('/notes');
  }

  getFolders() {
    return this.getData('/folders');
  }

  getTags() {
    // TODO
    return 0;
  }

  newNote(note) {
    return Axios.post(`${this.url}/notes`, note).then(
      response => response.data,
    );
  }

  updateNote(updatedNote) {
    return Axios.put(`${this.url}/note/${updatedNote.id}`, updatedNote);
  }

  deleteNote(id) {
    console.log(id);
    return Axios.delete(`${this.url}/note/${id}`, { id });
  }

  saveTag() {
    // TODO
  }

  saveFolder() {
    // TODO
  }

  deleteFolder(id) {
    // TODO
  }

  deleteTag(id) {
    // TODO
  }
}

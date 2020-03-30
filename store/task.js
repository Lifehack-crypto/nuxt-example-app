import { firestoreAction } from 'vuexfire'
import firebase from '../plugins/firebase'

const db = firebase.firestore();
const collection = db.collection('tasks'); 

export const state = () => ({
  dialog: false,
  calendar: false,
  title: "",
  ditail: "",
  date: new Date().toISOString().substr(0, 10)
});

export const mutations = {
  toggleDialog: (state) => {
    state.dialog = !state.dialog;
  },
  toggleCalendar: (state) => {
    state.calendar = !state.calendar;
  },
  setTitle: (state, value) => {
    state.title = value;
  },
  setDitail: (state, value) => {
    state.ditail = value;
  },
  setDate: (state, value) => {
    state.date = value;
  },
  initializeState: (state) => {
    state.dialog = !state.dialog;
    state.title = "";
    state.ditail = "";
    state.date = new Date().toISOString().substr(0, 10);
  }
}

export const actions = {
  // 追加
  add: firestoreAction(async (context, { title, ditail, date }) => {
    if (!title) {
      return;
    }
    await collection.add({
      title,
      ditail,
      date,
      status: false
    });
  }),
}
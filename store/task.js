import { vuexfireMutations } from 'vuexfire'

export const state = () => ({
  dialog: false,
  calendar: false,
  title: "",
  ditail: "",
  date: new Date().toISOString().substr(0, 10),
});

export const mutations = {
  ...vuexfireMutations,
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
  taskCancel: (state) => {
    state.dialog = !state.dialog;
    state.title = "";
    state.ditail = "";
    state.date = new Date().toISOString().substr(0, 10);
  }
}
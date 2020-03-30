import { firestoreAction } from 'vuexfire'
import firebase from '../plugins/firebase'

const db = firebase.firestore();
const collection = db.collection('tasks'); 

export const state = () => {
  tasks: []
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    // firestoreとvueのstateをデータバインディング
    return bindFirestoreRef('tasks', collection);
  }),
  // taskの削除
  remove: firestoreAction(async (context, id) => {
    await collection.doc(id).delete()
  }),
  // task完了、未完了の切替え
  toggleTaskStatus: firestoreAction((context, task) => {
    collection.doc(task.id).update({
      status: !task.status
    })
  })
}

export const getters = {
  orderdTodos: (state) => {
    return state.tasks
  }
}
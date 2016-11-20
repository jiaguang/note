/**
 * Created by jiaguang on 16/11/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  notes: [],
  activeNote: {}
}

const mutations = {
  ADD_NOTE (state){
    const newNote = {
      txt: 'new title',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  }, DEL_NOTE (state){
    //state.notes.$remove(state.activeNote)
    var index = state.notes.indexOf(state.activeNote)
    if (index !== -1) {
      state.notes.splice(index, 1)
    }

    state.activeNote = state.notes[0]
  },
  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note
  },
  EDIT_NOTE(state, e) {
    state.activeNote.txt = e.target.value
  }
}

const actions = {
  addNote ({commit, state}) {
    commit('ADD_NOTE')
  },
  setActiveNote ({commit, state}, note) {
    commit('SET_ACTIVE_NOTE', note)
  },
  delNote ({commit, state}) {
    commit('DEL_NOTE')
  },
  editNote ({commit, state}, txt) {
    console.info(txt)
    commit('EDIT_NOTE', txt)
  },
};

const getters = {
  getNoteList (state) {
    return state.notes;
  },
  getActiveNote (state) {
    return state.activeNote;
  },
  getActiveNoteTxt (state) {
    return state.activeNote.txt;
  }
};


export default new Vuex.Store({
  state, mutations, actions, getters
})
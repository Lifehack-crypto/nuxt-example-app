<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn fab dark="" color="primary" v-on="on">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">新規タスクを追加</v-card-title>
      <v-card-text>
        <v-text-field v-model="title" label="タイトル"></v-text-field>
        <v-text-field v-model="ditail" label="詳細"></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="calendar">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="date" label="日時" v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="date"></v-date-picker>
        </v-dialog>
      </v-card-text>
      <v-card-actions class="d-flex flex-row-reverse">
        <v-btn color="primary" text @click="taskCancel">キャンセル</v-btn>
        <v-btn color="primary" text @click="toggleDialog">登録</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    dialog: {
      get() {
        return this.$store.state.task.dialog
      },
      set() {
        this.$store.commit('task/toggleDialog')
      }
    },
    calendar: {
      get() {
        return this.$store.state.task.calendar
      },
      set() {
        this.$store.commit('task/toggleCalendar')
      }
    },
    title: {
      get() {
        return this.$store.state.task.title
      },
      set(value) {
        this.$store.commit('task/setTitle', value)
      }
    },
    ditail: {
      get() {
        return this.$store.state.task.ditail
      },
      set(value) {
        this.$store.commit('task/setDitail', value)
      }
    },
    date: {
      get() {
        return this.$store.state.task.date
      },
      set(value) {
        this.$store.commit('task/setDate', value)
        this.$store.commit('task/toggleCalendar')
      }
    }
  },
  methods: {
    toggleDialog() {
      this.$store.commit('task/toggleDialog')
    },
    taskCancel() {
      this.$store.commit('task/taskCancel')
    }
  }
}
</script>

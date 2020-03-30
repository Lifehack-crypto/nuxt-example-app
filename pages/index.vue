<template>
  <v-layout class="block">
    <v-form class="my-3">
      <Task />
    </v-form>
    <div>
      <TaskList title="Todo" :taskList="todoList"></TaskList>
    </div>
    <div>
      <TaskList title="Done" :taskList="doneList"></TaskList>
    </div>
  </v-layout>
</template>

<script>
import Task from '../components/Task'
import TaskList from '../components/TaskList'

export default {
  components: {
    Task,
    TaskList
  },
  created: function() {
    this.$store.dispatch('task-list/init')
  },
  computed: {
    todoList() {
      return this.$store.getters['task-list/orderdTodos'].filter(task => {
        return !task.status
      })
    },
    doneList() {
      return this.$store.getters['task-list/orderdTodos'].filter(task => {
        return task.status
      })
    }
  }
}
</script>

<style scoped>
.block {
  display: block;
}
</style>

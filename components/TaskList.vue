<template>
  <v-container class="my-4 back-color">
    <v-subheader class="font-weight-bold">{{ title }}</v-subheader>
    <v-col class="py-0">
      <v-list v-for="task in taskList" :key="task.id" class="py-0 mt-0 mb-4">
        <v-card>
          <v-card-title class="py-0">
            <v-checkbox
              color="primary"
              :checked="task.status"
              :label="task.title"
              @change="toggleTaskStatus(task)"
            ></v-checkbox>
          </v-card-title>
          <v-card-text class="py-0">{{ task.ditail }}</v-card-text>
          <v-card-actions>
            <v-col cols="9">
              {{ task.date }}
            </v-col>
            <v-col cols="3">
              <v-btn icon color="black" @click="remove(task.id)">
                <v-icon>mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-list>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    taskList: {
      type: Array,
      default: []
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('task-list/remove', id)
    },
    toggleTaskStatus(task) {
      this.$store.dispatch('task-list/toggleTaskStatus', task)
    }
  }
}
</script>

<style scoped>
.back-color {
  background: rgb(219, 230, 227);
}
</style>

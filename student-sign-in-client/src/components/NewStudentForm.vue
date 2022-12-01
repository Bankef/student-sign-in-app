<template>
<div>

  <div class="alert alert-danger" v-if="errors.length > 0">
    <li v-for="error in errors">{{ error }}</li>
  </div>

  <div class="card add-student m-2 p-2">
    <h4 class="card-title">Add new student</h4>

    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" class="form-control" v-model.trim="newStudentName">
    </div>
    <div class="form-group">
      <label for="starID">Star ID</label>
      <input id="starID" class="form-control" v-model.trim="newStarID"><br>

    </div>
    <button class="btn btn-primary" v-on:click="addStudent">Add</button>
  </div>


</div>
</template>

<script>
export default {
  // create component here
  name: "NewStudentForm",
  emits: ['student-added'], // document events that component emits
  data() {
    return {
      newStudentName: '',
      newStarID: '',
      errors: []
    }
  },
  methods: {
    addStudent() {

      this.errors = [] //clears errors array

      // All form validation are here
      if (!this.newStudentName){
        this.errors.push('Student name must be entered')
      }

      if (!this.newStarID){
        this.errors.push('StarID must be entered')
      }

      // if there are no errors.
      if (this.errors.length === 0) {
        let student = {name: this.newStudentName, starID: this.newStarID, present: false}

          //emit message to parent with new student
        this.$emit('student-added', student)

        this.newStudentName = '' //clears the form after user's input
        this.newStarID = ''
      }


    }
  }
}
</script>

<style scoped>

</style>
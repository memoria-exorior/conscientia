<template>
    <div class='ui centered card'>
        <!-- Display -->
        <div class='content' v-show="!isEditing">
            <div class='header'>
            {{ fact.question }}
            </div>
            <div class='meta'>
            {{ fact.answer }}
            </div>
            <div class='meta'>
            {{ fact.labels }}
            </div>
            <div class='extra content'>
                <span class='right floated edit icon' v-on:click="showForm">
                    <i class='edit icon'></i>
                </span>
                <span class='right floated trash icon' v-on:click="deleteFact(fact)">
                    <i class='trash icon'></i>
                </span>
            </div>
        </div>
        <!-- Edit -->
        <div class="content" v-show="isEditing">
            <div class='ui form'>
                <div class='field'>
                    <label>Question</label>
                    <input type='text' v-model="fact.question" >
                </div>
                <div class='field'>
                    <label>Answer</label>
                    <input type='text' v-model="fact.answer" >
                </div>
                <div class='field'>
                    <label>Labels</label>
                    <input type='text' v-model="fact.labels" >
                </div>
                <div class='ui two button attached buttons'>
                <button class='ui basic blue button' v-on:click="hideForm(fact)">
                    Close X
                </button>
                </div>
            </div>
        </div>
        <!-- Buttons -->
        <div class='ui bottom attached green basic button' v-show="!isEditing && fact.done" disabled>
            Done
        </div>
        <div class='ui bottom attached red basic button' v-on:click='learntFact(fact)' v-show="!isEditing && !fact.done">
            Learnt?
        </div>
    </div>
</template>

<script type = "text/javascript" >
import swal from 'sweetalert2'

import {factClient} from '@/components/fact-client'

export default {
  name: 'Fact',
  props: ['fact'],
  data () {
    return {
      isEditing: false,
      errors: []
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm (fact) {
      this.isEditing = false
      delete fact['done']
      fact.labels = [fact.labels]
      fact.owner = 'temple'
      factClient.put('facts/' + fact.uuid, fact)
      .then(response => {
        this.$emit('update-fact', fact)
      })
      .catch(e => {
        console.log('update fact error: ' + JSON.stringify(e))
        this.errors.push(e)
      })
    },
    deleteFact (fact) {
      swal({
        title: 'Are you sure?',
        text: 'This fact will be permanently deleted!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        confirmButtonColor: '#DD6B55',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          factClient.delete('facts/' + fact.uuid)
            .then(response => {
              swal({
                type: 'success',
                title: 'Deleted!',
                text: 'Your fact has been deleted.',
                showConfirmButton: false,
                timer: 1000
              })
            })
            .catch(e => {
              console.log('delete fact error: ' + JSON.stringify(e))
            })
        }
      })
      this.$emit('delete-fact', fact)
    },
    learntFact (fact) {
      this.$emit('learnt-fact', fact)
    }
  }
}
</script>

<style>
</style>
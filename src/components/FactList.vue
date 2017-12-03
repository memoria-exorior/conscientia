<template>
    <div>
        <p class="facts">Learnt Facts  : {{facts.filter(fact => {return fact.done === true}).length}}</p>
        <p class="facts">Learning Facts: {{facts.filter(fact => {return fact.done === false}).length}}</p>
        <fact v-on:delete-fact="deleteFact"  
              v-on:learnt-fact="learntFact" 
              v-for="fact in facts" v-bind:fact="fact" v-bind:key='fact.id'>
        </fact>
        <fact-creator v-on:add-fact="addFact"></fact-creator>
    </div>
</template>

<script type = "text/javascript" >
import swal from 'sweetalert2'

import FactCreator from '@/components/FactCreator'
import Fact from '@/components/Fact'

export default {
  name: 'FactList',
  components: {
    'fact': Fact,
    'fact-creator': FactCreator
  },
  methods: {
    addFact (fact) {
      this.facts.push(fact)
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
          const factIdx = this.facts.indexOf(fact)
          this.facts.splice(factIdx, 1)
          // swal('Deleted!', 'Your fact has been deleted.', 'success')
          swal({
            type: 'success',
            title: 'Deleted!',
            text: 'Your fact has been deleted.',
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
    },
    learntFact (fact) {
      const factIdx = this.facts.indexOf(fact)
      this.facts[factIdx].done = true
      swal({
        type: 'success',
        text: 'Fact Learnt!',
        showConfirmButton: false,
        timer: 1000
      })
    }
  },
  data () {
    return {
      facts: [
        {
          id: uuid(),
          title: 'Fact A',
          question: 'Question A',
          answer: 'Answer A',
          done: false
        },
        {
          id: uuid(),
          title: 'Fact B',
          question: 'Question B',
          answer: 'Answer B',
          done: false
        },
        {
          id: uuid(),
          title: 'Fact C',
          question: 'Question C',
          answer: 'Answer C',
          done: false
        }
      ]
    }
  }
}
function uuid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
</script>

<style scoped>
p.facts {
  text-align: center;
}
</style>
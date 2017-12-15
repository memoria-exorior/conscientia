<template>
    <div>
        <p class="facts">Learnt Facts  : {{facts.filter(fact => {return fact.done === true}).length}}</p>
        <p class="facts">Learning Facts: {{facts.filter(fact => {return fact.done === false}).length}}</p>
        <fact v-on:delete-fact="deleteFact"  
              v-on:learnt-fact="learntFact"
              v-on:edit-fact="editFact" 
              v-for="fact in facts" v-bind:fact="fact" v-bind:key='fact.uuid'>
        </fact>
        <fact-creator v-on:add-fact="addFact"></fact-creator>
    </div>
</template>

<script type = "text/javascript" >
import axios from 'axios'
import swal from 'sweetalert2'

import FactCreator from '@/components/FactCreator'
import Fact from '@/components/Fact'

export default {
  name: 'FactList',
  components: {
    'fact': Fact,
    'fact-creator': FactCreator
  },
  created () {
    this.listFact()
  },
  methods: {
    listFact () {
      axios.get('http://localhost:8888/api/fact/facts/')
      .then(response => {
        this.facts = response.data.items
      }).catch(e => {
        this.errors.push(e)
      })
    },
    addFact (fact) {
      delete fact['done']
      fact.labels = [fact.labels]
      fact.owner = 'temple'
      axios.post('http://localhost:8888/api/fact/facts/', fact)
      .then(response => {
        console.log('trjl> added fact response: ' + JSON.stringify(response))
        // this.facts.push(fact)
        this.facts.push(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    deleteFact (fact) {
      console.log('trjl> delete fact: ' + JSON.stringify(fact))
      const factIdx = this.facts.indexOf(fact)
      this.facts.splice(factIdx, 1)
    },
    editFact (fact) {
      console.log('trjl> editFact: ' + fact)
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
          uuid: uuid(),
          question: 'Question A',
          answer: 'Answer A',
          labels: ['fact-a'],
          done: false
        },
        {
          uuid: uuid(),
          question: 'Question B',
          answer: 'Answer B',
          labels: ['fact-b'],
          done: false
        },
        {
          uuid: uuid(),
          question: 'Question C',
          answer: 'Answer C',
          labels: ['fact-b'],
          done: false
        }
      ],
      errors: []
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
<template>
    <div class='ui centered card'>
        <div class='content'>
            <div class='header'>
            {{ fact.title }}
            </div>
            <div class='meta'>
            {{ fact.question }}
            </div>
            <div class='meta'>
            {{ fact.answer }}
            </div>
            <div class='extra content'>
                <span class='right floated edit icon'>
                    <i class='edit icon'></i>
                </span>
            </div>
        </div>
        <div class='ui bottom attached green basic button' v-show="fact.done">
            Done
        </div>
        <div class='ui bottom attached red basic button' v-show="!fact.done">
            Learn
        </div>
    </div>
</template>

<script type = "text/javascript" >
export default {
  name: 'Fact',
  props: ['fact']
}
</script>

<style>
</style>
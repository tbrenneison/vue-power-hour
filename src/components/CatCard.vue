<template>
 
 <div class="catContainer">
 <div v-for="cat in cats" class="catCard">
    <h2>{{ cat.name }}</h2>
    <img :src="cat.picPath"/>
    <p>Age: {{ cat.age }}</p>
    <p>Personality: {{ cat.personality }}</p>
    <br>
    <p>About {{ cat.name }}: </p>
    <ul>
        <li v-for="fact in cat.facts">{{ fact }}</li>
    </ul>
 </div>
</div>
</template>
 
<script setup>
import {reactive} from 'vue'

const cats = reactive([
    {
        id: 1, 
        name: 'Zenith', 
        age: 5, 
        personality: 'Crime & Punishment', 
        picPath: new URL('@/assets/cat_pics/zenith_sink.jpeg', import.meta.url).href,
        facts: [
            'Went to cat law school and passed the cat bar in the state of Ohio', 
            "Mostly deaf, poor depth perception, clumsy as heck",
            'Will not take no for an answer',
            'May be involved in a crime syndicate'
        ]
    },
    {
        id: 2, 
        name: 'Philco', 
        age: 5, 
        personality: 'sCrEm aNd lIcK sTuFf', 
        picPath: new URL('@/assets/cat_pics/phil_weggies.jpeg', import.meta.url).href,
        facts: [
            "Has never had a single thought in his entire life & wouldn't know what to do with one if he did",
            "Has 'cat OCD' and compulsively licks people & other animals",
            'A tall boi',
            "Screams when he doesn't understand the situation (often)"        ]
    },
    {
        id: 3, 
        name: 'Emerson', 
        age: 3, 
        personality: 'Pretty Pretty Princess', 
        picPath: new URL('@/assets/cat_pics/emmy_no_bones.jpeg', import.meta.url).href,
        facts: [
            'Can turn all of her bones off', 
            "Uses Phil's OCD to get attention", 
            'Kind of a potty-mouth',
            'Absolutely will not share the top platform of the cat tree'
        ]
    }
])
 
</script>
 
<style scoped>
 
 img { 
    width: 75%; 
 }

 li { 
    list-style-type: none;
    margin: 10px 0; 
 }

 .catContainer { 
    display: flex;
    justify-content: center;
    align-items: stretch;
    border: 1px solid black;
 }

 .catCard { 
    background-color: lightgray; 
    margin: 2px; 
    text-align: center;

 }
</style>
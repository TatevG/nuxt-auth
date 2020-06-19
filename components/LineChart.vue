<template>
    <div class="nuxt-component-charts-random">
        <LineChart :chart-data="datacollection"></LineChart>

        <button @click="randomizeData()">Change Data</button>
    </div>
</template>

<script>
import LineChart from './charts/Line';

export default {
    name: 'nuxt-component-line-chart',

    components: {
        LineChart,
    },

    data () {
        return {
            datacollection: null,
        }
    },

    mounted () {
        this.randomizeData();
    },

    methods: {
        randomizeData () {
            this.datacollection = {
                labels: [ 'Started', 'Ended' ],

                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#F44336',
                        data: [this.getRandomInt(), this.getRandomInt()]
                    },
                    {
                        label: 'Data Two',
                        backgroundColor: '#2196F3',
                        data: [this.getRandomInt(), this.getRandomInt()]
                    },
                    {
                        label: 'Data Three',
                        backgroundColor: '#FFCA22',
                        data: [this.getRandomInt(), this.getRandomInt()]
                    }
                ],
            }
        },

        getRandomInt () {
            return Math.floor(Math.random() * (100 - 10 + 1));
        }
    }
}
</script>

<style lang="scss">
.nuxt-component-charts-random {
    max-width: 600px;
    margin: auto;
}
</style>

<template>
    <div class="nuxt-component-line-chart">
        <LineChart :chart-data="dataCollection"/>

        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="true"
            min-width="290px"
            offset-y
            transition="scale-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    class="nuxt-component-line-chart__button"
                    color="info"
                    v-on="on"
                >
                    <v-icon dark>
                        date_range
                    </v-icon>

                    Generate by Date
                </v-btn>
            </template>

            <v-date-picker
                ref="picker"
                v-model="lineDate"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="randomizeData"
            />
        </v-menu>
    </div>
</template>

<script>
import LineChart from './charts/Line';

export default {
    name: 'NuxtComponentLineChart',

    components: { LineChart },

    data() {
        return {
            labels: [
                'Started',
                'Ended',
            ],

            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#F44336',

                },
                {
                    label: 'Data Two',
                    backgroundColor: '#2196F3',
                },
                {
                    label: 'Data Three',
                    backgroundColor: '#FFCA22',
                },
            ],
        };
    },

    mounted() {
        this.getRandomData(this.labels, this.datasets, 2);
    },

    methods: {
        randomizeData() {
            this.getRandomData(this.labels, this.datasets, 2);
        },
    },
};
</script>

<style lang="scss">
.nuxt-component-line-chart{
    max-width: 600px;
    margin: auto;

    &__button {
        width: 230px;
        justify-content: space-evenly;
    }
}
</style>

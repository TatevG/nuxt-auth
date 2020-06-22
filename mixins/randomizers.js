export default {

    data() {
        return {
            dataCollection: null,
            menu: false,
            lineDate: '',
            barDate: '',
        };
    },

    methods: {
        getRandomInt(length) {
            return [ ...Array(length) ].map(() => Math.floor(Math.random() * (100 - 10 + 1)));
        },

        getRandomData(labels, datasets, dataLength) {
            datasets.map(dataset => {
                dataset.data = this.getRandomInt(dataLength);
            });

            this.dataCollection = {
                labels: labels,

                datasets: datasets,
            };
        },
    },
};

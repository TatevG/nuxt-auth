<script>
import { Line } from 'vue-chartjs';

export default {
    name: 'NuxtComponentAreaChart',

    extends: Line,

    mounted() {
        this.gradient = this.$refs.canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 450);
        this.gradient2 = this.$refs.canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 450);

        this.gradient3 = this.$refs.canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 450);

        this.gradient.addColorStop(0, 'rgba(244, 67, 54, 0.9)');
        this.gradient.addColorStop(0.5, 'rgba(244, 67, 54, 0.25)');
        this.gradient.addColorStop(1, 'rgba(244, 67, 54, 0)');

        this.gradient2.addColorStop(0, 'rgba(33, 150, 243, 0.9)');
        this.gradient2.addColorStop(0.5, 'rgba(33, 150, 243, 0.25)');
        this.gradient2.addColorStop(1, 'rgba(33, 150, 243, 0)');

        this.gradient3.addColorStop(0, 'rgba(255, 219, 0, 0.9)');
        this.gradient3.addColorStop(0.5, 'rgba(255, 219, 0, 0.25)');
        this.gradient3.addColorStop(1, 'rgba(255, 219, 0, 0)');

        this.renderChart(
            {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                ],

                datasets: [
                    {
                        label: 'Data One',
                        borderColor: '#F44336',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: 'white',
                        backgroundColor: this.gradient,
                        data: [
                            40,
                            39,
                            10,
                            40,
                            39,
                            80,
                            40,
                        ],
                    },
                    {
                        label: 'Data Two',
                        borderColor: '#2196F3',
                        pointBackgroundColor: 'white',
                        pointBorderColor: 'white',
                        borderWidth: 1,
                        backgroundColor: this.gradient2,
                        data: [
                            60,
                            55,
                            32,
                            10,
                            2,
                            12,
                            53,
                        ],
                    },
                    {
                        label: 'Data Three',
                        borderColor: '#FFDB00',
                        pointBackgroundColor: 'white',
                        pointBorderColor: 'white',
                        borderWidth: 1,
                        backgroundColor: this.gradient3,
                        data: [
                            50,
                            12,
                            66,
                            40,
                            81,
                            37,
                            53,
                        ],
                    },
                ],
            },
            {
                responsive: true,
                maintainAspectRatio: false,
            },
        );
    },
};
</script>

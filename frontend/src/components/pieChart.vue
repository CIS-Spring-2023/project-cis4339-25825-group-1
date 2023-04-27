<template>
    <div>
      <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center ">Zipcode Distribution Amongst Attendees</h1>
      <GChart
        type="PieChart"
        :options="options"
        :data="data"
      />    
    </div>
  </template>
   
  <script>
  import { GChart } from "vue-google-charts";
  import axios from 'axios';
  export default {
    name: "PieChart",
    components: {
      GChart
    },
    data() {
      return {
      data: [],
      options: {
        width: 1100,
        height: 400,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("/api/clients-by-zipcode");
        const data = response.data;

        // Convert the data to the format expected by the chart library
        const chartData = [["Zip Code", "Individuals per Zip Code"]];
        for (const [zip, count] of Object.entries(data)) {
          chartData.push([zip, count]);
        }

        this.data = chartData;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>


<!-- Hard coded date from sprint 2
   data: [
            ['Zip Code', 'Individuals per Zip Code'],
            ['77004', 15],
            ['77003', 10],
            ['77094', 12],
            ['77394', 16],
            ['77494', 19]
        ]
-->
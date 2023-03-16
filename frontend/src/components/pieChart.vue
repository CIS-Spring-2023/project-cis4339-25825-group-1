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
  export default {
    name: "App",
    components: {
      GChart
    },
    data() {
      return {
        data: [
            ['Zip Code', 'Individuals per Zip Code'],
            ['77004', 15],
            ['77003', 10],
            ['77094', 12],
            ['77394', 16],
            ['77494', 19]
        ],
        options: {
          width: 1100,
          height: 400
        }
      };
    }
  };
  </script>
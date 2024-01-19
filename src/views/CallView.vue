
  
  <script>
  export default {
    data() {
      return {
        callNumber: '',
      };
    },
    mounted() {
      this.callNumber = this.$route.query.number || '';
    },
  };
  </script>
  <template>
    <div>
      <h1>CallView</h1>
      <div class="display-number">{{ callNumber }}</div>
    </div>
  </template>
  
  <style scoped>
  .display-number {
    text-align: center;
    font-size: 24px;
    width: 200px;
    height: 40px;
    margin-bottom: 10px;
    background-color: rgb(255, 255, 255);
    color: black;
  }
  </style>
  
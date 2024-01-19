<script>
  export default {
    props: {
      currentNumber: {
        type: String,
        required: true,
      },
    },
  };
  </script>

  <template>
    <div class="current-number">
      {{ currentNumber }}
    </div>
  </template>
  
  
  <style scoped>
  .current-number {
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  </style>
  
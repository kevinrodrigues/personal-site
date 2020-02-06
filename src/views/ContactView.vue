<template>
  <div>
    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
      <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
    </svg>
    <h2>Contact</h2>
    <p class="highlight">📮 Want to reach out?</p>

    <form
      name="reach-out"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit">
      <input type="hidden" name="form-name" value="ask-question" />
      <input type="text" placeholder="Name"  required>
      <input type="email" placeholder="Enter Email" required>
      <textarea placeholder="Message" required></textarea>
      <button type="submit" class="btn">Send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        reachout: 'Test',
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };

      axios.post(
        '/',
        this.encode({
          'form-name': 'reach-out',
          ...this.form,
        }),
        axiosConfig,
      );
    },
  },
};
</script>

<style scoped lang="scss">
svg {
  left: 0;
  position: absolute;
  top: 0;
}
button {
  margin-top: 20px;
}
input,
textarea {
  background: #1e242c;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 12pt;
  margin-bottom: 3px;
  outline: none;
  padding: 10px 15px;
  width: 100%;
}
</style>

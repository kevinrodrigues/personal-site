<template>
  <div>
    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
      <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
    </svg>
    <h2>Contact</h2>
    <p class="highlight">📮 Want to reach out?</p>

    <form
      name="contactus"
      action="#"
      method="post"
      netlify
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contactus" />
      <div>
        <input type="text" name="name" required/>
      </div>
      <div>
        <input type="email" name="email" required/>
      </div>
      <div>
        <textarea name="message" required></textarea>
      </div>
      <button type="submit" class="btn" value="Send message">Send</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      form: {
        reachOut: 'Test',
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "reach-out": "test",
          ...this.form
        })
      })
      .then(() => {
        console.log('test');
      })
      .catch(() => {
        this.$router.push("404");
      });
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

// initialze vue app instance
const app = new Vue({
  el: "#app",
  data: {
    timeValues: {
      H: "",
      h: "",
      M: "",
      m: "",
      S: "",
      s: ""
    }
  },
  mounted() {
    setInterval(() => {
      this.handleDateValues(new Date(Date.now()));
    }, 500);
  },
  methods: {
    handleDateValues(dateObj) {
      let time = dateObj
        .toTimeString()
        .split(" ")[0]
        .split(":");
      this.timeValues.H = time[0][0];
      this.timeValues.h = time[0][1];
      this.timeValues.M = time[1][0];
      this.timeValues.m = time[1][1];
      this.timeValues.S = time[2][0];
      this.timeValues.s = time[2][1];
    },
    parseBits(value) {
      return ("0000" + parseInt(value).toString(2)).slice(-4);
    }
  },
  computed: {
    bitsValues() {
      return {
        H: this.parseBits(this.timeValues.H),
        h: this.parseBits(this.timeValues.h),
        M: this.parseBits(this.timeValues.M),
        m: this.parseBits(this.timeValues.m),
        S: this.parseBits(this.timeValues.S),
        s: this.parseBits(this.timeValues.s),
      };
    }
  }
});

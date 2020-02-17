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
    }
  },
  computed: {
    bitsValues() {
      return {
        H: ("0000" + parseInt(this.timeValues.H).toString(2)).slice(-4),
        h: ("0000" + parseInt(this.timeValues.h).toString(2)).slice(-4),
        M: ("0000" + parseInt(this.timeValues.M).toString(2)).slice(-4),
        m: ("0000" + parseInt(this.timeValues.m).toString(2)).slice(-4),
        S: ("0000" + parseInt(this.timeValues.S).toString(2)).slice(-4),
        s: ("0000" + parseInt(this.timeValues.s).toString(2)).slice(-4)
      };
    }
  }
});

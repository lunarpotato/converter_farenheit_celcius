const app = Vue.createApp({
    data (){
        return {
            celciusInput:0,
            fahrenheitInput:0,
            celsiusResult: 0,
            fahrenheitResult:0
        };
    },

    methods: {
        convertToFahrenheit(){
            this.fahrenheitResult= this.celciusInput *1.8 +32;
        },

        convertToCelsius(){
            this.celciusResult= (this.fahrenheitInput -32) /1.8;
        },
    },

});

app.mount ('#events')
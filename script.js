const app = Vue.createApp({
    data (){
        return {
            celsiusInput:'',
            fahrenheitInput:'',
            celsiusResult:0,
            fahrenheitResult:0,
            
        };
    },

    methods: {
        convertToFahrenheit(){
            const resultParagraph = document.getElementById('resultParagraph');
            if (!isNaN(parseFloat(this.celsiusInput)) && isFinite(this.celsiusInput)) {
                this.fahrenheitResult= this.celsiusInput *1.8 +32;
                resultParagraph.textContent = this.fahrenheitResult + '°F';}
            else {
                alert("Please insert a Number!")  
            }
        },

        convertToCelsius(){
            const resultParagraphB = document.getElementById('resultParagraphB');
            if (!isNaN(parseFloat(this.fahrenheitInput)) && isFinite(this.fahrenheitInput)) {
                this.celsiusResult= (this.fahrenheitInput -32) /1.8;
                resultParagraphB.textContent = this.celsiusResult + '°C';}
            else {
                resultParagraphB.textContent = "Please insert a Number!" ;
            }
            
        },
    },
    

});

app.mount ('#events')
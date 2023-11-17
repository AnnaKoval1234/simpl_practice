var Clock = require('./clock.js');

class ExtendedClock extends Clock {
    constructor({template}, precision) {
        super( {template} );
        this.precision = precision;
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let ms = date.getMilliseconds();
        if (ms < 10) ms = '00' + ms;

        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs) + "." + ms;

        console.log(output);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
    stop() {
        super.stop();
    }

}

let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 10000
  });

  lowResolutionClock.start();
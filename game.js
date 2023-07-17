AFRAME.registerComponent('game', {
    schema: {
        gameState: {type: 'string', default: 'play'}
    },

    init: function(){
        var duration = 3000;
        var timer1 = document.querySelector('#timer');

        this.startTimer(duration, timer1);
    },

    startTimer: function(duration, timer1){
        var minutes, seconds;

        setInterval(() => {
            if(duration >= 0){
                this.data.gameState = 'play';
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);

                if(minutes < 10){
                    minutes = '0' + minutes;
                }
                if(seconds < 10){
                    seconds = '0' + seconds;
                }

                timer1.setAttribute('text', {value:minutes + ':' + seconds});
                duration -= 1;
            }
            else{
                this.data.gameState = 'over';
                var cam1 = document.querySelector('#camera1');
                cam1.setAttribute('velocity', {x:0, y:0, z:0})

                var over = document.querySelector('#over');
                over.setAttribute('visible', true)

                var carSpeed = document.querySelector('#speed')
                carSpeed.setAttribute('text', {value: '0'})
            }
        })
    }
})
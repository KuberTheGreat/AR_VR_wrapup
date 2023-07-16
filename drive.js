AFRAME.registerComponent('drive', {

    init: function(){
        var gameState = this.el.getAttribute('game')

        if(gameState == 'play'){
            this.driveCar();
        }
    },

    driveCar: function(){
        var multiply = 10;
        var wheelRotation = 0;

        window.addEventListener('keydown', function(e){
            var wheel = document.querySelector('#car1')

            if(e.code == 'ArrowRight' && wheelRotation > -40){
                wheelRotation -= 5;
                wheel.setAttribute('rotation', {x:0, y:180+wheelRotation, z:0})
            }
            if(e.code == 'ArrowLeft' && wheelRotation < 40){
                wheelRotation += 5;
                wheel.setAttribute('rotation', {x:0, y:180+wheelRotation, z:0})
            }

            var c = document.querySelector('#look')
            var cameraRotation = c.getAttribute('rotation');
            var cameraPosition = c.getAttribute('position');
            var cameraMovementControl = c.getAttribute('movement-controls')

            c.setAttribute('movement-controls', {'speed': cameraMovementControl.speed + 0.005})

            
            if(e.code == 'ArrowRight'){
                cameraRotation -= 5;
                c.setAttribute('rotation', {x:0, y: cameraRotation, z:0})
                c.setAttribute('movement-controls', {'speed': cameraMovementControl.speed + 0.005})
            }

            if(e.code == 'ArrowLeft'){
                cameraRotation += 5;
                c.setAttribute('rotation', {x:0, y: cameraRotation, z:0})
                c.setAttribute('movement-controls', {'speed': cameraMovementControl.speed + 0.005})
            }

            if(e.code == 'ArrowUp'){
                multiply += 0.5;
                if(multiply <= 100 && cameraPosition.z > -500){
                    c.setAttribute('movement-controls', {'speed': cameraMovementControl.speed + 0.005})
                }
            }

            if(e.code == 'Space'){
                multiply -= 0.5;
                c.setAttribute('movement-controls', {'speed': 0})
            }
        })
    }

})
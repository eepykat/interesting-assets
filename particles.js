$(document).ready(async function () {
    await loadFull(tsParticles);
    $("#animated-background").particles().init( 
        {

            // Set the FPS of the particles
            fpsLimit: 120,

            // Should the particles take up the whole screen?
            fullScreen: { enable: true },

            // Particles
            particles: {


                // Movment of Particles
                move: {
                    enable: true,
                    // The speed the particles go
                    speed: 3,
                },

                // Color of the Particles
                color: {
                    value: ["#fcdb03", "#b57ff0", "#7ff0a5"]
                },

                // Shape of the Particles
                shape: {
                    type: "triangle"
                },

                // Number of Particles
                number: {
                    value: 200,
                },

                // Opacity of the Particles
                opacity: {
                    value: { min: 0.5, max: 1},
                },

                // Rotation of the Particles
                rotate: {
                    path: true
                },

                //Size of the Particles
                size: {
                    value: { min: 3, max: 15 }
                },

                // Collisions of the Particles
                collisions: {

                    enable: true,
                    
                },
            }, 
        },
    );
});

const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    //suoni
    const sounds = document.querySelectorAll(".sound-picker button");
    //display timer
    const timedisplay = document.querySelector(".time-display");
    const timeselect = document.querySelectorAll(".time-select button");
    const outlineLength = outline.getTotalLength();
    console.log (outlineLength);
    //durata
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //play suonds
    play.addEventListener("click", () => {
        checkplaying(song);
    });

    //suoni diversi
    sounds.forEach(sound =>{
        sound.addEventListener("click", function(){
            song.src = this.getAttribute("data-sound");
            video.src = this.getAttribute("data-video");
            checkplaying(song);
        });

    });


    timeselect.forEach(Option => {
        Option.addEventListener("click", function(){
            fakeDuration = this.getAttribute("data-time");
            timedisplay.TEXT_NODE = "${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}";

        });

    });

    //funzione per fermare o far partire il suono
    const checkplaying = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
        }else{
            song.pause();
            video.pause();
            play.src = "./svg/play.svg";
        }
    };

    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed/60);

        //animazione del cerchio
        let progress = outlineLength - (currentTime/fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;
        //animazione del testo
        timedisplay.textContent = (minutes)+ ":" +(seconds);

        if (currentTime >= fakeDuration) {
            song.pause();
            song.currentTime = 0;
            play.src = "./svg/play.svg";
            video.pause();
        }
    };
};


app();





function openVideo(images\video.mp4) {
    let modal = document.getElementById("videoModal");
    let videoElement = document.getElementById("modalVideo");

    modal.style.display = "flex";
    videoElement.src = images\video.mp4;
    videoElement.controls = true; // Enable controls
    videoElement.play(); // Start playback
}

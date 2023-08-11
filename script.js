function loadVideo() {
    var input = document.getElementById('videoInput');
    var videoPlayer = document.getElementById('videoPlayer');
    
    if (input.files && input.files[0]) {
        var file = input.files[0];
        var fileURL = URL.createObjectURL(file);
        videoPlayer.src = fileURL;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.classList.toggle('dark-mode');
    var container = document.querySelector('.container');
    container.classList.toggle('dark-mode');
    var buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.toggle('dark-mode'));
}

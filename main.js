var css = 'body {animation-name:test; animation-duration:4s; animation-iteration-count:infinite; } @keyframes test{ 0%{color:#ff0000} 20%{color:#00ff00} 40%{color:#ffff00} 60%{color:#0000ff} 80%{color:#00ffff} 100%{color:#ff0000}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);

function setup(){


    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500);
    canvas.position(100,100);
    poseNet = ml5.poseNet(video, modelLoded);
poseNet.on('pose',gotPoses);

}
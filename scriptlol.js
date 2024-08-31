const headlol = document.querySelector("p");
const imglol = document.getElementById("rah");
var origImgSrc = imglol.src;
imglol.className = 'smolsize';

function normal(x)
{
    x.className = "smolsize";
    imglol.src = origImgSrc;
    x.classList.remove("normalsize");
    imglol.style = 'padding:0; margin: 0;';
    imglol.style = 'transition: width 0.2s';
}

function abnormal(y)
{
    y.className = "normalsize";
    imglol.src = "images/entitledpiece.png";
    y.classList.remove("smolsize");
    imglol.style = 'transition: width 0.2s';
}

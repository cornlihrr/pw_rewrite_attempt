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
    imglol.src = "https://media.discordapp.net/attachments/1276523594364616817/1278189967213854831/image.png?ex=66d289ab&is=66d1382b&hm=d673f4d06844a148034cbbcb5cda90fbb0a15e385a3ec34d6ccefb218f3616f3&=&";
    y.classList.remove("smolsize");
    imglol.style = 'transition: width 0.2s';
}

 



let wrapper;
let thief=Math.floor(Math.random() * 1000)+4000; 
var flipbook;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function writingAll(stringTarget, container) {
  wrapper = document.querySelector('[' + container + ']');
  const stringsContainer = document.getElementsByClassName(stringTarget);

  while (wrapper) {
    for (i = 0; i < stringsContainer.length; i++) {
      const string = stringsContainer[i].textContent;

      if(i==0){
        flipbook="assets/sA_2020-06-24_12-53-41/sA_2020-06-24_12-53-41.html"
        }

        if(i==1){
          flipbook="assets/svA_2020-06-24_20-29-02/svA_2020-06-24_20-29-02.html"
      }

      if(i==2){
        flipbook="assets/savitA_2020-06-27_17-38-39/savitA_2020-06-27_17-38-39.html"
        }
        function foo(event) {
          //window.open(flipbook,"_self")
      }

        document.getElementById("liber").addEventListener("click", foo);

      await write(string);
      await sleep(1000);
      await erase();
      await sleep(1000);

      document.getElementById("liber").removeEventListener("click", foo);

    }

    ;
  }
}

;

function matrix() {
  window.open("assets/savitA_2020-06-27_17-38-39/savitA_2020-06-27_17-38-39.html","_self")
}



async function write(text) {
  let index = 0;

  while (index < text.length) {
    const timeout = 100;
    await sleep(timeout);
    index++;
    wrapper.innerHTML = text.substring(0, index);
  }
}

;

async function erase() {
  while (wrapper.textContent.length) {
    const timeout = 100;
    await sleep(timeout);
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2);
  }
}

;
writingAll('item', 'data-text');

setInterval(function joker() {
  
  var b1 = document.getElementById('demon-container');
  
  if(b1['style'].display == 'none') {
    b1['style'].display = 'block';
  
  } else {
    b1['style'].display = 'none';

  }
  
}, thief);



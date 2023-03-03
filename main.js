

document.addEventListener('mousedown', (e) => {

  if (e.target.className === 'window-header') {
    getMousePos(e);
    document.onmouseup = stopDrag;
  };
});

function getMousePos(element) {
  const currentWindow = element.target.parentNode;
  const mouseY = element.offsetY;
  const mouseX = element.offsetX;

  document.onmousemove = e => {
    currentWindow.style.top = (e.y - mouseY) + 'px';
    currentWindow.style.left = (e.x - mouseX) + 'px';
  };
};

function stopDrag() {
  document.onmousemove = null;
  document.onmouseup = null;
};

// to do
// prevent window from hitting edges and navigation bar
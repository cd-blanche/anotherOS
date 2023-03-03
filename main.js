

document.addEventListener('mousedown', (e) => {

  if (e.target.className === 'window-header') {
    // grab mouse position
    getMousePos(e);
    // stop grabbing on mouse up
    document.onmouseup = stopDrag;
  };
});

function getMousePos(element) {
  // main window to be moved
  const main = element.target.parentNode;
  const mouseY = element.offsetY;
  const mouseX = element.offsetX;

  // set window position based on mouse position
  document.onmousemove = e => {
    main.style.top = (e.y - mouseY) + 'px';
    main.style.left = (e.x - mouseX) + 'px';
  };
};

function stopDrag() {
  document.onmousemove = null;
  document.onmouseup = null;
};
export const mainRender = {
  c: null,
  setCanvas(newCanvas) {
    this.c = newCanvas;
  },
  render(texture, x, y) {
    this.c.drawImage(texture, x, 150 - y - texture.height);
  }
}
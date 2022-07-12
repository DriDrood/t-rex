export default {
  _div: null, // Div element put objects in
  _texturesPath: null, // Path to a folder where textures are saved
  _inRender: [],

  // Setup functions
  mount(divId) {
    this._div = document.getElementById(divId);
  },
  addTexturesFolder(path) {
    this._texturesPath = path;
  },

  _moveObject(object) {
    let el = document.getElementById(object.id);
    el.style.left = `${object.position.x}px`;
    el.style.bottom = `${object.position.y}px`;
  },

  renderAll(objects) {
    let objectsIds = objects.map(object => object.id)
    let toBeRemoved = this._inRender.filter(id => !objectsIds.includes(id)); // Object ids that are in _inRender but not in objectsIds
    let toBeAdded = objectsIds.filter(id => !this._inRender.includes(id)); // Object ids that are not in _inRender but are in objectsIds

    toBeRemoved.forEach(id => { // Remove
      let el = document.getElementById(id);
      this._div.removeChild(el);
      this._inRender.splice(this._inRender.indexOf(id), 1);
    })

    toBeAdded.forEach(id => { // Add
      let object = objects.filter(object => object.id == id)[0];
      let el = document.createElement(object.render.el);
      el.id = id;
      
      for (let i in object.render.properties) el[i]=object.render.properties[i];  // Copy object properties

      if (object.render.childOf != null) {
        let parent = document.getElementById(object.render.childOf);
        parent.appendChild(el);
      } else {
        this._div.appendChild(el);
      }
      this._inRender.push(id);
    })

    // All objects are removed addded

    objects.forEach(object => { // Render (move)
      this._moveObject(object);
    })
  }
}
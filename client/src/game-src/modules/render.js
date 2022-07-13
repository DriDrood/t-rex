export class RenderModule {
  constructor(el) {
    this.el = el,
    this.properties = {
      div: {},
      el: {},
    }
  }
  update() {}
}

export default {
  _div: null, // Div element put objects in
  _inRender: [],

  // Setup functions
  mount(divId) {
    this._div = document.getElementById(divId);
  },
  _updateObject(object) {
    object.renderUpdate();
    let div = document.getElementById(object.id);
    let el = document.getElementById(`${object.id}-el`);
    for (let i in object.render.properties.div) div[i]=object.render.properties.div[i];  // Copy object properties to div
    for (let i in object.render.properties.el) el[i]=object.render.properties.el[i];  // Copy object properties to element
    div.style.left = `${object.position.x}px`; // Move object
    div.style.bottom = `${object.position.y}px`;
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
      el.id = `${id}-el`;

      let elDiv = document.createElement('div');
      elDiv.classList.add('game-object');
      elDiv.id = id;
      elDiv.appendChild(el);
      
      for (let i in object.render.properties.divProps) div[i]=object.render.properties.divProps[i];  // Copy object properties to div
      for (let i in object.render.properties.elProps) el[i]=object.render.properties.elProps[i];  // Copy object properties to element

      if (object.parentId != null) {
        let parent = document.getElementById(object.parentId);
        parent.appendChild(elDiv);
      } else {
        this._div.appendChild(elDiv);
      }
      this._inRender.push(id);
    })

    // All objects are removed addded

    objects.forEach(object => { // Render (move)
      this._updateObject(object);
    })
  }
}
import { getuuid } from '../../utils.js'
export default class GameObject {
  constructor(renderProperties, childOf=null) {
    this.id = getuuid();
    this.render = {
      el: renderProperties.el,
      properties: renderProperties.properties,
      childOf: childOf
    }
  }
  position = {};
}
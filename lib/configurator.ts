// import yaml = require('js-yaml');

export class Config {
    name:string;
    config:object;
    
    constructor() {
        console.log('it\'s alive');
        console.log(__dirname);
        this.getConfig();
    }
    
  getConfig():object {
      
      return { alpha: 'beta' };
  }
}
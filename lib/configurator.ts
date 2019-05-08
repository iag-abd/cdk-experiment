import yaml = require('js-yaml');
var path = require('path');
import * as fs from 'fs';

export class Config {
    name:string;
    config:any;
    options:any;
    
    constructor(options :any) {
        this.options = options;
        console.log('it\'s alive');
        console.log(this.getConfig());
    }
    
  getConfig():object {
    //   const config = yaml.safeLoad(fs.readFileSync(`${this.options.cwd}/config/test.yml`, 'utf8'));
    //   const config2 = yaml.safeLoad(fs.readFileSync(`${this.options.cwd}/config/test2.yml`, 'utf8'));
    //   const object3 = {...config, ...config2 }
      //return { alpha: 'beta' };
      return this.readFilesSync(`${this.options.cwd}/config/`);
  }
  
    readFilesSync(dir :string):any {
        let config: any = {};
    
        // assumption that this is natural sort
        fs.readdirSync(dir).forEach(filename => {
            const name = path.parse(filename).name;
            const ext = path.parse(filename).ext;
            const filepath = path.resolve(dir, filename);
            //const stat = fs.statSync(filepath);
            //const isFile = stat.isFile();
            const isYaml = (ext === '.yml');
    
            if (isYaml) console.log('is yaml');
            console.log(name);
            console.log(ext);
            console.log(filepath);
            let temp = yaml.safeLoad(fs.readFileSync(`${this.options.cwd}/config/${name}${ext}`, 'utf8'));
            config = {...config, ...temp }
        });
    
        return config;
    }
}
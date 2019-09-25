const NullDependency = require("webpack/lib/dependencies/NullDependency");

class BaseResourceUrlDependency extends NullDependency
{
  constructor(range, base) {
    super ();
    this.range = range;
    this.base = base;
  }
}

BaseResourceUrlDependency.Template = class BaseResourceUrlDependencyTemplate
{
  apply(dep, source) {
    source.replace(dep.range[0], dep.range[1], 
    
    `function(){return '${dep.base}';}`
    
    );
  }
};

module.exports = BaseResourceUrlDependency;


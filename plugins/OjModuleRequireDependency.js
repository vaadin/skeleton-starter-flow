const NullDependency = require("webpack/lib/dependencies/NullDependency");

class OjModuleRequireDependency extends NullDependency
{
  constructor(parts) {
    super();
    this.parts = parts;
  }
}

OjModuleRequireDependency.Template = class OjModuleRequireDependencyTemplate
{
  apply(dep, source, outputOptions, requestShortener) {
    dep.parts.forEach(part => source.replace(part.start, part.end, part.content));
  }
};

module.exports = OjModuleRequireDependency;


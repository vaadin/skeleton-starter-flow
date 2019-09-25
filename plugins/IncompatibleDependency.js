/**
 * This dependency renders the code that just throws an error with a specified text.
 */
const NullDependency = require("webpack/lib/dependencies/NullDependency");

class IncompatibleDependency extends NullDependency
{
  constructor(range, error) {
    super ();
    this.range = range;
    this.error = error;
  }
}

IncompatibleDependency.Template = class IncompatibleDependencyTemplate
{
  apply(dep, source, outputOptions, requestShortener) {
    source.replace(dep.range[0], dep.range[1], `throw new error('${dep.error}');`);
  }
};

module.exports = IncompatibleDependency;


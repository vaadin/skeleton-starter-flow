# Module Federation prototype branch

The branch contains the directory VaadinComponents where we can build 
module federation bundles for components. For the branch the core components
module has been added to `./src/main/resources/META-INF/VAADIN/build/core.js` +  
`./src/main/resources/META-INF/VAADIN/mf` the part files in mf have had some editing
on customElement.define else they are a direct copy on what will be created in the 
VaadinComponents project.

Special edits that need framework support are `target/frontend/module.js` (which stands in for generated-flow-imports), 
`target/index.ts` (which was not copied from `./frontend/` for webpack) and `MFInitListener`

The `MFInitListener` is a custom request handler for serving the javascript files from `VAADIN/mf` as there
is something with the webpack publicPath parameter which doesn't translate to the federated module parts loading requests.

# Running project

Project should start with `mvn jetty:run`
* currently the Theme is missing from the application for some reason

# Resetting project

To reset the project execute
* mvn clean
* git reset --hard

After this everything will be at the start state.
(`git pull` should be used if changes have been pushed to branch)

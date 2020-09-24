Buildign the parted version:
For both Core and Pro forlders execute
   pnpm i
   pnpm build
Then in App folder
   pnpm i
   pnpm start

Navigate to localhost:3000


Old setup::

webpack.config.js now defines 4 packages:
 - app
    App is the lit "application" in ./src/app.js which is used through bootstrap.js
    The app has core and pro as remotes that it can consume exposed parts from
 - core
    Core contains all the core components as exposed components
 - pro
    Pro exposes all pro components except Charts as it still fails to compile
 - gizmo
    Exposes Live reload gizmo

Bulding the consumable bundles:
    pnpm i
    pnpm build -- --component core
    pnpm build -- --component pro
    pnpm build -- --component gizmo

    pnpm build -- --component app

The built application can be opened in the browser with:
    open {project_dir}/dist/index.html in browser

or run using dev server:
    pnpm start -- -- component app


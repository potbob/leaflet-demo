# leaflet-demo

This project is just an demo of leaflet, using a modern build process (using webpack).

After cloning the project, you can run those commands:

- `yarn`: this will install the required package to build the project properly
- `yarn eslint`: will print in the terminal the linting errors and warnings.
- `yarn build`: will build your project, but not serve it
- `yarn start:dev`: will build your project and serve it to the `9000` port.

## What has been done
- the project has been set using webpack. 
- a very light and convenient server has been set (`webpack-dev-server`)
- [Leaflet](https://leafletjs.com/) package has been added. Its style is imported, and the icons (for markers) has been added to the dist folder (`dist/img/icon`).
- The `src/js/script.js` file (imported in `src/index.js`) sets a basic map. The map has been imported from the `https://api.tiles.mapbox.com`
API, with an hardcoded token. Markers has been added as well.
This is enough for a demo, but we have to find a solution to host our maps in a server (that would be ideal).
## What's next
Next steps:
- set up a server using [OpenMapTiles](https://openmaptiles.com/server/).
- and figure out a way to call a public api, get back a csv and parse it to get a JSON. 
Once we have this, we will be able to have a pretty easy to use set of maps.
Then we will have to work on the deployement. I will need help, as I am junior and really not experienced in this particular field.

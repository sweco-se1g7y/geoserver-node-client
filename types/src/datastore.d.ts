/**
 * Client for GeoServer data stores
 *
 * @module DatastoreClient
 */
export default class DatastoreClient {
    /**
     * Creates a GeoServer REST DatastoreClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Get all DataStores in a workspace.
     *
     * @param {String} workspace The workspace to get DataStores for
     *
     * @returns {Object} An object containing store details
     */
    getDataStores(workspace: string): any;
    /**
     * Get all CoverageStores in a workspace.
     *
     * @param {String} workspace The workspace to get CoverageStores for
     *
     * @returns {Object} An object containing store details
     */
    getCoverageStores(workspace: string): any;
    /**
     * Get all WmsStores in a workspace.
     *
     * @param {String} workspace The workspace to get WmsStores for
     *
     * @returns {Object} An object containing store details
     */
    getWmsStores(workspace: string): any;
    /**
     * Get all WmtsStores in a workspace.
     *
     * @param {String} workspace The workspace to get WmtsStores for
     *
     * @returns {Object} An object containing store details
     */
    getWmtsStores(workspace: string): any;
    /**
     * Get information about various store types in a workspace.
     *
     * @param {String} workspace The workspace name
     * @param {String} storeType The type of store
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object containing store details or undefined if it cannot be found
     * @private
     */
    private getStores;
    /**
     * Get specific DataStore by name in a workspace.
     *
     * @param {String} workspace The workspace to search DataStore in
     * @param {String} dataStore DataStore name
     *
     * @returns {Object} An object containing store details or undefined if it cannot be found
     */
    getDataStore(workspace: string, dataStore: string): any;
    /**
     * Get specific CoverageStore by name in a workspace.
     *
     * @param {String} workspace The workspace to search CoverageStore in
     * @param {String} covStore CoverageStore name
     *
     * @returns {Object} An object containing store details or undefined if it cannot be found
     */
    getCoverageStore(workspace: string, covStore: string): any;
    /**
     * Get specific WmsStore by name in a workspace.
     *
     * @param {String} workspace The workspace to search WmsStore in
     * @param {String} wmsStore WmsStore name
     *
     * @returns {Object} An object containing store details or undefined if it cannot be found
     *
     */
    getWmsStore(workspace: string, wmsStore: string): any;
    /**
     * Get specific WmtsStore by name in a workspace.
     *
     * @param {String} workspace The workspace to search WmtsStore in
     * @param {String} wmtsStore WmtsStore name
     *
     * @returns {Object} An object containing store details or undefined if it cannot be found
     */
    getWmtsStore(workspace: string, wmtsStore: string): any;
    /**
     * Get GeoServer store by type
     *
     * @param {String} workspace The name of the workspace
     * @param {String} storeName The name of the store
     * @param {String} storeType The type of the store
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object containing store details or undefined if it cannot be found
     * @private
     */
    private getStore;
    /**
     * Creates a GeoTIFF store from a file by path and publishes it as layer.
     * The GeoTIFF file has to be placed on the server, where your GeoServer
     * is running.
     *
     * @param {String} workspace The workspace to create GeoTIFF store in
     * @param {String} coverageStore The name of the new GeoTIFF store
     * @param {String} layerName The published name of the new layer
     * @param {String} layerTitle The published title of the new layer
     * @param {String} filePath The path to the GeoTIFF file on the server
     *
     * @throws Error if request fails
     *
     * @returns {String} The successful response text
     */
    createGeotiffFromFile(workspace: string, coverageStore: string, layerName: string, layerTitle: string, filePath: string): string;
    /**
     * Creates a GeoTIFF store from a file by stream and publishes it as layer.
     * The GeoTIFF file is placed on the server, where your GeoServer
     * is running.
     *
     * @param {String} workspace The workspace to create GeoTIFF store in
     * @param {String} coverageStore The name of the new GeoTIFF store
     * @param {String} layerName The published name of the new layer
     * @param {String} layerTitle The published title of the new layer
     * @param {Stream} readStream The stream of the GeoTIFF file
     * @param {Number} fileSizeInBytes The number of bytes of the stream
     *
     * @throws Error if request fails
     *
     * @returns {String} The successful response text
     */
    createGeotiffFromStream(workspace: string, coverageStore: string, layerName: string, layerTitle: string, readStream: Stream, fileSizeInBytes: number): string;
    /**
     * Creates a PostGIS based data store.
     *
     * @param {String} workspace The WS to create the data store in
     * @param {String} namespaceUri The namespace URI of the workspace
     * @param {String} dataStore The data store name to be created
     * @param {String} pgHost The PostGIS DB host
     * @param {Number} pgPort The PostGIS DB port
     * @param {String} pgUser The PostGIS DB user
     * @param {String} pgPassword The PostGIS DB password
     * @param {String} pgSchema The PostGIS DB schema
     * @param {String} pgDb The PostGIS DB name
     * @param {Boolean} [exposePk] expose primary key, defaults to false
     *
     * @throws Error if request fails
     */
    createPostgisStore(workspace: string, namespaceUri: string, dataStore: string, pgHost: string, pgPort: number, pgUser: string, pgPassword: string, pgSchema: string, pgDb: string, exposePk?: boolean): Promise<void>;
    /**
     * Creates an ImageMosaic store from a zip archive with the 3 necessary files
     *   - datastore.properties
     *   - indexer.properties
     *   - timeregex.properties
     *
     * The zip archive has to be given as absolute path, so before it has to be
     * placed on the server, where your GeoServer is running.
     *
     * @param {String} workspace The WS to create the data store in
     * @param {String} dataStore The data store name
     * @param {String} zipArchivePath Absolute path to zip archive with the 3 properties files
     *
     * @throws Error if request fails
     *
     * @returns {String} The response text
     */
    createImageMosaicStore(workspace: string, coverageStore: any, zipArchivePath: string): string;
    /**
     * Creates a WMS based data store.
     *
     * @param {String} workspace The WS to create the data store in
     * @param {String} dataStore The data store name
     * @param {String} wmsCapabilitiesUrl Base WMS capabilities URL
     *
     * @throws Error if request fails
     */
    createWmsStore(workspace: string, dataStore: string, wmsCapabilitiesUrl: string): Promise<void>;
    /**
     * Creates a WMTS based data store.
     *
     * @param {String} workspace The WS to create the data store in
     * @param {String} dataStore The data store name
     * @param {String} wmtsCapabilitiesUrl Base WMTS capabilities URL
     *
     * @throws Error if request fails
     */
    createWmtsStore(workspace: string, dataStore: string, wmtsCapabilitiesUrl: string): Promise<void>;
    /**
     * Creates a WFS based data store.
     *
     * @param {String} workspace The WS to create the data store in
     * @param {String} dataStore The data store name
     * @param {String} wfsCapabilitiesUrl WFS capabilities URL
     * @param {String} namespaceUrl URL of the GeoServer namespace
     * @param {Boolean} [useHttpConnectionPooling=true] use HTTP connection pooling for WFS connection
     *
     * @throws Error if request fails
     */
    createWfsStore(workspace: string, dataStore: string, wfsCapabilitiesUrl: string, namespaceUrl: string, useHttpConnectionPooling?: boolean): Promise<void>;
    /**
     * Deletes a data store.
     *
     * @param {String} workspace The workspace where the data store is in
     * @param {String} coverageStore Name of data store to delete
     * @param {String} recurse Flag to enable recursive deletion
     *
     * @throws Error if request fails
     */
    deleteDataStore(workspace: string, dataStore: any, recurse: string): Promise<void>;
    /**
     * Deletes a CoverageStore.
     *
     * @param {String} workspace The workspace where the CoverageStore is in
     * @param {String} coverageStore Name of CoverageStore to delete
     * @param {String} recurse Flag to enable recursive deletion
     *
     * @throws Error if request fails
     */
    deleteCoverageStore(workspace: string, coverageStore: string, recurse: string): Promise<void>;
    /**
     * Creates a GeoPackage store from a file placed in the geoserver_data dir.
     *
     * @param {String} workspace The WS to create the data store in
     * @param {String} dataStore The data store name
     * @param {String} gpkgPath Relative path to GeoPackage file within geoserver_data dir
     *
     * @throws Error if request fails
     */
    createGpkgStore(workspace: string, dataStore: string, gpkgPath: string): Promise<void>;
}
//# sourceMappingURL=datastore.d.ts.map
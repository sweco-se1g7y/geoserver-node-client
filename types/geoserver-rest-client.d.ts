export { GeoServerResponseError } from "./src/util/geoserver.js";
/**
 * Client for GeoServer REST API.
 * Has minimal basic functionality and offers REST client instances for
 * sub-entities, like workspaces or datastores as member variables.
 *
 * @module GeoServerRestClient
 */
export class GeoServerRestClient {
    /**
     * Creates a GeoServerRestClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} user The user for the GeoServer REST API
     * @param {String} password The password for the GeoServer REST API
     */
    constructor(url: string, user: string, password: string);
    url: string;
    auth: string;
    /** @member {LayerClient} layers GeoServer REST client instance for layers */
    layers: LayerClient;
    /** @member {LayerGroupClient} layers GeoServer REST client instance for layergroups */
    layergroups: LayerGroupClient;
    /** @member {StyleClient} styles GeoServer REST client instance for styles */
    styles: StyleClient;
    /** @member {WorkspaceClient} workspaces GeoServer REST client instance for workspaces */
    workspaces: WorkspaceClient;
    /** @member {NamespaceClient} namespaces GeoServer REST client instance for namespaces */
    namespaces: NamespaceClient;
    /** @member {DatastoreClient} datastores GeoServer REST client instance for data stores */
    datastores: DatastoreClient;
    /** @member {ImageMosaicClient} imagemosaics GeoServer REST client instance for image mosaics */
    imagemosaics: ImageMosaicClient;
    /** @member {SecurityClient} security GeoServer REST client instance for security related modifications */
    security: SecurityClient;
    /** @member {SettingsClient} settings GeoServer REST client instance for settings */
    settings: SettingsClient;
    /** @member {AboutClient} about GeoServer REST client instance for about endpoint */
    about: AboutClient;
    /** @member {ResetReloadClient} about GeoServer REST client instance for reset/reload endpoints */
    resetReload: ResetReloadClient;
}
import LayerClient from './src/layer.js';
import LayerGroupClient from './src/layergroup.js';
import StyleClient from './src/style.js';
import WorkspaceClient from './src/workspace.js';
import NamespaceClient from './src/namespace.js';
import DatastoreClient from './src/datastore.js';
import ImageMosaicClient from './src/imagemosaic.js';
import SecurityClient from './src/security.js';
import SettingsClient from './src/settings.js';
import AboutClient from './src/about.js';
import ResetReloadClient from './src/reset-reload.js';
//# sourceMappingURL=geoserver-rest-client.d.ts.map
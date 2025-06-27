/**
 * Client for GeoServer image mosaics
 *
 * @module ImageMosaicClient
 */
export default class ImageMosaicClient {
    /**
     * Creates a GeoServer REST ImageMosaicClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Returns all granules of an image mosaic.
     *
     * @param {String} workspace Workspace of image mosaic
     * @param {String} coverageStore CoverageStore of image mosaic
     * @param {String} coverage Name of image mosaic
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with the granules
     */
    getGranules(workspace: string, coverageStore: string, coverage: string): any;
    /**
     * Harvests all granules in the given folder for an image mosaic.
     *
     * @param {String} workspace Workspace of image mosaic
     * @param {String} coverageStore CoverageStore of image mosaic
     * @param {String} filePath Server path of folder to harvest
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with the granules
     */
    harvestGranules(workspace: string, coverageStore: string, filePath: string): any;
    /**
     * Adds a granule (defined by a server file) to an image mosaic.
     *
     * @param {String} workspace Workspace of image mosaic
     * @param {String} coverageStore CoverageStore of image mosaic
     * @param {String} filePath Server file path of new granule
     *
     * @throws Error if request fails
     */
    addGranuleByServerFile(workspace: string, coverageStore: string, filePath: string): Promise<void>;
    /**
     * Deletes a single granule of an image mosaic.
     *
     * @param {String} workspace Workspace of image mosaic
     * @param {String} coverageStore CoverageStore of image mosaic
     * @param {String} coverage Name of image mosaic
     * @param {String} covFileLocation Location of coverage file
     *
     * @throws Error if request fails
     */
    deleteSingleGranule(workspace: string, coverageStore: string, coverage: string, covFileLocation: string): Promise<boolean>;
}
//# sourceMappingURL=imagemosaic.d.ts.map
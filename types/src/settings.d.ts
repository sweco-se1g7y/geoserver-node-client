/**
 * Client for GeoServer settings.
 *
 * @module SettingsClient
 */
export default class SettingsClient {
    /**
     * Creates a GeoServer REST SettingsClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Get the complete GeoServer settings object.
     *
     * @throws Error if request fails
     *
     * @returns {Object} Settings object
     */
    getSettings(): any;
    /**
     * Update the global GeoServer settings.
     *
     * @param {Object} settings The adapted GeoServer settings object
     */
    updateSettings(settings: any): Promise<void>;
    /**
     * Update the global proxyBaseUrl setting.
     *
     * @param {String} proxyBaseUrl The proxy base URL
     */
    updateProxyBaseUrl(proxyBaseUrl: string): Promise<boolean>;
    /**
     * Get the contact information of the GeoServer.
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with contact information
     */
    getContactInformation(): any;
    /**
     * Update the contact information.
     *
     * Deleting is not supported.
     *
     * @param {String} [address] The contact's address
     * @param {String} [city] The contact's city
     * @param {String} [country] The contact's country
     * @param {String} [postalCode] The contact's postCode
     * @param {String} [state] The contact's state
     * @param {String} [email] The contact's email
     * @param {String} [organization] The contact's organization
     * @param {String} [contactPerson] The contact person
     * @param {String} [phoneNumber] The contact's phone number
     *
     * @throws Error if request fails
     */
    updateContactInformation(address?: string, city?: string, country?: string, postalCode?: string, state?: string, email?: string, organization?: string, contactPerson?: string, phoneNumber?: string): Promise<void>;
}
//# sourceMappingURL=settings.d.ts.map
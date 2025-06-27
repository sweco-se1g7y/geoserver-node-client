/**
 * Client for GeoServer security.
 *
 * @module SecurityClient
 */
export default class SecurityClient {
    /**
     * Creates a GeoServer REST SecurityClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Returns all users registered in GeoServer.
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with all users
     */
    getAllUsers(): any;
    /**
     * Creates a new user.
     *
     * @param {String} username The name of the user to be created
     * @param {String} password The password of the user to be created
     *
     * @throws Error if request fails
     */
    createUser(username: string, password: string): Promise<void>;
    /**
     * Updates an existing user. User name is only taken for identification and
     * cannot be changed with this API call.
     *
     * @param {String} username The name of the user to be created
     * @param {String} password The password of the user to be created
     * @param {Boolean} enabled Enable / disable the user
     *
     * @throws Error if request fails
     */
    updateUser(username: string, password: string, enabled: boolean): Promise<void>;
    /**
     * Associates the given role to the user.
     *
     * @param {String} username The name of the user to add the role to
     * @param {String} role The role to associate
     *
     * @throws Error if request fails
     */
    associateUserRole(username: string, role: string): Promise<void>;
}
//# sourceMappingURL=security.d.ts.map
/**
 * API Connection Helper Library
 */
export default class apiConnection {
    // Initialisation

    /**
     * domain name
     * @private
     * @type {string}
     */
    // TODO : change values according to backend deployment
    #domain = "backend";
    /**
     * api port
     * @private
     * @type {string}
     */
    #port = "3000";
    /**
     * api version code
     * @private
     * @type {string}
     */
    #version = "20230824";
    /**
     * base url to connect to the api
     * @private
     * @type {string}
     */
    #baseUrl = `http://${this.#domain}:${this.#port}/api/${this.#version}/`;

    /**
     * The constructor makes sure the JWT is loaded is available
     * @param token
     */
    constructor(token = ""){
        if(token.length > 0){
            this.#token = token;
            this.#storeJWT();
        }
        else {
            this.#loadJWT();
        }
    };

    /**
     * Function providing the base connectivity to the
     * @param {string} url the api URL to call
     * @param {string} [method="GET"] the HTTP verb to use
     * @param {{password: string, username: string}} [payload] the JSON payload to send to the API
     * @returns {Promise<undefined|*>} requires await to work
     */
    async #connect(url, method = "GET", payload = undefined) {
        // Base config
        const config = {
            method: method,
            cors: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        };

        // JWT management
        if (this.#token.length > 0) {
            config["headers"]["authorization"] = "Bearer " + this.#token;
        }

        // If there is a JSON payload, add it to the call
        if (payload) {
            config["body"] = JSON.stringify(payload);
        }

        // Connection in itself
        const raw = await fetch(this.#baseUrl + url, config);

        // Result management
        // TODO : Update according to the actual working of the api, this is taken from a Directus exercise
        if (raw.ok) {
            const response = await raw.json();
            return response.data;
        }
        else {
            console.log(raw);
            return undefined;
        }
    };

    // JWT

    /**
     * Local storage of the JWT
     * @private
     * @type {string}
     */
    #tokenLocation = "JWT";
    /**
     * class storage of the JWT
     * @private
     * @type {string}
     */
    #token = "";

    /**
     * Function to load the JWT from localStorage
     * @private
     */
    #loadJWT (){
        this.#token = localStorage.getItem(this.#tokenLocation);
    };

    /**
     * Function to store the JWT into localStorage
     * @private
     */
    #storeJWT(){
        localStorage.setItem(this.#tokenLocation,this.#token);
    };

    // Front access
    /**
     * login function
     * @param {string} username the username to login
     * @param {string} password the password to login
     * @returns {Promise<void>} The JWT is automatically updated, no return
     */
    async login (username, password) {
        this.#token = await this.#connect("/user/login","POST", {
            "username" : username,
            "password" : password
        });
        this.#storeJWT();
    };

    /**
     * List all tickets
     * @returns {Promise<*|undefined>}
     */
    async listTickets(){
        return await this.#connect('/ticket','GET');
    };

    /**
     * Create a ticket
     * @param ticketDetails
     * @returns {Promise<*|undefined>}
     */
    async createTicket(ticketDetails){
        //Expect to return the ticketID
        return await this.#connect('/ticket','POST',ticketDetails);
    };

    /**
     * Read the ticket details from a ticket ID
     * @param ticketID
     * @returns {Promise<*|undefined>}
     */
    async readTicket(ticketID){
        return await this.#connect(`/ticket/${ticketID}`, 'GET');
    };

    /**
     * Update the ticket details from a ticket ID
     * @param ticketID
     * @param ticketDetails
     * @returns {Promise<*|undefined>}
     */
    async updateTicket(ticketID, ticketDetails){
        return await this.#connect(`/ticket/${ticketID}`,'PATCH',ticketDetails);
    };

    /**
     * Delete a ticket from a ticket ID
     * @param ticketID
     * @returns {Promise<*|undefined>}
     */
    async deleteTicket(ticketID){
        return await this.#connect(`/ticket/${ticketID}`, 'DELETE');

    };
}
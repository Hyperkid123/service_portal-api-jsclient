/**
 * Service Portal API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The CreatePortfolioItem model module.
* @module model/CreatePortfolioItem
* @version 1.0.0
*/
export default class CreatePortfolioItem {
    /**
    * Constructs a new <code>CreatePortfolioItem</code>.
    * @alias module:model/CreatePortfolioItem
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>CreatePortfolioItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreatePortfolioItem} obj Optional instance to populate.
    * @return {module:model/CreatePortfolioItem} The populated <code>CreatePortfolioItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePortfolioItem();

            
            
            

            if (data.hasOwnProperty('service_offering_ref')) {
                obj['service_offering_ref'] = ApiClient.convertToType(data['service_offering_ref'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} service_offering_ref
    */
    service_offering_ref = undefined;








}



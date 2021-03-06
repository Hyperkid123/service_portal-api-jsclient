/**
 * Catalog API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 0.1.0
 * Contact: support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ServicePlan model module.
 * @module model/ServicePlan
 * @version 0.1.0
 */
class ServicePlan {
    /**
     * Constructs a new <code>ServicePlan</code>.
     * @alias module:model/ServicePlan
     */
    constructor() { 
        
        ServicePlan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServicePlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServicePlan} obj Optional instance to populate.
     * @return {module:model/ServicePlan} The populated <code>ServicePlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServicePlan();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('create_json_schema')) {
                obj['create_json_schema'] = ApiClient.convertToType(data['create_json_schema'], Object);
            }
        }
        return obj;
    }


}

/**
 * The name of the Service Plan
 * @member {String} name
 */
ServicePlan.prototype['name'] = undefined;

/**
 * The Service Plan description
 * @member {String} description
 */
ServicePlan.prototype['description'] = undefined;

/**
 * The unique identifier for this Service Plan
 * @member {String} id
 */
ServicePlan.prototype['id'] = undefined;

/**
 * JSON Schema for the object
 * @member {Object} create_json_schema
 */
ServicePlan.prototype['create_json_schema'] = undefined;






export default ServicePlan;


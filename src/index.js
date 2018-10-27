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


import ApiClient from './ApiClient';
import CatalogItem from './model/CatalogItem';
import CatalogPlan from './model/CatalogPlan';
import JSONSchema from './model/JSONSchema';
import Order from './model/Order';
import OrderItem from './model/OrderItem';
import Organization from './model/Organization';
import ParameterValue from './model/ParameterValue';
import PlanParameter from './model/PlanParameter';
import Portfolio from './model/Portfolio';
import PortfolioItem from './model/PortfolioItem';
import ProgressMessage from './model/ProgressMessage';
import Provider from './model/Provider';
import ServicePlan from './model/ServicePlan';
import AdminsApi from './api/AdminsApi';
import UsersApi from './api/UsersApi';


/**
* This_is_a_API_to_fetch_and_order_catalog_items_from_different_cloud_sources.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ServicePortalApi = require('index'); // See note below*.
* var xxxSvc = new ServicePortalApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ServicePortalApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ServicePortalApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ServicePortalApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CatalogItem model constructor.
     * @property {module:model/CatalogItem}
     */
    CatalogItem,

    /**
     * The CatalogPlan model constructor.
     * @property {module:model/CatalogPlan}
     */
    CatalogPlan,

    /**
     * The JSONSchema model constructor.
     * @property {module:model/JSONSchema}
     */
    JSONSchema,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OrderItem model constructor.
     * @property {module:model/OrderItem}
     */
    OrderItem,

    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization,

    /**
     * The ParameterValue model constructor.
     * @property {module:model/ParameterValue}
     */
    ParameterValue,

    /**
     * The PlanParameter model constructor.
     * @property {module:model/PlanParameter}
     */
    PlanParameter,

    /**
     * The Portfolio model constructor.
     * @property {module:model/Portfolio}
     */
    Portfolio,

    /**
     * The PortfolioItem model constructor.
     * @property {module:model/PortfolioItem}
     */
    PortfolioItem,

    /**
     * The ProgressMessage model constructor.
     * @property {module:model/ProgressMessage}
     */
    ProgressMessage,

    /**
     * The Provider model constructor.
     * @property {module:model/Provider}
     */
    Provider,

    /**
     * The ServicePlan model constructor.
     * @property {module:model/ServicePlan}
     */
    ServicePlan,

    /**
    * The AdminsApi service constructor.
    * @property {module:api/AdminsApi}
    */
    AdminsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};

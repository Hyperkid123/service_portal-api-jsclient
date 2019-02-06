/**
 * Service Portal API
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


import ApiClient from './ApiClient';
import AddPortfolioItem from './model/AddPortfolioItem';
import CollectionLinks from './model/CollectionLinks';
import CollectionMetadata from './model/CollectionMetadata';
import CreatePortfolioItem from './model/CreatePortfolioItem';
import Order from './model/Order';
import OrderItem from './model/OrderItem';
import OrderItemsCollection from './model/OrderItemsCollection';
import OrdersCollection from './model/OrdersCollection';
import Organization from './model/Organization';
import Portfolio from './model/Portfolio';
import PortfolioItem from './model/PortfolioItem';
import PortfolioItemsCollection from './model/PortfolioItemsCollection';
import PortfoliosCollection from './model/PortfoliosCollection';
import ProgressMessage from './model/ProgressMessage';
import ProgressMessagesCollection from './model/ProgressMessagesCollection';
import ProviderControlParameters from './model/ProviderControlParameters';
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
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AddPortfolioItem model constructor.
     * @property {module:model/AddPortfolioItem}
     */
    AddPortfolioItem,

    /**
     * The CollectionLinks model constructor.
     * @property {module:model/CollectionLinks}
     */
    CollectionLinks,

    /**
     * The CollectionMetadata model constructor.
     * @property {module:model/CollectionMetadata}
     */
    CollectionMetadata,

    /**
     * The CreatePortfolioItem model constructor.
     * @property {module:model/CreatePortfolioItem}
     */
    CreatePortfolioItem,

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
     * The OrderItemsCollection model constructor.
     * @property {module:model/OrderItemsCollection}
     */
    OrderItemsCollection,

    /**
     * The OrdersCollection model constructor.
     * @property {module:model/OrdersCollection}
     */
    OrdersCollection,

    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization,

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
     * The PortfolioItemsCollection model constructor.
     * @property {module:model/PortfolioItemsCollection}
     */
    PortfolioItemsCollection,

    /**
     * The PortfoliosCollection model constructor.
     * @property {module:model/PortfoliosCollection}
     */
    PortfoliosCollection,

    /**
     * The ProgressMessage model constructor.
     * @property {module:model/ProgressMessage}
     */
    ProgressMessage,

    /**
     * The ProgressMessagesCollection model constructor.
     * @property {module:model/ProgressMessagesCollection}
     */
    ProgressMessagesCollection,

    /**
     * The ProviderControlParameters model constructor.
     * @property {module:model/ProviderControlParameters}
     */
    ProviderControlParameters,

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

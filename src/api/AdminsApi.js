/**
 * Service Portal API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AddPortfolioItem from '../model/AddPortfolioItem';
import CreatePortfolioItem from '../model/CreatePortfolioItem';
import Order from '../model/Order';
import OrderItem from '../model/OrderItem';
import Portfolio from '../model/Portfolio';
import PortfolioItem from '../model/PortfolioItem';
import ProgressMessage from '../model/ProgressMessage';
import ServicePlan from '../model/ServicePlan';

/**
* Admins service.
* @module api/AdminsApi
* @version 1.0.0
*/
export default class AdminsApi {

    /**
    * Constructs a new AdminsApi. 
    * @alias module:api/AdminsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * API to add a new portfolio
     * Returns the added portfolio object 
     * @param {module:model/Portfolio} portfolio 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Portfolio} and HTTP response
     */
    addPortfolioWithHttpInfo(portfolio) {
      let postBody = portfolio;

      // verify the required parameter 'portfolio' is set
      if (portfolio === undefined || portfolio === null) {
        throw new Error("Missing the required parameter 'portfolio' when calling addPortfolio");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Portfolio;

      return this.apiClient.callApi(
        '/portfolios', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * API to add a new portfolio
     * Returns the added portfolio object 
     * @param {module:model/Portfolio} portfolio 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Portfolio}
     */
    addPortfolio(portfolio) {
      return this.addPortfolioWithHttpInfo(portfolio)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * API to add a new portfolio item
     * This API would connect to the Topology Service to fetch the name and description of the service offering. Returns the added portfolio item object 
     * @param {module:model/CreatePortfolioItem} createPortfolioItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortfolioItem} and HTTP response
     */
    addPortfolioItemWithHttpInfo(createPortfolioItem) {
      let postBody = createPortfolioItem;

      // verify the required parameter 'createPortfolioItem' is set
      if (createPortfolioItem === undefined || createPortfolioItem === null) {
        throw new Error("Missing the required parameter 'createPortfolioItem' when calling addPortfolioItem");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioItem;

      return this.apiClient.callApi(
        '/portfolio_items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * API to add a new portfolio item
     * This API would connect to the Topology Service to fetch the name and description of the service offering. Returns the added portfolio item object 
     * @param {module:model/CreatePortfolioItem} createPortfolioItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioItem}
     */
    addPortfolioItem(createPortfolioItem) {
      return this.addPortfolioItemWithHttpInfo(createPortfolioItem)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add Portfolio item to a portfolio
     * Add new portfolio item to an existing portfolio 
     * @param {String} portfolioId The Portfolio ID
     * @param {module:model/AddPortfolioItem} addPortfolioItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addPortfolioItemToPortfolioWithHttpInfo(portfolioId, addPortfolioItem) {
      let postBody = addPortfolioItem;

      // verify the required parameter 'portfolioId' is set
      if (portfolioId === undefined || portfolioId === null) {
        throw new Error("Missing the required parameter 'portfolioId' when calling addPortfolioItemToPortfolio");
      }

      // verify the required parameter 'addPortfolioItem' is set
      if (addPortfolioItem === undefined || addPortfolioItem === null) {
        throw new Error("Missing the required parameter 'addPortfolioItem' when calling addPortfolioItemToPortfolio");
      }


      let pathParams = {
        'portfolio_id': portfolioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/portfolios/{portfolio_id}/portfolio_items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add Portfolio item to a portfolio
     * Add new portfolio item to an existing portfolio 
     * @param {String} portfolioId The Portfolio ID
     * @param {module:model/AddPortfolioItem} addPortfolioItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addPortfolioItemToPortfolio(portfolioId, addPortfolioItem) {
      return this.addPortfolioItemToPortfolioWithHttpInfo(portfolioId, addPortfolioItem)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add an Order Item to the Order in Pending State
     * Add an order item to the order in Pending State 
     * @param {String} orderId The Order ID
     * @param {module:model/OrderItem} orderItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addToOrderWithHttpInfo(orderId, orderItem) {
      let postBody = orderItem;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling addToOrder");
      }

      // verify the required parameter 'orderItem' is set
      if (orderItem === undefined || orderItem === null) {
        throw new Error("Missing the required parameter 'orderItem' when calling addToOrder");
      }


      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/orders/{order_id}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add an Order Item to the Order in Pending State
     * Add an order item to the order in Pending State 
     * @param {String} orderId The Order ID
     * @param {module:model/OrderItem} orderItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addToOrder(orderId, orderItem) {
      return this.addToOrderWithHttpInfo(orderId, orderItem)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing portfolio
     * Deletes the portfolio id passed in as the param. 
     * @param {String} portfolioId The Portfolio ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Portfolio} and HTTP response
     */
    destroyPortfolioWithHttpInfo(portfolioId) {
      let postBody = null;

      // verify the required parameter 'portfolioId' is set
      if (portfolioId === undefined || portfolioId === null) {
        throw new Error("Missing the required parameter 'portfolioId' when calling destroyPortfolio");
      }


      let pathParams = {
        'portfolio_id': portfolioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Portfolio;

      return this.apiClient.callApi(
        '/portfolios/{portfolio_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing portfolio
     * Deletes the portfolio id passed in as the param. 
     * @param {String} portfolioId The Portfolio ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Portfolio}
     */
    destroyPortfolio(portfolioId) {
      return this.destroyPortfolioWithHttpInfo(portfolioId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing portfolio item
     * Deletes the portfolio item id passed in as the param. 
     * @param {String} portfolioItemId The Portfolio Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    destroyPortfolioItemWithHttpInfo(portfolioItemId) {
      let postBody = null;

      // verify the required parameter 'portfolioItemId' is set
      if (portfolioItemId === undefined || portfolioItemId === null) {
        throw new Error("Missing the required parameter 'portfolioItemId' when calling destroyPortfolioItem");
      }


      let pathParams = {
        'portfolio_item_id': portfolioItemId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/portfolio_items/{portfolio_item_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing portfolio item
     * Deletes the portfolio item id passed in as the param. 
     * @param {String} portfolioItemId The Portfolio Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    destroyPortfolioItem(portfolioItemId) {
      return this.destroyPortfolioItemWithHttpInfo(portfolioItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Edit an existing portfolio
     * Returns the edited portfolio object 
     * @param {String} portfolioId The Portfolio ID
     * @param {module:model/Portfolio} portfolio 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Portfolio} and HTTP response
     */
    editPortfolioWithHttpInfo(portfolioId, portfolio) {
      let postBody = portfolio;

      // verify the required parameter 'portfolioId' is set
      if (portfolioId === undefined || portfolioId === null) {
        throw new Error("Missing the required parameter 'portfolioId' when calling editPortfolio");
      }

      // verify the required parameter 'portfolio' is set
      if (portfolio === undefined || portfolio === null) {
        throw new Error("Missing the required parameter 'portfolio' when calling editPortfolio");
      }


      let pathParams = {
        'portfolio_id': portfolioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Portfolio;

      return this.apiClient.callApi(
        '/portfolios/{portfolio_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Edit an existing portfolio
     * Returns the edited portfolio object 
     * @param {String} portfolioId The Portfolio ID
     * @param {module:model/Portfolio} portfolio 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Portfolio}
     */
    editPortfolio(portfolioId, portfolio) {
      return this.editPortfolioWithHttpInfo(portfolioId, portfolio)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetches all the service plans for a specific portfolio item, this requires a connection to the topology service.
     * Fetch all service plans for a portfolio item 
     * @param {String} portfolioItemId The Portfolio Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ServicePlan>} and HTTP response
     */
    fetchPlansWithPortfolioItemIdWithHttpInfo(portfolioItemId) {
      let postBody = null;

      // verify the required parameter 'portfolioItemId' is set
      if (portfolioItemId === undefined || portfolioItemId === null) {
        throw new Error("Missing the required parameter 'portfolioItemId' when calling fetchPlansWithPortfolioItemId");
      }


      let pathParams = {
        'portfolio_item_id': portfolioItemId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ServicePlan];

      return this.apiClient.callApi(
        '/portfolio_items/{portfolio_item_id}/service_plans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetches all the service plans for a specific portfolio item, this requires a connection to the topology service.
     * Fetch all service plans for a portfolio item 
     * @param {String} portfolioItemId The Portfolio Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServicePlan>}
     */
    fetchPlansWithPortfolioItemId(portfolioItemId) {
      return this.fetchPlansWithPortfolioItemIdWithHttpInfo(portfolioItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch a single portfolio item from a specific portfolio
     * By passing in the portfolio id and portfolio_item_id you can fetch the portfolio items in the portfolio. 
     * @param {String} portfolioId The Portfolio ID
     * @param {String} portfolioItemId The Portfolio Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortfolioItem} and HTTP response
     */
    fetchPortfolioItemFromPortfolioWithHttpInfo(portfolioId, portfolioItemId) {
      let postBody = null;

      // verify the required parameter 'portfolioId' is set
      if (portfolioId === undefined || portfolioId === null) {
        throw new Error("Missing the required parameter 'portfolioId' when calling fetchPortfolioItemFromPortfolio");
      }

      // verify the required parameter 'portfolioItemId' is set
      if (portfolioItemId === undefined || portfolioItemId === null) {
        throw new Error("Missing the required parameter 'portfolioItemId' when calling fetchPortfolioItemFromPortfolio");
      }


      let pathParams = {
        'portfolio_id': portfolioId,
        'portfolio_item_id': portfolioItemId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PortfolioItem;

      return this.apiClient.callApi(
        '/portfolios/{portfolio_id}/portfolio_items/{portfolio_item_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetch a single portfolio item from a specific portfolio
     * By passing in the portfolio id and portfolio_item_id you can fetch the portfolio items in the portfolio. 
     * @param {String} portfolioId The Portfolio ID
     * @param {String} portfolioItemId The Portfolio Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioItem}
     */
    fetchPortfolioItemFromPortfolio(portfolioId, portfolioItemId) {
      return this.fetchPortfolioItemFromPortfolioWithHttpInfo(portfolioId, portfolioItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch all portfolio items from a specific portfolio
     * By passing in the portfolio id you can fetch all the portfolio items in the portfolio. 
     * @param {String} portfolioId The Portfolio ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PortfolioItem>} and HTTP response
     */
    fetchPortfolioItemsWithPortfolioWithHttpInfo(portfolioId) {
      let postBody = null;

      // verify the required parameter 'portfolioId' is set
      if (portfolioId === undefined || portfolioId === null) {
        throw new Error("Missing the required parameter 'portfolioId' when calling fetchPortfolioItemsWithPortfolio");
      }


      let pathParams = {
        'portfolio_id': portfolioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PortfolioItem];

      return this.apiClient.callApi(
        '/portfolios/{portfolio_id}/portfolio_items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetch all portfolio items from a specific portfolio
     * By passing in the portfolio id you can fetch all the portfolio items in the portfolio. 
     * @param {String} portfolioId The Portfolio ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PortfolioItem>}
     */
    fetchPortfolioItemsWithPortfolio(portfolioId) {
      return this.fetchPortfolioItemsWithPortfolioWithHttpInfo(portfolioId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch a specific Portfolio
     * By passing in the portfolio id you can fetch a specific portfolio. 
     * @param {String} portfolioId The Portfolio ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Portfolio} and HTTP response
     */
    fetchPortfolioWithIdWithHttpInfo(portfolioId) {
      let postBody = null;

      // verify the required parameter 'portfolioId' is set
      if (portfolioId === undefined || portfolioId === null) {
        throw new Error("Missing the required parameter 'portfolioId' when calling fetchPortfolioWithId");
      }


      let pathParams = {
        'portfolio_id': portfolioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Portfolio;

      return this.apiClient.callApi(
        '/portfolios/{portfolio_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetch a specific Portfolio
     * By passing in the portfolio id you can fetch a specific portfolio. 
     * @param {String} portfolioId The Portfolio ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Portfolio}
     */
    fetchPortfolioWithId(portfolioId) {
      return this.fetchPortfolioWithIdWithHttpInfo(portfolioId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an individual order item from a given order
     * Get an order item associated with an order. 
     * @param {String} orderId The Order ID
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderItem} and HTTP response
     */
    listOrderItemWithHttpInfo(orderId, orderItemId) {
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling listOrderItem");
      }

      // verify the required parameter 'orderItemId' is set
      if (orderItemId === undefined || orderItemId === null) {
        throw new Error("Missing the required parameter 'orderItemId' when calling listOrderItem");
      }


      let pathParams = {
        'order_id': orderId,
        'order_item_id': orderItemId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderItem;

      return this.apiClient.callApi(
        '/orders/{order_id}/items/{order_item_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an individual order item from a given order
     * Get an order item associated with an order. 
     * @param {String} orderId The Order ID
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderItem}
     */
    listOrderItem(orderId, orderItemId) {
      return this.listOrderItemWithHttpInfo(orderId, orderItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of items in a given order
     * Get a list of items associated with an order. 
     * @param {String} orderId The Order ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/OrderItem>} and HTTP response
     */
    listOrderItemsWithHttpInfo(orderId) {
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling listOrderItems");
      }


      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [OrderItem];

      return this.apiClient.callApi(
        '/orders/{order_id}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of items in a given order
     * Get a list of items associated with an order. 
     * @param {String} orderId The Order ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/OrderItem>}
     */
    listOrderItems(orderId) {
      return this.listOrderItemsWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of orders
     * Get a list of orders associated with the logged in user. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Order>} and HTTP response
     */
    listOrdersWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Order];

      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of orders
     * Get a list of orders associated with the logged in user. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Order>}
     */
    listOrders() {
      return this.listOrdersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * API to list all portfolio items
     * Returns an array of portfolio item objects 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PortfolioItem>} and HTTP response
     */
    listPortfolioItemsWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PortfolioItem];

      return this.apiClient.callApi(
        '/portfolio_items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * API to list all portfolio items
     * Returns an array of portfolio item objects 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PortfolioItem>}
     */
    listPortfolioItems() {
      return this.listPortfolioItemsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * API to list portfolios
     * Returns an array of portfolio objects 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Portfolio>} and HTTP response
     */
    listPortfoliosWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Portfolio];

      return this.apiClient.callApi(
        '/portfolios', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * API to list portfolios
     * Returns an array of portfolio objects 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Portfolio>}
     */
    listPortfolios() {
      return this.listPortfoliosWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of progress messages in an item
     * Get a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages 
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ProgressMessage>} and HTTP response
     */
    listProgressMessagesWithHttpInfo(orderItemId) {
      let postBody = null;

      // verify the required parameter 'orderItemId' is set
      if (orderItemId === undefined || orderItemId === null) {
        throw new Error("Missing the required parameter 'orderItemId' when calling listProgressMessages");
      }


      let pathParams = {
        'order_item_id': orderItemId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ProgressMessage];

      return this.apiClient.callApi(
        '/order_items/{order_item_id}/progress_messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of progress messages in an item
     * Get a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages 
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ProgressMessage>}
     */
    listProgressMessages(orderItemId) {
      return this.listProgressMessagesWithHttpInfo(orderItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new order
     * Create a new order. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Order} and HTTP response
     */
    newOrderWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Order;

      return this.apiClient.callApi(
        '/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new order
     * Create a new order. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    newOrder() {
      return this.newOrderWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Submit the given order
     * Returns an updated order object 
     * @param {String} orderId The Order ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Order} and HTTP response
     */
    submitOrderWithHttpInfo(orderId) {
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling submitOrder");
      }


      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Order;

      return this.apiClient.callApi(
        '/orders/{order_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Submit the given order
     * Returns an updated order object 
     * @param {String} orderId The Order ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    submitOrder(orderId) {
      return this.submitOrderWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

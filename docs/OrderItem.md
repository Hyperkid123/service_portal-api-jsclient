# ServicePortalApi.OrderItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**count** | **Number** |  | [default to 1]
**serviceParameters** | [**Object**](.md) |  | 
**providerControlParameters** | [**Object**](.md) | The provider specific parameters needed to provision this service. This might include namespaces, special keys | 
**servicePlanRef** | **String** | Stores the Plan ref from the Topology Service | 
**portfolioItemId** | **String** | Stores the Portfolio Item ID | 
**state** | **String** | Current State of this order item | [optional] 
**createdAt** | **Date** |  | [optional] 
**orderedAt** | **Date** |  | [optional] 
**completedAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `Created` (value: `"Created"`)

* `Ordered` (value: `"Ordered"`)

* `Failed` (value: `"Failed"`)

* `Completed` (value: `"Completed"`)





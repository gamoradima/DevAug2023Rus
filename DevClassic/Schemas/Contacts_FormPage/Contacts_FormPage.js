define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "RecommendedProductList",
				"values": {
					"selectedRows": "$RecommendedProductList_SelectedRows",
					"_filterOptions": {
						"from": [
							"RecommendedProductList",
							"RecommendedProductList_SelectedRows"
						],
						"expose": []
					},
					"selectionState": "$RecommendedProductList_SelectionState",
					"_selectionOptions": {
						"attribute": "RecommendedProductList_SelectionState"
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadList",
				"values": {
					"selectedRows": "$LeadList_SelectedRows",
					"_filterOptions": {
						"from": [
							"LeadList",
							"LeadList_SelectedRows"
						],
						"expose": []
					},
					"selectionState": "$LeadList_SelectionState",
					"_selectionOptions": {
						"attribute": "LeadList_SelectionState"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityList",
				"values": {
					"selectedRows": "$OpportunityList_SelectedRows",
					"_filterOptions": {
						"from": [
							"OpportunityList",
							"OpportunityList_SelectedRows"
						],
						"expose": []
					},
					"selectionState": "$OpportunityList_SelectionState",
					"_selectionOptions": {
						"attribute": "OpportunityList_SelectionState"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OrderList",
				"values": {
					"selectedRows": "$OrderList_SelectedRows",
					"_filterOptions": {
						"from": [
							"OrderList",
							"OrderList_SelectedRows"
						],
						"expose": []
					},
					"selectionState": "$OrderList_SelectionState",
					"_selectionOptions": {
						"attribute": "OrderList_SelectionState"
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrHRID",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_7inzm6v",
					"labelPosition": "auto",
					"control": "$NumberAttribute_7inzm6v"
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"NumberAttribute_7inzm6v": {
					"modelConfig": {
						"path": "PDS.UsrHRID"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
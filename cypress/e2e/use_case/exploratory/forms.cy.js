// TEST CASES:
// 1. verify if all labels are present in each form [DONE]


// KNOWN ISSUES:
// https://github.com/boxture/oms/issues/2902: Account Contact page: state 500 (Internal Server Error)


beforeEach(() => {
    cy.login({ email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib'})
  })
  
  describe('Forms', () => {
    it('New purchase order create ', () => {
          
    // -- New purchase order create
    cy.visit('/orders/new?type=purchase_order')
    cy.url().should('include', '/orders/new?type=purchase_order')
  
    // Header - Basics
    cy.get('.form-label[for=orders_purchase_order_delivery_terms]').contains('Delivery terms')
    cy.get('.form-label[for=orders_purchase_order_customer_reference_number]').contains('Customer reference')
    cy.get('.form-label[for=orders_purchase_order_purchase_order_number]').contains('Purchase order number')
    cy.get('.form-label[for=orders_purchase_order_forwarder]').contains('Forwarder')
    cy.get('.form-label[for=orders_purchase_order_shipping_container]').contains('Shipping container')
    cy.get('.form-label[for=orders_purchase_order_destination_location_id]').contains('Destination location')
    cy.get('.form-label[for=orders_purchase_order_vendor_id]').contains('Vendor')
  
    // Header - Notes
    cy.get('.sts-tabs .tab[id^=notes]').click()
    cy.get('.form-label[for=orders_purchase_order_notes]').contains('Notes')
  
    // Lines - Basic
    cy.get('.form-label[for=orders_purchase_order_order_lines_attributes_TEMPLATE_product_id]').contains('Product')
    cy.get('.form-label[for=orders_purchase_order_order_lines_attributes_TEMPLATE_quantity]').contains('Quantity')
  
    }),
    it('New transfer order create', () => {
      
      // -- New transfer order create
      cy.visit('/orders/new?type=transfer_order')
      cy.url().should('include', '/orders/new?type=transfer_order')
  
      // Header - Basics
      cy.get('.form-label[for=orders_transfer_order_customer_reference_number]').contains('Customer reference number')
      cy.get('.form-label[for=orders_transfer_order_shipping_method_id]').contains('Shipping method')
      cy.get('.form-label[for=orders_transfer_order_destination_location_id]').contains('Destination location')
  
      // Header - Notes
      cy.get('.sts-tabs .tab[id^=notes]').click()
      cy.get('.form-label[for=orders_transfer_order_notes]').contains('Notes')
  
      // Lines - Basic
      cy.get('.form-label[for=orders_transfer_order_order_lines_attributes_TEMPLATE_product_id]').contains('Product')
      cy.get('.form-label[for=orders_transfer_order_order_lines_attributes_TEMPLATE_origin_location_id]').contains('Origin location')
      cy.get('.form-label[for=orders_transfer_order_order_lines_attributes_TEMPLATE_quantity]').contains('Quantity')
      cy.get('.form-label[for=orders_transfer_order_order_lines_attributes_TEMPLATE_status]').contains('Status')
  
    }),
    it('New sales order create', () => {
      
      // -- New sales order create
      cy.visit('/orders/new?type=sales_order')
      cy.url().should('include', '/orders/new?type=sales_order')
  
      // Header - Basics
      cy.get('.form-label[for=orders_sales_order_business_model]').contains('Business model')
      cy.get('.form-label[for=orders_sales_order_channel_id]').contains('Channel')
      cy.get('.form-label[for=orders_sales_order_ship_earliest_on]').contains('Ship earliest on')
      cy.get('.form-label[for=orders_sales_order_ship_latest_on]').contains('Ship latest on')
      cy.get('.form-label[for=orders_sales_order_delivery_terms]').contains('Delivery terms')
      cy.get('.form-label[for=orders_sales_order_customer_reference_number]').contains('Customer reference number')
      cy.get('.form-label[for=orders_sales_order_purchase_order_number]').contains('Purchase order number')
      cy.get('.form-label[for=orders_sales_order_shipping_method_id]').contains('Shipping method')
      cy.get('.form-label[for=orders_sales_order_customer_id]').contains('Customer')
  
      // Header - Notes
      cy.get('.sts-tabs .tab[id^=notes]').click()
      cy.get('.form-label[for=orders_sales_order_notes]').contains('Notes')
      cy.get('.form-label[for=orders_sales_order_packing_instructions]').contains('Packing instructions')
      cy.get('.form-label[for=orders_sales_order_gift_message]').contains('Gift message')
  
      // Header - Delivery
      cy.get('.sts-tabs .tab[id^=delivery]').click()
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_company_name]').contains('Company name')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_first_name]').contains('First name')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_last_name]').contains('Last name')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_address_lines]').contains('Address lines')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_postal_code]').contains('Postal code')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_city]').contains('City')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_state_or_province_code]').contains('State or Province')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_country_code]').contains('Country')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_phone_number]').contains('Phone number')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_fax_number]').contains('Fax number')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_email]').contains('Email')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_vatin]').contains('Vatin')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_eori_number]').contains('Eori number')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_0_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Header - Billing
      cy.get('.sts-tabs .tab[id^=billing]').click()
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_company_name]').contains('Company name')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_first_name]').contains('First name')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_last_name]').contains('Last name')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_address_lines]').contains('Address lines')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_postal_code]').contains('Postal code')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_city]').contains('City')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_state_or_province_code]').contains('State or Province')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_country_code]').contains('Country')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_phone_number]').contains('Phone number')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_fax_number]').contains('Fax number')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_email]').contains('Email')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_vatin]').contains('Vatin')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_eori_number]').contains('Eori number')
      cy.get('.form-label[for=orders_sales_order_contacts_attributes_1_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Lines - Basic
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_product_id]').contains('Product')
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_origin_location_id]').contains('Origin location')
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_quantity]').contains('Quantity')
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_price]').contains('Price')
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_price_currency]').contains('Price currency')
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_tax]').contains('Tax')
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_discount]').contains('Discount')
  
      // Lines - Customs
      cy.get('.sts-tabs .tab[id^=customs]').click()
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_customs_description]').contains('Customs description')
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_customs_value]').contains('Customs value')
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_customs_value_currency]').contains('Customs value currency')
      
      // Lines - Insurance
      cy.get('.sts-tabs .tab[id^=insurance]').click()
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_declared_value]').contains('Declared value')
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_declared_value_currency]').contains('Declared value currency')
  
      // Lines - Other
      cy.get('.sts-tabs .tab[id^=other]').click()
      cy.get('.form-label[for=orders_sales_order_order_lines_attributes_TEMPLATE_description]').contains('Description')
  
    }),
    it('New return order create', () => {
  
      cy.visit('/orders/new?type=return_order')
      cy.url().should('include', '/orders/new?type=return_order')
  
      // Header - Basics
      cy.get('.form-label[for=orders_return_order_related_order_id]').contains('Related order')
      cy.get('.form-label[for=orders_return_order_customer_reference_number]').contains('Customer reference number')
      cy.get('.form-label[for=orders_return_order_delivery_terms]').contains('Delivery terms')
      cy.get('.form-label[for=orders_return_order_reason_id]').contains('Reason')
      cy.get('.form-label[for=orders_return_order_shipping_method_id]').contains('Shipping method')
      cy.get('.form-label[for=orders_return_order_customer_id]').contains('Customer')
      cy.get('.form-label[for=orders_return_order_destination_location_id]').contains('Destination location')
  
      // Header - Notes
      cy.get('.sts-tabs .tab[id^=notes]').click()
      cy.get('.form-label[for=orders_return_order_notes]').contains('Notes')
  
      // Header - Pickup
      cy.get('.sts-tabs .tab[id^=pickup]').click()
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_company_name]').contains('Company name')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_first_name]').contains('First name')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_last_name]').contains('Last name')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_address_lines]').contains('Address lines')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_postal_code]').contains('Postal code')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_city]').contains('City')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_state_or_province_code]').contains('State or Province')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_country_code]').contains('Country')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_phone_number]').contains('Phone number')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_email]').contains('Email')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_vatin]').contains('Vatin')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_eori_number]').contains('Eori number')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_0_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Header - Pickup
      cy.get('.sts-tabs .tab[id^=billing]').click()
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_company_name]').contains('Company name')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_first_name]').contains('First name')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_last_name]').contains('Last name')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_address_lines]').contains('Address lines')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_postal_code]').contains('Postal code')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_city]').contains('City')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_state_or_province_code]').contains('State or Province')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_country_code]').contains('Country')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_phone_number]').contains('Phone number')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_email]').contains('Email')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_vatin]').contains('Vatin')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_eori_number]').contains('Eori number')
      cy.get('.form-label[for=orders_return_order_contacts_attributes_1_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Lines - Basic
      cy.get('.form-label[for=orders_return_order_order_lines_attributes_TEMPLATE_product_id]').contains('Product')
      cy.get('.form-label[for=orders_return_order_order_lines_attributes_TEMPLATE_quantity]').contains('Quantity')
      cy.get('.form-label[for=orders_return_order_order_lines_attributes_TEMPLATE_status]').contains('Status')
  
    }),
    it('New scrap order create', () => {
  
      cy.visit('/orders/new?type=scrap_order')
      cy.url().should('include', '/orders/new?type=scrap_order')
  
      cy.get('.form-label[for=orders_scrap_order_customer_reference_number]').contains('Customer reference number')
      cy.get('.form-label[for=orders_scrap_order_shipping_method_id]').contains('Shipping method')
      cy.get('.form-label[for=orders_scrap_order_vendor_id]').contains('Vendor')
      
      // Header - Notes
      cy.get('.sts-tabs .tab[id^=notes]').click()
      cy.get('.form-label[for=orders_scrap_order_notes]').contains('Notes')
  
      // Lines - Basic
      cy.get('.form-label[for=orders_scrap_order_order_lines_attributes_TEMPLATE_product_id]').contains('Product')
      cy.get('.form-label[for=orders_scrap_order_order_lines_attributes_TEMPLATE_origin_location_id]').contains('Origin location')
      cy.get('.form-label[for=orders_scrap_order_order_lines_attributes_TEMPLATE_quantity]').contains('Quantity')
      cy.get('.form-label[for=orders_scrap_order_order_lines_attributes_TEMPLATE_status]').contains('Status')
  
    }),
    it('Containers create', () => {
      
      // -- Containers create
      cy.visit('/containers/new')
      cy.url().should('include', '/containers/new')
  
      // Attributes
      cy.get('.form-label[for=container_packing_material_id]').contains('Packing material')
      cy.get('.form-label[for=container_bin_location_id]').contains('Bin location')
      cy.get('.form-label[for=container_parent_id]').contains('In container')
      cy.get('.form-label[for=container_license_plate_attributes_name]').contains('License plate')
  
      // Meta data
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=container_notes]').contains('Notes')
      cy.get('.form-label[for=container_metadata_yaml]').contains('Metadata')
  
    }),
    it('Products create', () => {
      
      // -- Product create
      cy.visit('/products/new')
      cy.url().should('include', '/products/new')
  
      // Attributes
      cy.get('.form-label[for=product_product_category_id]').contains('Product category')
      cy.get('.form-label[for=product_number]').contains('Number')
      cy.get('.form-label[for=product_ean_or_upc]').contains('Ean or upc')
      cy.get('.form-label[for=product_name]').contains('Name')
      cy.get('.form-label[for=product_description]').contains('Description')
      cy.get('.form-label[for=product_vendor_id]').contains('Vendor')
      cy.get('.form-label[for=product_un_number]').contains('Un number')
      cy.get('.form-label[for=product_scannable]').contains('Scannable')
      cy.get('.form-label[for=product_expirable]').contains('Expirable')
      cy.get('.form-label[for=product_inventoriable]').contains('Inventoriable')
      cy.get('.form-label[for=product_setup_complete]').contains('Setup complete')
      cy.get('.form-label[for=product_insert]').contains('Insert')
      cy.get('.form-label[for=product_lot_tracked]').contains('Lot tracked')
      cy.get('.form-label[for=product_serialized]').contains('Serialized')
  
      // Aliases
      cy.get('.sts-tabs .tab[id^=aliases]').click()        
      cy.get('.form-label[for=product_product_aliases_attributes_TEMPLATE_channel_id]').contains('Channel')
      cy.get('.form-label[for=product_product_aliases_attributes_TEMPLATE_number]').contains('Number')
      cy.get('.form-label[for=product_product_aliases_attributes_TEMPLATE_ean_or_upc]').contains('Ean or upc')
      cy.get('.form-label[for=product_product_aliases_attributes_TEMPLATE_metadata_yaml]').contains('Metadata')
  
      // Kitting
      cy.get('.sts-tabs .tab[id^=kitting]').click()
      cy.get('.form-label[for=product_product_components_attributes_TEMPLATE_component_product_id]').contains('Component product')
      cy.get('.form-label[for=product_product_components_attributes_TEMPLATE_quantity]').contains('Quantity')
  
      // Packaging
      cy.get('.sts-tabs .tab[id^=packaging]').click()
      cy.get('.form-label[for=product_product_packagings_attributes_TEMPLATE_location_id]').contains('Location')
      cy.get('.form-label[for=product_product_packagings_attributes_TEMPLATE_packing_material_id]').contains('Packing material')
  
      // Warehousing
      cy.get('.sts-tabs .tab[id^=warehousing]').click()
      cy.get('.form-label[for=product_product_storages_attributes_TEMPLATE_location_id]').contains('Location')
      cy.get('.form-label[for=product_product_storages_attributes_TEMPLATE_standard_bin_location_id]').contains('Standard bin location')
      cy.get('.form-label[for=product_uom]').contains('Uom')
      cy.get('.form-label[for=product_quantity_inner_pack]').contains('Quantity inner pack')
      cy.get('.form-label[for=product_quantity_pallet').contains('Quantity pallet')
      cy.get('.form-label[for=product_quantity_case]').contains('Quantity case')
      cy.get('.form-label[for=product_inner_pack_type_id]').contains('Inner pack type')
      cy.get('.form-label[for=product_case_type_id]').contains('Case type')
      cy.get('.form-label[for=product_quantity_inner_packs_per_case]').contains('Quantity inner packs per case')
      cy.get('.form-label[for=product_quantity_cases_per_layer]').contains('Quantity cases per layer')
      cy.get('.form-label[for=product_quantity_inner_packs_per_case]').contains('Quantity inner packs per case') //how to distinguise these two fiels different fields with the same name.
      cy.get('.form-label[for=product_quantity_cases_per_layer]').contains('Quantity cases per layer') //how to distinguise these two fiels different fields with the same name.
      cy.get('.form-label[for=product_quantity_layers_per_pallet]').contains('Quantity layers per pallet')
  
      // Pricing
      cy.get('.sts-tabs .tab[id^=pricing]').click()
      cy.get('.form-label[for=product_cost_price]').contains('Cost price')
      cy.get('.form-label[for=product_cost_price_currency]').contains('Cost price currency')
      cy.get('.form-label[for=product_product_pricings_attributes_TEMPLATE_country_code]').contains('Country code')
      cy.get('.form-label[for=product_product_pricings_attributes_TEMPLATE_price]').contains('Price')
      cy.get('.form-label[for=product_product_pricings_attributes_TEMPLATE_price_currency]').contains('Price currency')
  
      // Dimensions and Weight
      cy.get('.sts-tabs .tab[id^=dimensions_and_weight]').click()
      cy.get('.form-label[for=product_weight]').contains('Weight')
      cy.get('.form-label[for=product_weight_unit]').contains('Weight unit')
      cy.get('.form-label[for=product_width]').contains('Width')
      cy.get('.form-label[for=product_height]').contains('Height')
      cy.get('.form-label[for=product_length]').contains('Length')
      cy.get('.form-label[for=product_dimensions_unit]').contains('Dimensions unit')
  
      // Customs
      cy.get('.sts-tabs .tab[id^=customs]').click()
      cy.get('.form-label[for=product_hs_code]').contains('Hs code')
      cy.get('.form-label[for=product_eccn]').contains('Eccn')
      cy.get('.form-label[for=product_origin_country_code]').contains('Origin Country')
      cy.get('.form-label[for=product_customs_value]').contains('Customs value')
      cy.get('.form-label[for=product_customs_value_currency]').contains('Customs value currency')
      cy.get('.form-label[for=product_customs_description]').contains('Customs description')
  
      // Meta Data
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=product_notes]').contains('Notes')
      cy.get('.form-label[for=product_metadata_yaml]').contains('Metadata')
  
      // Inventory Item Properties
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=product_inventory_item_properties_config_properties_attributes_TEMPLATE_type]').contains('Type')
      cy.get('.form-label[for=product_inventory_item_properties_config_properties_attributes_TEMPLATE_name]').contains('Name')
      cy.get('.form-label[for=product_inventory_item_properties_config_properties_attributes_TEMPLATE_required]').contains('Required')
      cy.get('.form-label[for=product_inventory_item_properties_config_properties_attributes_TEMPLATE_array]').contains('Array')
      cy.get('.form-label[for=product_inventory_item_properties_config_properties_attributes_TEMPLATE_collection]').contains('Collection')
  
    }),
    it('Products category create', () => {
  
      // -- Product category create
      cy.visit('/product_categories/new')
      cy.url().should('include', '/product_categories/new')
  
      // Attributes
      cy.get('.form-label[for=product_category_name').contains('Name')
      cy.get('.form-label[for=product_category_description').contains('Description')
  
      // Meta Data
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=product_category_notes').contains('Notes')
      cy.get('.form-label[for=product_category_metadata_yaml').contains('Metadata')
  
    }),
    it('Customer create', () => {
  
      // -- Customer create
      cy.visit('/customers/new')
      cy.url().should('include', '/customers/new')
  
      // Attributes
      cy.get('.form-label[for=customer_name').contains('Name')
      cy.get('.form-label[for=customer_contacts_attributes_0_company_name').contains('Company name')
      cy.get('.form-label[for=customer_contacts_attributes_0_first_name').contains('First name')
      cy.get('.form-label[for=customer_contacts_attributes_0_last_name').contains('Last name')
      cy.get('.form-label[for=customer_contacts_attributes_0_address_lines').contains('Address lines')
      cy.get('.form-label[for=customer_contacts_attributes_0_postal_code').contains('Postal code')
      cy.get('.form-label[for=customer_contacts_attributes_0_city').contains('City')
      cy.get('.form-label[for=customer_contacts_attributes_0_state_or_province_code').contains('State or Province')
      cy.get('.form-label[for=customer_contacts_attributes_0_country_code').contains('Country')
      cy.get('.form-label[for=customer_contacts_attributes_0_phone_number').contains('Phone number')
      cy.get('.form-label[for=customer_contacts_attributes_0_fax_number').contains('Fax number')
      cy.get('.form-label[for=customer_contacts_attributes_0_email').contains('Email')
      cy.get('.form-label[for=customer_contacts_attributes_0_vatin').contains('Vatin')
      cy.get('.form-label[for=customer_contacts_attributes_0_eori_number]').contains('Eori number')
      cy.get('.form-label[for=customer_contacts_attributes_0_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Billing Contact
      cy.get('.sts-tabs .tab[id^=billing_contact]').click()
      cy.get('.form-label[for=customer_name').contains('Name')
      cy.get('.form-label[for=customer_contacts_attributes_1_company_name').contains('Company name')
      cy.get('.form-label[for=customer_contacts_attributes_1_first_name').contains('First name')
      cy.get('.form-label[for=customer_contacts_attributes_1_last_name').contains('Last name')
      cy.get('.form-label[for=customer_contacts_attributes_1_address_lines').contains('Address lines')
      cy.get('.form-label[for=customer_contacts_attributes_1_postal_code').contains('Postal code')
      cy.get('.form-label[for=customer_contacts_attributes_1_city').contains('City')
      cy.get('.form-label[for=customer_contacts_attributes_1_state_or_province_code').contains('State or Province')
      cy.get('.form-label[for=customer_contacts_attributes_1_country_code').contains('Country')
      cy.get('.form-label[for=customer_contacts_attributes_1_phone_number').contains('Phone number')
      cy.get('.form-label[for=customer_contacts_attributes_1_fax_number').contains('Fax number')
      cy.get('.form-label[for=customer_contacts_attributes_1_email').contains('Email')
      cy.get('.form-label[for=customer_contacts_attributes_1_vatin').contains('Vatin')
      cy.get('.form-label[for=customer_contacts_attributes_1_eori_number]').contains('Eori number')
      cy.get('.form-label[for=customer_contacts_attributes_1_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Meta Data
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=customer_metadata_yaml]').contains('Metadata')
      cy.get('.form-label[for=customer_notes]').contains('Notes')
  
    }),
    it('Vendor create', () => {
      
      // -- Vendor create
      cy.visit('/vendors/new')
      cy.url().should('include', '/vendors/new')
  
      // Attributes
      cy.get('.form-label[for=vendor_name').contains('Name')
      cy.get('.form-label[for=vendor_contacts_attributes_0_company_name').contains('Company name')
      cy.get('.form-label[for=vendor_contacts_attributes_0_first_name').contains('First name')
      cy.get('.form-label[for=vendor_contacts_attributes_0_last_name').contains('Last name')
      cy.get('.form-label[for=vendor_contacts_attributes_0_address_lines').contains('Address lines')
      cy.get('.form-label[for=vendor_contacts_attributes_0_postal_code').contains('Postal code')
      cy.get('.form-label[for=vendor_contacts_attributes_0_city').contains('City')
      cy.get('.form-label[for=vendor_contacts_attributes_0_state_or_province_code').contains('State or Province')
      cy.get('.form-label[for=vendor_contacts_attributes_0_country_code').contains('Country')
      cy.get('.form-label[for=vendor_contacts_attributes_0_phone_number').contains('Phone number')
      cy.get('.form-label[for=vendor_contacts_attributes_0_fax_number').contains('Fax number')
      cy.get('.form-label[for=vendor_contacts_attributes_0_email').contains('Email')
      cy.get('.form-label[for=vendor_contacts_attributes_0_vatin').contains('Vatin')
      cy.get('.form-label[for=vendor_contacts_attributes_0_eori_number]').contains('Eori number')
      cy.get('.form-label[for=vendor_contacts_attributes_0_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Billing Contact
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=vendor_name').contains('Name')
      cy.get('.form-label[for=vendor_contacts_attributes_1_company_name').contains('Company name')
      cy.get('.form-label[for=vendor_contacts_attributes_1_first_name').contains('First name')
      cy.get('.form-label[for=vendor_contacts_attributes_1_last_name').contains('Last name')
      cy.get('.form-label[for=vendor_contacts_attributes_1_address_lines').contains('Address lines')
      cy.get('.form-label[for=vendor_contacts_attributes_1_postal_code').contains('Postal code')
      cy.get('.form-label[for=vendor_contacts_attributes_1_city').contains('City')
      cy.get('.form-label[for=vendor_contacts_attributes_1_state_or_province_code').contains('State or Province')
      cy.get('.form-label[for=vendor_contacts_attributes_1_country_code').contains('Country')
      cy.get('.form-label[for=vendor_contacts_attributes_1_phone_number').contains('Phone number')
      cy.get('.form-label[for=vendor_contacts_attributes_1_fax_number').contains('Fax number')
      cy.get('.form-label[for=vendor_contacts_attributes_1_email').contains('Email')
      cy.get('.form-label[for=vendor_contacts_attributes_1_vatin').contains('Vatin')
      cy.get('.form-label[for=vendor_contacts_attributes_1_eori_number]').contains('Eori number')
      cy.get('.form-label[for=vendor_contacts_attributes_1_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Meta Data
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=vendor_notes]').contains('Notes')
      cy.get('.form-label[for=vendor_metadata_yaml]').contains('Metadata')
  
    }),
    it('Tickets create', () => {
      
      // -- Tickets create
      cy.visit('/tickets/new')
      cy.url().should('include', '/tickets/new')
      
      cy.get('.form-label[for=ticket_subject]').contains('Subject')
      cy.get('.form-label[for=ticket_comments_attributes_0_content]').contains('Description')
      // Find out why right side is not present in browser and how to .get the Tasks elements
  
    }),
    it('Group create', () => {
      
      // -- Groups create
      cy.visit('/agent/groups/new')
      cy.url().should('include', '/agent/groups/new')
  
      cy.get('.form-label[for=group_name]').contains('Name')
      cy.get('.form-label[for=group_owner_id]').contains('Owner')
  
    }),
    it('Contact create', () => {
              
      // -- Contacts create
      cy.visit('/agent/contacts/new')
      cy.url().should('include', '/agent/contacts/new')
  
      cy.get('.form-label[for=contact_name]').contains('Name')
      cy.get('.form-label[for=contact_email]').contains('Email')
      cy.get('.form-label[for=contact_twitter]').contains('Twitter')
      cy.get('.form-label[for=contact_phone]').contains('Phone')
      cy.get('.form-label[for=contact_organization_id]').contains('Organization')
      cy.get('.form-label[for=contact_group_id]').contains('Group')
      cy.get('.form-label[for=contact_suspended]').contains('Suspended')
      cy.get('.form-label[for=contact_time_zone]').contains('Time zone')
  
    }),
    it('Accounts create', () => {
      
      // -- Accounts create - #2902
      cy.visit('/admin/accounts/new')
      cy.url().should('include', '/admin/accounts/new')
  
      cy.get('.form-label[for=account_logo]').contains('Logo')
      cy.get('.form-label[for=account_code]').contains('Code')
      cy.get('.form-label[for=account_name]').contains('Name')
      cy.get('.form-label[for=account_url]').contains('Url')
      cy.get('.form-label[for=account_gln]').contains('Gln')
      cy.get('.form-label[for=account_contacts_attributes_0_company_name]').contains('Company name')
      cy.get('.form-label[for=account_contacts_attributes_0_first_name]').contains('First name')
      cy.get('.form-label[for=account_contacts_attributes_0_last_name]').contains('Last name')
      cy.get('.form-label[for=account_contacts_attributes_0_address_lines]').contains('Address lines')
      cy.get('.form-label[for=account_contacts_attributes_0_postal_code]').contains('Postal code')
      cy.get('.form-label[for=account_contacts_attributes_0_city]').contains('City')
      cy.get('.form-label[for=account_contacts_attributes_0_state_or_province_code]').contains('State or Province')
      cy.get('.form-label[for=account_contacts_attributes_0_country_code]').contains('Country')
      cy.get('.form-label[for=account_contacts_attributes_0_phone_number]').contains('Phone number')
      cy.get('.form-label[for=account_contacts_attributes_0_fax_number]').contains('Fax number')
      cy.get('.form-label[for=account_contacts_attributes_0_email]').contains('Email')
      cy.get('.form-label[for=account_contacts_attributes_0_vatin]').contains('Vatin')
      cy.get('.form-label[for=account_contacts_attributes_0_eori_number]').contains('Eori number')
      cy.get('.form-label[for=account_contacts_attributes_0_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Billing contact
      cy.get('.sts-tabs .tab[id^=billing_contact]').click()
      cy.get('.form-label[for=account_contacts_attributes_1_company_name]').contains('Company name')
      cy.get('.form-label[for=account_contacts_attributes_1_first_name]').contains('First name')
      cy.get('.form-label[for=account_contacts_attributes_1_last_name]').contains('Last name')
      cy.get('.form-label[for=account_contacts_attributes_1_address_lines]').contains('Address lines')
      cy.get('.form-label[for=account_contacts_attributes_1_postal_code]').contains('Postal code')
      cy.get('.form-label[for=account_contacts_attributes_1_city]').contains('City')
      cy.get('.form-label[for=account_contacts_attributes_1_state_or_province_code]').contains('State or Province')
      cy.get('.form-label[for=account_contacts_attributes_1_country_code]').contains('Country')
      cy.get('.form-label[for=account_contacts_attributes_1_phone_number]').contains('Phone number')
      cy.get('.form-label[for=account_contacts_attributes_1_fax_number]').contains('Fax number')
      cy.get('.form-label[for=account_contacts_attributes_1_email]').contains('Email')
      cy.get('.form-label[for=account_contacts_attributes_1_vatin]').contains('Vatin')
      cy.get('.form-label[for=account_contacts_attributes_1_eori_number]').contains('Eori number')
      cy.get('.form-label[for=account_contacts_attributes_1_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Contacts
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=account_notes]').contains('Notes')
      cy.get('.form-label[for=account_metadata_yaml]').contains('Metadata')
  
    }),
    it('Users create', () => {
      
      // -- Users create
      cy.visit('/admin/users/new')
      cy.url().should('include', '/admin/users/new')
  
      // Main
      cy.get('.form-label[for=user_avatar]').contains('Avatar')
      cy.get('.form-label[for=user_available]').contains('Available')
      cy.get('.form-label[for=user_first_name]').contains('First name')
      cy.get('.form-label[for=user_last_name]').contains('Last name')
      cy.get('.form-label[for=user_email]').contains('Email')
      cy.get('.form-label[for=user_company_name]').contains('Company name')
      cy.get('.form-label[for=user_location_id]').contains('Location')
      cy.get('.form-label[for=user_default_packing_bin_location_id]').contains('Default packing bin location')
      cy.get('.form-label[for=user_time_zone]').contains('Time zone')
      cy.get('.form-label[for=user_week_start]').contains('Start week on')
  
      // Roles
      cy.get('.sts-tabs .tab[id^=roles]').click()
      cy.get('.form-label[for=user_roles_attributes_TEMPLATE_name]').contains('role')
      cy.get('.form-label[for=user_roles_attributes_TEMPLATE_resource_id]').contains('for')
  
      // Security
      cy.get('.sts-tabs .tab[id^=security]').click()
      cy.get('.form-label[for=user_new_password]').contains('New password')
      cy.get('.form-label[for=user_new_password_confirmation]').contains('New password confirmation')
      cy.get('.form-label[for=user_accessible_location_ids]').contains('Accessible location ids')
  
    }),
    it('Shipping methods create', () => {
      
      // -- Shipping methods create
      cy.visit('/admin/shipping_methods/new')
      cy.url().should('include', '/admin/shipping_methods/new')
  
      // Attributes
      cy.get('.form-label[for=shipping_method_carrier_id]').contains('Carrier')
      cy.get('.form-label[for=shipping_method_service_type_id]').contains('Service type')
      cy.get('.form-label[for=shipping_method_available_for_account_ids]').contains('Available for account ids')
      cy.get('.form-label[for=shipping_method_code]').contains('Code')
      cy.get('.form-label[for=shipping_method_name]').contains('Name')
      cy.get('.form-label[for=shipping_method_default_packing_material_id]').contains('Default packing material')
  
      // Meta Data
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=shipping_method_notes]').contains('Notes')
      cy.get('.form-label[for=shipping_method_metadata_yaml]').contains('Metadata')
  
    }),
    it('Holiday create', () => {
              
      // -- Holidays create
      cy.visit('/admin/holidays/new')
      cy.url().should('include', '/admin/holidays/new')
  
      cy.get('.form-label[for=holiday_location_id]').contains('Location')
      cy.get('.form-label[for=holiday_description]').contains('Description')
      cy.get('.form-label[for=holiday_start_on]').contains('Start on')
      cy.get('.form-label[for=holiday_end_on]').contains('End on')
  
    }),
    it('Reasons create', () => {
          
      // -- Reasons create
      cy.visit('/admin/reasons/new')
      cy.url().should('include', '/admin/reasons/new')
  
      cy.get('.form-label[for=reason_use]').contains('Use')
      cy.get('.form-label[for=reason_name]').contains('Name')
      cy.get('.form-label[for=reason_description]').contains('Description')
      cy.get('.form-label[for=reason_available_for_account_ids]').contains('Available for account ids')
  
    }),
    it('Locations create', () => {
              
      // -- Location create
      cy.visit('/admin/locations/new')
      cy.url().should('include', '/admin/locations/new')
  
      // Attributes
      cy.get('.form-label[for=location_name]').contains('Name')
      cy.get('.form-label[for=location_accessible_by_account_ids]').contains('Accessible by accounts')
      cy.get('.form-label[for=location_time_zone]').contains('Time zone')
  
      // Contact
      cy.get('.sts-tabs .tab[id^=contact]').click()
      cy.get('.form-label[for=location_contacts_attributes_0_company_name]').contains('Company name')
      cy.get('.form-label[for=location_contacts_attributes_0_first_name]').contains('First name')
      cy.get('.form-label[for=location_contacts_attributes_0_last_name]').contains('Last name')
      cy.get('.form-label[for=location_contacts_attributes_0_address_lines]').contains('Address lines')
      cy.get('.form-label[for=location_contacts_attributes_0_postal_code]').contains('Postal code')
      cy.get('.form-label[for=location_contacts_attributes_0_city]').contains('City')
      cy.get('.form-label[for=location_contacts_attributes_0_state_or_province_code]').contains('State or Province')
      cy.get('.form-label[for=location_contacts_attributes_0_country_code]').contains('Country')
      cy.get('.form-label[for=location_contacts_attributes_0_phone_number]').contains('Phone number')
      cy.get('.form-label[for=location_contacts_attributes_0_fax_number]').contains('Fax number')
      cy.get('.form-label[for=location_contacts_attributes_0_email]').contains('Email')
      cy.get('.form-label[for=location_contacts_attributes_0_vatin]').contains('Vatin')
      cy.get('.form-label[for=location_contacts_attributes_0_eori_number]').contains('Eori number')
      cy.get('.form-label[for=location_contacts_attributes_0_chamber_of_commerce_number]').contains('Chamber of commerce number')
               
      // Billing Contact
      cy.get('.sts-tabs .tab[id^=billing_contact]').click()
      cy.get('.form-label[for=location_contacts_attributes_1_company_name]').contains('Company name')
      cy.get('.form-label[for=location_contacts_attributes_1_first_name]').contains('First name')
      cy.get('.form-label[for=location_contacts_attributes_1_last_name]').contains('Last name')
      cy.get('.form-label[for=location_contacts_attributes_1_address_lines]').contains('Address lines')
      cy.get('.form-label[for=location_contacts_attributes_1_postal_code]').contains('Postal code')
      cy.get('.form-label[for=location_contacts_attributes_1_city]').contains('City')
      cy.get('.form-label[for=location_contacts_attributes_1_state_or_province_code]').contains('State or Province')
      cy.get('.form-label[for=location_contacts_attributes_1_country_code]').contains('Country')
      cy.get('.form-label[for=location_contacts_attributes_1_phone_number]').contains('Phone number')
      cy.get('.form-label[for=location_contacts_attributes_1_fax_number]').contains('Fax number')
      cy.get('.form-label[for=location_contacts_attributes_1_email]').contains('Email')
      cy.get('.form-label[for=location_contacts_attributes_1_vatin]').contains('Vatin')
      cy.get('.form-label[for=location_contacts_attributes_1_eori_number]').contains('Eori number')
      cy.get('.form-label[for=location_contacts_attributes_1_chamber_of_commerce_number]').contains('Chamber of commerce number')
  
      // Bin Management
      cy.get('.sts-tabs .tab[id^=bin_management]').click()
      cy.get('.form-label[for=location_pick_start_bin_location_id]').contains('Pick start bin location')
  
      // Meta Data
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=location_notes]').contains('Notes')
      cy.get('.form-label[for=location_metadata_yaml]').contains('Metadata')
  
    }),
    it('Bin locations create', () => {
              
      // -- Bin location create
      cy.visit('/admin/bin_locations/new')
      cy.url().should('include', '/admin/bin_locations/new')
  
      cy.get('.form-label[for=bin_location_name]').contains('Name')
      cy.get('.form-label[for=bin_location_purpose]').contains('Purpose')
      cy.get('.form-label[for=bin_location_zone]').contains('Zone')
      cy.get('.form-label[for=bin_location_walkway]').contains('Walkway')
      cy.get('.form-label[for=bin_location_aisle]').contains('Aisle')
      cy.get('.form-label[for=bin_location_rack]').contains('Rack')
      cy.get('.form-label[for=bin_location_shelf]').contains('Shelf')
      cy.get('.form-label[for=bin_location_section]').contains('Section')
      cy.get('.form-label[for=bin_location_bin]').contains('Bin')
  
      // Meta Data
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=bin_location_notes]').contains('Notes')
      cy.get('.form-label[for=bin_location_metadata_yaml]').contains('Metadata')
  
    }),
    it('Tote create', () => {
              
      // -- Tote create
      cy.visit('/admin/totes/new')
      cy.url().should('include', '/admin/totes/new')
  
      cy.get('.form-label[for=tote_name]').contains('Name')
      cy.get('.form-label[for=tote_weight]').contains('Weight')
      cy.get('.form-label[for=tote_weight_unit]').contains('Weight unit')
  
    }),
    it('Packing material create', () => {
              
      // -- Packing material create
      cy.visit('/admin/packing_materials/new')
      cy.url().should('include', '/admin/packing_materials/new')
  
      cy.get('.form-label[for=packing_material_number]').contains('Number')
      cy.get('.form-label[for=packing_material_name]').contains('Name')
      cy.get('.form-label[for=packing_material_level]').contains('Level')
      cy.get('.form-label[for=packing_material_pickable]').contains('Pickable')
      cy.get('.form-label[for=packing_material_physical_packaging]').contains('Physical packaging')
      cy.get('.form-label[for=packing_material_physical_qualifier]').contains('Physical qualifier')
      cy.get('.form-label[for=packing_material_description]').contains('Description')
      cy.get('.form-label[for=packing_material_weight]').contains('Weight')
      cy.get('.form-label[for=packing_material_weight_unit]').contains('Weight unit')
      cy.get('.form-label[for=packing_material_length]').contains('Length')
      cy.get('.form-label[for=packing_material_width]').contains('Width')
      cy.get('.form-label[for=packing_material_height]').contains('Height')
      cy.get('.form-label[for=packing_material_dimensions_unit]').contains('Dimensions unit')
  
      // Meta Data
      cy.get('.sts-tabs .tab[id^=meta_data]').click()
      cy.get('.form-label[for=packing_material_notes]').contains('Notes')
      cy.get('.form-label[for=packing_material_metadata_yaml]').contains('Metadata')
  
    }),
    it('Flows create', () => {
              
      // -- Flows create
      cy.visit('/integration/flows/new')
      cy.url().should('include', '/integration/flows/new')
  
      // Basic
      cy.get('.form-label[for=flow_enabled]').contains('Enabled')
      cy.get('.form-label[for=flow_metadata_account_id]').contains('Account')
      cy.get('.form-label[for=flow_name]').contains('Name')
      cy.get('.form-label[for=flow_description]').contains('Description')
      cy.get('.form-label[for=flow_extract_template]').contains('Extract template')
      cy.get('.form-label[for=flow_klass]').contains('Klass')
      cy.get('.form-label[for=flow_event]').contains('Event')
      cy.get('.form-label[for=flow_cron]').contains('Cron')
      cy.get('.form-label[for=flow_metadata_yaml]').contains('Metadata yaml')
  
      // Steps
      cy.get('.sts-tabs .tab[id^=steps]').click()
  
      // Yaml
      cy.get('.sts-tabs .tab[id^=yaml]').click()
  
    }),
    it('Credentials create', () => {
              
      // -- Credentials create
      cy.visit('/integration/credentials/new')
      cy.url().should('include', '/integration/credentials/new')
  
      cy.get('.form-label[for=credential_metadata_account_id]').contains('Account')
      cy.get('.form-label[for=credential_key]').contains('Key')
      cy.get('.form-label[for=credential_description]').contains('Description')
      cy.get('.form-label[for=credential_data_yaml]').contains('Data yaml')
  
    }),
    it('Applications create', () => {
          
      // -- Applications create
      cy.visit('/oauth/applications/new')
      cy.url().should('include', '/oauth/applications/new')
  
      // Main
      cy.get('.form-label[for=doorkeeper_application_name]').contains('Name')
      cy.get('.form-label[for=doorkeeper_application_redirect_uri]').contains('Redirect URI')
      cy.get('.form-label[for=doorkeeper_application_confidential]').contains('Confidential')
      cy.get('.form-label[for=doorkeeper_application_scopes]').contains('Scopes')
  
      // Authorized
      //cy.get('span#tab_label_8138783e-7656-4085-888e-dc408f684909').click()
      cy.get('.translation_missing').contains('Authorized').click()
  
    }),
    it('Third party create Netsuite', () => {
              
      // -- Third party create Netsuite
      cy.visit('/admin/integrations/new?type=netsuite')
      cy.url().should('include', '/admin/integrations/new?type=netsuite')
  
      // Basic
      cy.get('.form-label[for=integrations_netsuite_name]').contains('Name')
      cy.get('.form-label[for=integrations_netsuite_endpoint]').contains('Endpoint')
      cy.get('.form-label[for=integrations_netsuite_consumer_key]').contains('Consumer key')
      cy.get('.form-label[for=integrations_netsuite_consumer_secret]').contains('Consumer secret')
      cy.get('.form-label[for=integrations_netsuite_user_id]').contains('User')
      cy.get('.form-label[for=integrations_netsuite_token_id]').contains('Token')
      cy.get('.form-label[for=integrations_netsuite_token_secret]').contains('Token secret')
      cy.get('.form-label[for=integrations_netsuite_role]').contains('Role')
      cy.get('.form-label[for=integrations_netsuite_integration_account]').contains('Integration account')
      cy.get('.form-label[for=integrations_netsuite_create_invoice]').contains('Create invoice')
      cy.get('.form-label[for=integrations_netsuite_inbound_process]').contains('Inbound process')
      cy.get('.form-label[for=integrations_netsuite_outbound_process]').contains('Outbound process')
      cy.get('.form-label[for=integrations_netsuite_transfer_process]').contains('Transfer process')
      cy.get('.form-label[for=integrations_netsuite_sales_order_search_yaml]').contains('Sales Order Search')
      cy.get('.form-label[for=integrations_netsuite_purchase_order_search_yaml]').contains('Purchase Order Search')
      cy.get('.form-label[for=integrations_netsuite_transfer_order_search_yaml]').contains('Transfer Order Search')
      cy.get('.form-label[for=integrations_netsuite_metadata_yaml]').contains('Metadata')
  
    }),
    it('Third party create Woocommerce', () => {
              
      // -- Third party create Woocommerce
      cy.visit('/admin/integrations/new?type=woocommerce')
      cy.url().should('include', '/admin/integrations/new?type=woocommerce')
  
      // Basic
      cy.get('.form-label[for=integrations_woocommerce_name]').contains('Name')
      cy.get('.form-label[for=integrations_woocommerce_endpoint]').contains('Endpoint')
      cy.get('.form-label[for=integrations_woocommerce_consumer_key]').contains('Consumer key')
      cy.get('.form-label[for=integrations_woocommerce_consumer_secret]').contains('Consumer secret')
      cy.get('.form-label[for=integrations_woocommerce_user_id]').contains('User')
      cy.get('.form-label[for=integrations_woocommerce_metadata_yaml]').contains('Metadata')
  
    }),
    it('Messaging template create', () => {
              
      // -- Messaging template create
      cy.visit('/messaging/admin/templates/new')
      cy.url().should('include', '/messaging/admin/templates/new')
  
      // Edit
      cy.get('.form-label[for=template_enabled]').contains('Enabled')
      cy.get('.form-label[for=template_description]').contains('Description')
      cy.get('.form-label[for=template_klass]').contains('Klass')
      cy.get('.form-label[for=template_event]').contains('Event')
      cy.get('.form-label[for=template_transport]').contains('Transport')
      cy.get('.form-label[for=template_from]').contains('From')
      cy.get('.form-label[for=template_subject]').contains('Subject')
      cy.get('.form-label[for=template_layout_id]').contains('Layout')
      cy.get('.form-label[for=template_html]').contains('Html')
      cy.get('.form-label[for=template_metadata_yaml]').contains('Metadata')
  
    }),
    it('Messaging layout create', () => {
              
      // -- Messaging layout create
      cy.visit('/messaging/admin/layouts/new')
      cy.url().should('include', '/messaging/admin/layouts/new')
  
      // Edit
      cy.get('.form-label[for=layout_name]').contains('Name')
      cy.get('.form-label[for=layout_data]').contains('Data')
  
      cy.get('.sts-tabs .tab[id^=metadata]').click()
      cy.get('.form-label[for=layout_metadata_yaml]').contains('Metadata')
  
    }),
    it('Messaging locale create', () => {
              
      // -- Messaging locale create
      cy.visit('/messaging/admin/locales/new')
      cy.url().should('include', '/messaging/admin/locales/new')
  
      cy.get('.form-label[for=locale_key]').contains('Key')
      cy.get('.form-label[for=locale_data_yaml]').contains('Data')
      cy.get('.form-label[for=locale_metadata_yaml]').contains('Metadata')
  
    }),
    it('Messaging campaigns create', () => {
      
      // -- Messaging campaigns create
      cy.visit('/messaging/admin/campaigns/new')
      cy.url().should('include', '/messaging/admin/campaigns/new')
  
      cy.get('.form-label[for=campaign_name]').contains('Name')
      cy.get('.form-label[for=campaign_transport]').contains('Transport')
      cy.get('.form-label[for=campaign_layout_id]').contains('Layout')
      cy.get('.form-label[for=campaign_list_id]').contains('List')
      cy.get('.form-label[for=campaign_from]').contains('From')
      cy.get('.form-label[for=campaign_subject]').contains('Subject')
  
    }),
    it('Messaging list create', () => {
              
      // -- Messaging list create
      cy.visit('/messaging/admin/lists/new')
      cy.url().should('include', '/messaging/admin/lists/new')
  
      // Edit
      cy.get('.form-label[for=list_name]').contains('Name')
  
    }),
    it('Papers template create', () => {
              
      // -- Papers template create
      cy.visit('/papers/admin/templates/new')
      cy.url().should('include', '/papers/admin/templates/new')
  
      // Basics
      cy.get('.form-label[for=template_enabled]').contains('Enabled')
      cy.get('.form-label[for=template_metadata_account_id]').contains('Account')
      cy.get('.form-label[for=template_description]').contains('Description')
      cy.get('.form-label[for=template_purpose]').contains('Purpose')
      cy.get('.form-label[for=template_kind]').contains('Kind')
      cy.get('.form-label[for=template_use]').contains('Use')
      cy.get('.form-label[for=template_copies]').contains('Copies')
      cy.get('.form-label[for=template_klass]').contains('Klass')
      cy.get('.form-label[for=template_event]').contains('Event')
      cy.get('.form-label[for=template_condition]').contains('Condition')
      cy.get('.form-label[for=template_file_name_template]').contains('File name template')
      cy.get('.form-label[for=template_data]').contains('Data')
  
      // Media
      cy.get('.sts-tabs .tab[id^=media]').click()
  
      // Example Data
      cy.get('.sts-tabs .tab[id^=example_data]').click()
  
      // Meta Data
      cy.get('.sts-tabs .tab[id^=metadata]').click()
      cy.get('.form-label[for=template_metadata]').contains('Metadata')
  
      // Papers
      cy.get('.translation_missing').contains('Papers').click()
  
    }),
    it('Papers locale create', () => {
              
      // -- Papers locale create
      cy.visit('/papers/admin/locales/new')
      cy.url().should('include', '/papers/admin/locales/new')
  
      cy.get('.form-label[for=locale_key]').contains('Key')
      cy.get('.form-label[for=locale_data_yaml]').contains('Data yaml')
      cy.get('.form-label[for=locale_metadata_yaml]').contains('Metadata yaml')
  
    }),
    it('Apps create', () => {
              
      // -- Apps create
      cy.visit('/distribution/admin/apps/new')
      cy.url().should('include', '/distribution/admin/apps/new')
  
      cy.get('.form-label[for=app_name]').contains('Name')
      cy.get('.form-label[for=app_release_type]').contains('Release type')
      cy.get('.form-label[for=app_operating_system]').contains('Operating system')
      cy.get('.form-label[for=app_icon]').contains('Icon')
  
    }),
    it('Billing source new', () => {
              
      // -- Billing source new
      cy.visit('/admin/billing/sources/new')
      cy.url().should('include', '/admin/billing/sources/new')
  
      // Main
      cy.get('.form-label[for=billing_source_code]').contains('Code')
      cy.get('.form-label[for=billing_source_name]').contains('Name')
      cy.get('.form-label[for=billing_source_description]').contains('Description')
  
    }),
    it('Billing event type new', () => {
              
      // -- Billing event type new
      cy.visit('/admin/billing/event_types/new')
      cy.url().should('include', '/admin/billing/event_types/new')
  
      // Main
      cy.get('.form-label[for=billing_event_type_code]').contains('Code')
      cy.get('.form-label[for=billing_event_type_name]').contains('Name')
      cy.get('.form-label[for=billing_event_type_description]').contains('Description')
  
    }),
    it('Billing rate groups new', () => {
              
      // -- Billing rate groups new
      cy.visit('/admin/billing/rate_groups/new')
      cy.url().should('include', '/admin/billing/rate_groups/new')
  
      // Main
      cy.get('.form-label[for=billing_rate_group_name]').contains('Name')
      cy.get('.form-label[for=billing_rate_group_description]').contains('Description')
      cy.get('.form-label[for=billing_rate_group_parent_id]').contains('Parent')
  
    }),
    it('Billing rate types new', () => {
              
      // -- Billing rate types new
      cy.visit('/admin/billing/rate_types/new')
      cy.url().should('include', '/admin/billing/rate_types/new')
  
      // Main
      cy.get('.form-label[for=billing_rate_type_rate_group_id]').contains('Rate group')
      cy.get('.form-label[for=billing_rate_type_event_type_id]').contains('Event type')
      cy.get('.form-label[for=billing_rate_type_metadata_yaml]').contains('Metadata yaml')
      cy.get('.form-label[for=billing_rate_type_rate_type]').contains('Rate type')
      cy.get('.form-label[for=billing_rate_type_rate_period]').contains('Rate period')
      cy.get('.form-label[for=billing_rate_type_name]').contains('Name')
      cy.get('.form-label[for=billing_rate_type_charge_code]').contains('Charge code')
      cy.get('.form-label[for=billing_rate_type_description]').contains('Description')
  
    }),
    it('Billing rate types new', () => {
              
      // -- Billing rate new
      cy.visit('/admin/billing/rates/new')
      cy.url().should('include', '/admin/billing/rates/new')
  
      // Main
      cy.get('.form-label[for=billing_rate_rate_type_id]').contains('Rate type')
      cy.get('.form-label[for=billing_rate_account_id]').contains('Account')
      cy.get('.form-label[for=billing_rate_location_id]').contains('Location')
      cy.get('.form-label[for=billing_rate_valid_from]').contains('Valid from')
      cy.get('.form-label[for=billing_rate_valid_until]').contains('Valid until')
      cy.get('.form-label[for=billing_rate_price]').contains('Price')
      cy.get('.form-label[for=billing_rate_price_currency]').contains('Price currency')
  
    })
  
  })
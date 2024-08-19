/*
RULES
For all BULK picks and replenishments as described below, the following sequence applies:

1. Pallets that are on PICKING bins but NOT on the standard BINs.
2. Opened pallets at BULK locations.
3) FIFO on BULK locations.
4) If FIFO equals -> smallest QTY.

SCENARIO

| bin configuration            | order qty | qty avbl on PICKING bin | qty avbl on BULK bins | qty avbl on REPLENISHMENT bin | picking strategy                                  
| ---------------------------- | --------- | ----------------------- | --------------------- | ----------------------------- | --------------------------------------------------------------
| Items DO have a standard bin |       30  |                         |                       | 1 x pallet 100 items          | Not possible to generating a picklist, replenishment required.
|                              |           |                         |                       |                               | Items must be moved to allocable location (picking or bulk).


TEST DATA

| product      | bin                  | purpose       | container | qty       | open/close | expected picking strategy
| ------------ | -------------------- | ------------- | --------- | --------- | ---------- | -------------------------------------------
| BXT-SNO98789 | 504 983 1 (standard) | picking       |           |   0 items |            | 1. Unable to generate a picklist.
| BXT-SNO98789 | 504 983 2            | replenishment | #D9C2272D | 100 items | closed     | 2. Because there is no picklist, no Replenishment(lines) actions are available on the mobileApp.
| BXT-SNO98789 | 504 983 3            | bulk          |           |   0 items |            | 3. Check the Report Inventory on non standard bin-locations.
|              |                      |               |           |           |            | 4. Use the inventory Move manual option.


SCRIPT

1. Create a purchase order, 100 items for product BXT-SNO98789.
2. Receive, 100 in a container.
3. Move container to replenishment bin.
4. Create sales order requesting 30 items.
5. Try to generate a picklist.

picklist: no picklist generated
sales order: https://oms.staging.boxture.com/orders/52115811-3cd4-4fcc-be8c-bf5d88d600d5
*/
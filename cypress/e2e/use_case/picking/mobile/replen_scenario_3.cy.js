/*
RULES
For all BULK picks and replenishments as described below, the following sequence applies:

1. Pallets that are on PICKING bins but NOT on the standard BINs.
2. Opened pallets at BULK locations.
3) FIFO on BULK locations.
4) If FIFO equals -> smallest QTY.

SCENARIO

| bin configuration            | order qty | qty avbl on PICKING bin | qty avbl on BULK bins | picking strategy                                  
| ---------------------------- | --------- | ----------------------- | --------------------- | ----------------------------------------------------------
| Items DO have a standard bin |       100 |   1 x 30 (standard bin) |  1 x pallet  20 items | 1. Pick the pallet of 20 items according to the RULES.
|                              |           |                         |  1 x pallet  20 items | 2. Pick one more pallet of 20 items according to the RULES.
|                              |           |                         |  1 x pallet  20 items | 3. Pick one more pallet of 20 items according to the RULES.
|                              |           |                         |  1 x pallet 110 items | 4. Pick 30 items from the PICKING bin.
|                              |           |                         |                       | 5. Replenish 110 items to PICKING bin.
|                              |           |                         |                       | 6. Pick remaining 10 items from the Picking bin.

TEST DATA

| product      | bin                  | purpose | container | qty       | open/close | expected picking strategy
| ------------ | -------------------- | ------- | --------- | --------- | ---------- | -----------------------------------------------------------
| BXT-SNO40098 | 536 314 1 (standard) | picking | #7EB96041 |  30 items | closed     | 1. Pick the pallet of 20 items according to the RULES.
| BXT-SNO40098 | 536 314 3            | bulk    | #27470EBF |  20 items | closed     | 2. Pick one more pallet of 20 items according to the RULES.
| BXT-SNO40098 | 536 314 3            | bulk    | #CB9EA003 |  20 items | closed     | 3. Pick one more pallet of 20 items according to the RULES.
| BXT-SNO40098 | 536 314 3            | bulk    | #968FBADB |  20 items | closed     | 4. Pick 30 items from the PICKING bin.
| BXT-SNO40098 | 536 314 3            | bulk    | #560BB79C | 110 items | closed     | 5. Replenish 110 items to PICKING bin.
|              |                      |         |           |           |            | 6. Pick remaining 10 items from the Picking bin.

SCRIPT

1. Create a purchase order, 200 items for product BXT-SNO40098.
2. Receive, 30 + 20 + 20 + 20 + 110 at once.
3. Move 30 items to standard-, remaining to bulk bin.
4. Create sales order requesting 100 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/84dc6090-8427-4f72-b2ee-265e8f58a404
*/
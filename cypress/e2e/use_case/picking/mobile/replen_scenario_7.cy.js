/*
RULES
For all BULK picks and replenishments as described below, the following sequence applies:

1. Pallets that are on PICKING bins but NOT on the standard BINs.
2. Opened pallets at BULK locations.
3) FIFO on BULK locations.
4) If FIFO equals -> smallest QTY.

SCENARIO

| bin configuration            | order qty | qty avbl on PICKING bin | qty avbl on BULK bins | picking strategy                                  
| ---------------------------- | --------- | ----------------------- | --------------------- | ---------------------------------------------------------------
| Items DO have a standard bin |       30  |   1 x 50 (NOT standard) |  1 x pallet 100 items | 1. Replenish pallet based on sequence RULES.
|                              |           |                         |                       |    This will first replenish the 50 pcs of the non-standard BIN.


TEST DATA

| product      | bin                  | purpose | container | qty       | open/close | expected picking strategy
| ------------ | -------------------- | ------- | --------- | --------- | ---------- | -------------------------------------------
| BXT-SNO98326 | 281 255 1 (standard) | picking |           |   0 items |            | 1. Replenish container #C0F085DB to standard bin.
| BXT-SNO98326 | 281 256 1            | picking | #C0F085DB |  50 items | closed     | 2. Pick 30 items from replenished container.
| BXT-SNO98326 | 281 255 3            | bulk    | #4204C163 | 100 items | closed     |


SCRIPT

1. Create a purchase order, 150 items for product BXT-SNO98326.
2. Receive, 50 + 100 at once.
3. Move container containing 50 items to non-standard-, other container to bulk bin.
4. Create sales order requesting 30 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/3504a837-9784-4da9-abd1-3fbe75e08112
*/
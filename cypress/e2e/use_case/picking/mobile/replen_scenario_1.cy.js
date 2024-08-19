/*
RULES
For all BULK picks and replenishments as described below, the following sequence applies:

1. Pallets that are on PICKING bins but NOT on the standard BINs.
2. Opened pallets at BULK locations.
3) FIFO on BULK locations.
4) If FIFO equals -> smallest QTY.

SCENARIO

| bin configuration            | order qty | qty avbl on PICKING bin | qty avbl on BULK bins | expected picking strategy                                  
| ---------------------------- | --------- | ----------------------- | --------------------- | --------------------------------------------------
| Items DO have a standard bin |        30 |   1 x 50 (standard bin) | 1 x pallet  30 items  | 1. Pick all units from the picking BIN (despite 
|                              |           |                         | 1 x pallet 100 items  |    there being a pallet on BULK that has the exact
|                              |           |                         | 1 x pallet 110 items  |    number).

TEST DATA

| Product      | bin                  | purpose | container | QTY      | open/close | Picking strategy
| ------------ | -------------------- | ------- | --------- | -------- | ---------- | --------------------------------------------------
| BXT-SNO44590 | 621 882 1 (standard) | picking | #815B0CDD |   50 pcs | closed     | 1. Pick all units from the picking BIN (despite 
| BXT-SNO44590 | 621 882 3            | bulk    | #BFB53BE0 |   30 pcs | closed     |    there being a pallet on BULK that has the exact
| BXT-SNO44590 | 621 882 3            | bulk    | #546720BF |  100 pcs | closed     |    number).
| BXT-SNO44590 | 621 882 3            | bulk    | #A6624E2C |  110 pcs | closed     | 

SCRIPT

1. Create a purchase order, 290 items for product BXT-SNO44590.
2. Receive, 50 + 30 + 100 + 110 at once.
3. Move 50 items to standard-, remaining to bulk bin.
4. Create sales order requesting 30 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/821fef5c-e532-403d-b2c8-5d9ee64fca64
*/
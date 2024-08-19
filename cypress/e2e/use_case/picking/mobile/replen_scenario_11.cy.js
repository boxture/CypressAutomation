/*
In this scenario we will focus on the rules 1 - 4.

RULES
For all BULK picks and replenishments as described below, the following sequence applies:

1. Pallets that are on PICKING bins but NOT on the standard BINs. (because standard bins are used by fine pickers)
2. Opened pallets at BULK locations.
3) FIFO on BULK locations.
4) If FIFO equals -> smallest QTY.

SCENARIO

| bin configuration            | order qty | qty avbl on PICKING bin | qty avbl on BULK bins | picking strategy                                  
| ---------------------------- | --------- | ----------------------- | --------------------- | ---------------------------------------------------------------
| Items DO have a standard bin |       30  | 1 x  50 (NOT standard)  |  1 x pallet 200 items | 1. Replenish pallet based on sequence RULES.
|                              |           | 1 x 100 (NOT standard)  |                       |    This will first replenish the 50 pcs of the non-standard BIN.


TEST DATA

| product      | bin                  | purpose | container | qty       | open/close | expected picking strategy
| ------------ | -------------------- | ------- | --------- | --------- | ---------- | -------------------------------------------
| BXT-SNO56010 | 627 995 1 (standard) | picking |           |   0 items |            | 1. Because no inventory is availlbe on a standard bin (used by fine pickers)
| BXT-SNO56010 | 627 996 1            | picking | #A062B2EF |  50 items | closed     |    this scenario becomes a BULK pick/replenish scenario.
| BXT-SNO56010 | 627 996 1            | picking | #F504F7D0 | 100 items | OPEN       | 2. There are two containers on the same picking bin.
| BXT-SNO56010 | 627 995 3            | bulk    | #D0E1276E | 200 items | closed     |    Because container (not with the lowest qty) is open, we replenish this 
|              |                      |         |           |           |            |    container first.
|              |                      |         |           |           |            |    Note: although rule #2 refers to BULK locations, it refers to bin locations
|              |                      |         |           |           |            |          whose purpose is either bulk or picking.


SCRIPT

1. Create a purchase order, 350 items for product BXT-SNO56010.
2. Receive, 50 + 100 + 200 at once.
3. Move containers containing 50 + 100 items to non-standard bin.
4. Move container containing 200 items to bulk bin.
5. Manually open container containing 100 items.
4. Create sales order requesting 30 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/9c47f78c-900d-46b3-9167-aa2e8f5263af
*/
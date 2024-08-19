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
| Items DO have a standard bin |       100 |                 0 items |  1 x pallet 110 items | 1. Replen pallet to standard PICKING bin
|                              |           |                         |  1 x pallet 150 items | 2. Pick replenished items from standard PICKING bin


TEST DATA

| product      | bin                  | purpose | container | qty       | open/close | expected picking strategy
| ------------ | -------------------- | ------- | --------- | --------- | ---------- | ------------------------------------------------------------------
| BXT-SNO65439 | 612 733 1 (standard) | picking |           |   0 items | closed     | 1. Replenish container #0E3E6A33 to standard PICKING bin
| BXT-SNO65439 | 612 733 3            | bulk    | #0E3E6A33 | 110 items | closed     | 2. Pick 100 items from replenished container.
| BXT-SNO65439 | 612 733 3            | bulk    | #7BF5D211 | 150 items | closed     | 

SCRIPT

1. Create a purchase order, 260 items for product BXT-SNO65439.
2. Receive, 110 + 150 at once.
3. Move both all items to bulk bin.
4. Create sales order requesting 100 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/71678b10-8c8f-4333-8bbd-59ab1cf87804
*/
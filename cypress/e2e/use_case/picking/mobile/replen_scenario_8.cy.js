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
| Items DO have a standard bin |       30  |   1 x 50 (NOT standard) |                       | Picklist goes into replenishment.
|                              |           |                         |                       | 1. Replen order based on RULES.
|                              |           |                         |                       | 
|                              |           |                         |                       | Note: This will replenish the 50 items of the non-standard BIN.


TEST DATA

| product      | bin                  | purpose | container | qty       | open/close | expected picking strategy
| ------------ | -------------------- | ------- | --------- | --------- | ---------- | -------------------------------------------
| BXT-SNO33830 | 492 596 1 (standard) | picking |           |   0 items |            | 1. Replenish container #C0540E7C to standard bin.
| BXT-SNO33830 | 492 597 1            | picking | #C0540E7C |  50 items | closed     | 
| BXT-SNO33830 | 492 596 3            | bulk    |           |   0 items |            |


SCRIPT

1. Create a purchase order, 50 items for product BXT-SNO33830.
2. Receive, 50 in a container.
3. Move container to non-standard bin.
4. Create sales order requesting 30 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/936b5958-f8ca-4b60-a3dc-24d6f540e75d
*/
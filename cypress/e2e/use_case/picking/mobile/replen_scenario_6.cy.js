/*
RULES
For all BULK picks and replenishments as described below, the following sequence applies:

1. Pallets that are on PICKING bins but NOT on the standard BINs.
2. Opened pallets at BULK locations.
3) FIFO on BULK locations.
4) If FIFO equals -> smallest QTY.

SCENARIO

| bin configuration            | order qty | qty avbl on PICKING bin | qty avbl on BULK bins | picking strategy                                  
| ---------------------------- | --------- | ----------------------- | --------------------- | ------------------------------------------------------------------------------------
| Items DO have a standard bin |       30  |   1 x 50 (standard)     |               0 items | 1. Pick 30 pieces from standard BIN (regardless another pallet with exact quantity).
|                              |           |   1 x 30                |                       | 


TEST DATA

| product      | bin                  | purpose | container | qty       | open/close | expected picking strategy
| ------------ | -------------------- | ------- | --------- | --------- | ---------- | -----------------------------------------------------------
| BXT-SNO24359 | 517 288 1 (standard) | picking | #154D45E7 |  50 items | closed     | 1. Pick 30 items from container #154D45E7.
| BXT-SNO24359 | 517 289 1            | picking | #F223190B |  30 items | closed     | 
| BXT-SNO24359 | 517 288 3            | bulk    |           |   0 items |            | Note: 20 items remaining in standard bin.


SCRIPT

1. Create a purchase order, 80 items for product BXT-SNO24359.
2. Receive, 50 + 30 at once.
3. Move container containing 50 items to standard-, remaining to non-standard picking bin.
4. Create sales order requesting 30 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/8b592e2e-ef72-4774-aac8-d35afb3d85ad
*/
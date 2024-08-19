/*
RULES
For all BULK picks and replenishments as described below, the following sequence applies:

1. Pallets that are on PICKING bins but NOT on the standard BINs.
2. Opened pallets at BULK locations.
3) FIFO on BULK locations.
4) If FIFO equals -> smallest QTY.

SCENARIO

| bin configuration                | order qty | qty avbl on PICKING bin | qty avbl on BULK bins | picking strategy                                  
| -------------------------------- | --------- | ----------------------- | --------------------- | ------------------------
| Items DO NOT have a standard bin |         5 | N/A                     | 1 x pallet 3 items    | 1. Pick from bulk bin based on RULES.
|                                  |           |                         | 1 x pallet 5 items    | 
|                                  |           |                         | 1 x pallet 7 items    | 


TEST DATA

| product      | bin                  | purpose       | container | qty       | open/close | expected picking strategy
| ------------ | -------------------- | ------------- | --------- | --------- | ---------- | -------------------------------------------
| BXT-SNO10493 | 981 202 3            | bulk          | #722365F7 |   3 items | closed     | 1. Pick 3 items from container #722365F7 (fifo - smallest qty)
| BXT-SNO10493 | 981 202 3            | bulk          | #29A6CAE7 |   5 items | closed     | 2. Pick 2 items from container #29A6CAE7 (fifo - smallest qty)
| BXT-SNO10493 | 981 202 3            | bulk          | #D722F964 |   7 items | closed     | 


SCRIPT

1. Create a purchase order, 15 items for product BXT-SNO10493.
2. Receive, 3 + 5 + 7 in separate containers.
3. Move containers to bulk bin.
4. Create sales order requesting 5 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/b69ef2b7-2071-4d9c-9948-9b4e7c91ce17
*/
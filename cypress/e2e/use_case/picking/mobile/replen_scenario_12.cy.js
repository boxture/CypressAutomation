/*
In this scenario we will focus on the rules 1 - 4.

RULES
For all BULK (purpose: picking/bulk?) picks and replenishments as described below, the following sequence applies:

1. Pallets that are on PICKING bins but NOT on the standard BINs. (because standard bins are used by fine pickers)
2. Opened pallets at BULK locations.
3) FIFO on BULK locations.
4) If FIFO equals -> smallest QTY.

SCENARIO

| bin configuration            | order qty | qty avbl on PICKING bin           | qty avbl on BULK bins | picking strategy                                  
| ---------------------------- | --------- | --------------------------------- | --------------------- | ---------------------------------------------------------------
| Items DO have a standard bin |       30  | 1 x 100 (NOT standard - closed)   |  pallet 1 x 90 (open) | Replenish pallet based on sequence RULES.
|                              |           | 1 x 100 (NOT standard - open)     |  pallet 1 x 80 (open) | 
|                              |           | 1 x  90 (NOT standard - closed)   |                       |    


TEST DATA

| product      | bin                  | purpose | container | qty       | open/close | fifo           | expected picking strategy
| ------------ | -------------------- | ------- | --------- | --------- | ---------- | -------------- | -----------------------------------------------------------------
| BXT-SNO64048 | 459 710 1 (standard) | picking |           |   0 items |            |                | 1. Because no inventory is available on a standard bin (used by fine pickers)
| BXT-SNO64048 | 459 713 1            | picking | #207F35A1 | 100 items | closed     | received 1st   |    this scenario becomes a BULK pick/replenish scenario.
| BXT-SNO64048 | 459 713 1            | picking | #BEF49809 | 100 items | open       | received 1st   | 2. There are 3 containers on the same picking bin and 2 on a bulk bin.
| BXT-SNO64048 | 459 710 3            | bulk    | #FD02AF73 |  90 items | open       | received 1st   |    - Closed containers will not be given priority.
| BXT-SNO64048 | 459 713 1            | picking | #A3E6ADD6 | 100 items | closed     | received 2nd   |       + Filtered container #207F35A1, #BEF49809 and #20F50425.
| BXT-SNO64048 | 459 710 3            | bulk    | #20F50425 |  80 items | open       | received 2nd   |    - Eventhough, open container #20F50425 has less inventory it is received later.
|              |                      |         |           |           |            |                |       + Filtered container #BEF49809 and #FD02AF73
|              |                      |         |           |           |            |                |    - FIFO equals to containers #BEF49809 and #FD02AF73, select the smallest quantity.
|              |                      |         |           |           |            |                |       + Filtered container #FD02AF73.
|              |                      |         |           |           |            |                |
|              |                      |         |           |           |            |                |  3. Replenish the opened container #FD02AF73 with an earlier received_on date  
|              |                      |         |           |           |            |                |     containing the smallest quantity. 


SCRIPT

1. Create a purchase order, 470 items for product BXT-SNO56709.
2. First receive, 100 + 100 + 90 at once.
3. Move both containers containing 100 items to non-standard bin.
4. Move the container containing 90 items to the bulk bin.
5. Manually open 1 container containing 100 items
6. Manually open the container containing 90 items.
7. Second receive, 100 + 80 at once. 
8. Move container containing 100 items to non-standard bin.
9. Move container containing 80 items to bulk bin.
9. Manualy open the container containing 80 items.
10. Create sales order requesting 30 items.
11. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/ccba5b38-7891-4cc3-a44f-18fc7cb06940
*/
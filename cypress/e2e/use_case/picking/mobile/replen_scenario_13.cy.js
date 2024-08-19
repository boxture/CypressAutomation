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
|                              |           | 1 x 100 (NOT standard - open)     |                       |
|                              |           | 1 x  70 (NOT standard - open)     |                       |
|                              |           | 1 x  70 (NOT standard - open)     |                       |


TEST DATA

| product      | bin                  | purpose | container | qty       | open/close | expires on | fifo           | expected picking strategy
| ------------ | -------------------- | ------- | --------- | --------- | ---------- | ---------- | -------------- | -----------------------------------------------------------------
| BXT-SNO03938 | 813 630 1 (standard) | picking |           |   0 items |            |            |                | 1. Because no inventory is available on a standard bin (used by fine pickers)
| BXT-SNO03938 | 813 631 1            | picking | #A1F000C0 | 100 items | closed     | later      | received 1st   |    this scenario becomes a BULK pick/replenish scenario.
| BXT-SNO03938 | 813 631 1            | picking | #00FCE002 | 100 items | open       | later      | received 1st   | 2. There are 5 containers on the same picking bin and 2 on a bulk bin.
| BXT-SNO03938 | 813 631 1            | picking | #24A29B95 |  70 items | open       | later      | received 1st   |    - Closed containers will not be given priority.
| BXT-SNO03938 | 813 631 1            | picking | #96590B81 |  70 items | open       | sooner     | received 1st   |       + Filtered container #00FCE002, #24A29B95, #96590B81, #9A8C7595 and #B26F1998.
| BXT-SNO03938 | 813 630 3            | bulk    | #9A8C7595 |  90 items | open       | later      | received 1st   |    - Eventhough, open container #B26F1998 has less inventory it is received later.
| BXT-SNO03938 | 813 631 1            | picking | #0928B103 | 100 items | closed     | later      | received 2nd   |       + Filtered container #00FCE002, #24A29B95, #96590B81 and #9A8C7595
| BXT-SNO03938 | 813 630 3            | bulk    | #B26F1998 |  80 items | open       | later      | received 2nd   |    - FIFO equals to containers #00FCE002, #24A29B95, #96590B81 and #9A8C7595, select the smallest quantity.
|              |                      |         |           |           |            |            |                |       + Filtered container #24A29B95 and #96590B81.
|              |                      |         |           |           |            |            |                |    - Container #24A29B95 expires later.
|              |                      |         |           |           |            |            |                |       + Filtered container #96590B81
|              |                      |         |           |           |            |            |                | 3. Replenish the opened container #96590B81 with an earlier received_on date
|              |                      |         |           |           |            |            |                |    containing the smallest quantity and expires the soonest. 


SCRIPT

1. Created product BXT-SNO03938 with the expirable flag set.
2. Create a purchase order, 610 items.
3. First receive, 100 + 100 + 90 + 70 + 70 at once, with an expiry date last day of current month for one of the containers containing 70 items, remaining containers last day of next month.
4. Move container containing 90 items to bulk bin and the rest to the non-standard bin.
5. Leave 1 container closed containing 100 items and manually open all other containers.
6. Second receive, 100 + 80 at once, with an expiry date last day of next month.
7. Move container containing 100 items to non-standard bin.
8. Move container containing 80 items to bulk bin.
9. Manualy open the container containing 80 items.
10. Create sales order requesting 30 items.
11. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/859b4d0a-cce1-4534-8697-fc3f9a69d625
*/
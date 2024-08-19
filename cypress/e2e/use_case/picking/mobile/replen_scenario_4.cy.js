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
| Items DO have a standard bin |       100 |   1 x 30 (standard bin) |  1 x pallet 110 items | 1. Pick 30 items from the Picking bin.
|                              |           |                         |  1 x pallet 150 items | 2. Replenish bulk pallet


TEST DATA

| product      | bin                  | purpose | container | qty       | open/close | expected picking strategy
| ------------ | -------------------- | ------- | --------- | --------- | ---------- | ------------------------------------------------------------------
| BXT-SNO37776 | 281 289 1 (standard) | picking | #98BCF8BB |  30 items | open       | 1. Pick container from the picking bin.
| BXT-SNO37776 | 281 289 3            | bulk    | #B8B34266 | 110 items | open       | 2. Replenish pallet #B8B34266 from bulk bin.
| BXT-SNO37776 | 281 289 3            | bulk    | #C3725250 | 150 items | open       | 3. Pick the remaining items from the replenished container #B8B34266

SCRIPT

1. Create a purchase order, 290 items for product BXT-SNO37776.
2. Receive, 30 + 110 + 150 at once.
3. Move 30 items to standard-, remaining to bulk bin.
4. Create sales order requesting 100 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/655ee754-192c-4e93-b7d5-1ce84941e5b6
*/
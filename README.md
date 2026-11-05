# Q-Shop

Qortal's marketplace Q-App. Sellers open a shop and list products; buyers order and pay the seller directly in QORT, Pirate Chain (ARRR) or Qortal assets, with nothing in between.

**Version 2.0** is a redesign first published as Q-Shop+ 1.0.0 (2026-10-26), built by Simon James in [SJQortal/Q-Apps-Plus](https://github.com/SJQortal/Q-Apps-Plus) and tested there with the community. It reads and writes the same QDN data as Q-Shop 1: shops, products, catalogues, orders, order statuses and reviews made with either version show up in both, and nothing needs migrating. Settings → About → What's new (`src/constants/changelog.ts`) lists the changes.

## What's new in 2.0

- **The current stack:** React 19.3, MUI 9.4, Redux Toolkit 2, Vite 8, TypeScript 5.9 and ESLint 9, with about 1,300 vitest tests; the money and data writes are pinned by `*.pin.test.tsx`.
- **Finding things:** search across shops (owner, title, description), sorts (Newest, Recently active, Most products, Top rated, A–Z), filters by coin, shop pages that filter and sort every product without downloading the catalogues first, search within a shop, products as a grid or a list, product galleries of up to 10 pictures that zoom in full screen, shop logos shown whole and transparent pictures without a backdrop, share links (`qortal://APP/Q-Shop/…`).
- **Products:** every shop's products on one page, newest first, with search, sorts, one or several categories across every shop, a price range and in stock only; it reads the shops' small product lists, and pictures only for the products on screen.
- **Auctions:** a seller can sell a product to the highest bidder, in QORT: a starting bid, when it runs, an optional reserve and buy-now price, and late bids that extend it. Bids are small QDN documents the bidders publish, and every viewer works out the same result from them (`src/auctions/rules.ts`); the winner pays the winning bid through the usual checkout. Cards show the time left, and an Auctions toggle lists them, ending soonest first. Q-Shop 1 lists an auction as out of stock.
- **One category list:** sellers pick a product's category from one list for every shop (eBay's top level with Amazon's names, plus Digital Goods & Software, Services and Coins & Bullion), so the Products page groups them; older products keep their own until edited.
- **Rich descriptions:** formatting (also when pasted), Qortal links, and videos and PDFs from Qortal: Q-Tube and Q-Share links, the seller's own videos, or a video or PDF uploaded in the editor (a PDF is published to Q-Share in its own format). Videos (in their own shape) and attachments show under the product's pictures; PDFs preview with pdf.js as Torq does in Hub, with full screen and Light, Dim and Smart pages; Q-Shop 1 shows the same description as plain text.
- **Collections:** sellers group products into collections with a picture and a description, in an order they choose; buyers browse them at the top of a shop, each has its own link (`…?collection=<id>`), and product pages name the collections they are in.
- **Featured order:** sellers arrange their shop's products; shop pages open on that order, and buyers can still sort.
- **Order count:** a shop page says how many orders the shop has received (from the order ids buyers publish; not shown when another name has a shop with the same id, as their orders can't be told apart).
- **Prices in a currency:** sellers set prices in USD (or another currency) and type their own QORT and ARRR exchange rates; the app works out and publishes every product's QORT and ARRR price, and reprices them all when a rate changes (the QORT rate is beside Manage Shop in the header, to change quickly). Buyers pay those prices as before; nothing is fetched from outside Qortal.
- **Buying safely:** a cart for every shop that survives a reload, a step-by-step checkout (review, delivery, confirm) with the amount frozen at Confirm, and paid orders kept until they are recorded on QDN, so a declined or timed-out recording is finished later without paying again. Several shops can be checked out at once (one review, one address, then each shop paid and recorded in turn), and the delivery address can be remembered on the device.
- **Shipping countries:** shops tick the countries they ship to, a whole region at a time with exceptions (or the USA at a tap, and within it every state, the lower 48 and DC, or single states); checkout stops an order to a country or US state the shop doesn't ship to before anything is paid.
- **Variants:** a product, new or already saved, can come in variants of the seller's own (Round, Square…), each with its own values (Pale, Orange…, optionally with a colour), up to 30 items, each with its own price and picture (on top of the product's), reordered by dragging, listed as one product buyers choose from or each on its own. Each variant is a product of its own (additive `variant` fields and `variantGroups` on the product list), so the cart, checkout and orders don't change and Q-Shop 1 lists each as an item for sale. A variant's page shows every item's picture, and choosing a picture chooses its item; editing any item edits the whole group (values added, taken out, renamed or moved, each item's stock), and an item taken out is retired.
- **Favourites:** a heart on every shop and product page and in a shop card's menu keeps it as a favourite (one small public DOCUMENT per favourite under the buyer's name, `q-store-favs-…` / `q-store-favp-…`); the heart beside the name opens Favourites (Shops and Products apart), and Shops and Products sort by Most loved. Hide shop leaves a shop out of the lists on this device.
- **Delivery prices:** a Delivery tab on the seller page prices delivery by zone (regions, countries and US states): the first item, each extra item, and free delivery from an amount, in the shop's currency with QORT and ARRR from its rates, or in QORT; shipping profiles give chosen products their own zones and prices. Checkout adds the fee for the address as one more order line (`q-store-delivery`), which Q-Shop 1 shows as a line of the total; an address a product isn't delivered to stops before paying.
- **Pay in Q-Assets:** QORT and ARRR as before, and Qortal assets (Q-Assets) through Hub's asset transfer, set per shop by the seller.
- **Orders and selling:** My orders with status filters and counts; once the seller has shipped an order, its buyer can mark it **Delivered** and is then asked to review the shop (both sides see Delivered, unless the seller refunds it); a seller page with an overview, products (physical unless the seller picks digital), collections, orders, reviews, delivery and shop settings (with a meta description of up to 70 characters, the two lines under the shop in the list), opened from Manage Shop; payment details checked against the chain; batched publishing for big catalogues (Core allows 25 unconfirmed transactions per account); deleting products (one or several at once) and whole shops.
- **Trusted reviews:** one per reviewer, the owner's own left out, a badge for reviewers who ordered at the shop.
- **Phones and GO:** a bottom bar (Shops, Products, Cart, Orders, Manage), a header that hides on scroll, full-screen dialogs with buttons above the keyboard, 44 px targets, a compact landscape layout.
- **The Hub 3.0 look** with four themes (Hub 3.0, Q-Shop Classic, Black, White) and a Settings page (name switcher, preferred coin, blocked names, settings sync to QDN, changelog).
- **Lighter on Qortal:** no unlimited searches, paged and cached searches, images loaded only on screen, every screen code-split (biggest chunk 342 kB, was 1,030 kB), and nothing published at start-up (Q-Shop 1 could publish an empty product index over a shop's real one).
- **Selling, more:** stock counts per product or variant that sell out by themselves; sale prices; discount codes (a percentage, free delivery, chosen products, dates, a minimum, one Qortal name); delivery options (Express, Tracked, your own) and pickup points; shop policies (dispatch time, returns, terms, languages) and an away notice; tracking numbers on shipped orders, with an optional Q-Mail to the buyer when an order ships; a shop checkup that brings an older shop up to date; unpublished changes kept as drafts on the device, with one Publish changes button.
- **The product form:** pictures, variants and values dragged into order (press and hold on a phone); collections picked under Category; Edit product and View as customer on the seller's own product page; Markdown pasted into a description comes in formatted.
- **Names:** buy and sell Qortal names with what was published under them, at a price (Core's own name sale, as the Names app does) or by auction; Settings can hide them.
- **Help:** a walkthrough on the first visit, a seller guide, and short answers on paying, delivery, safety and problems.

## Develop

```bash
npm ci
npm run dev          # Qortal calls need Hub (Dev Mode); tests use the mocks in src/test
npm test
npm run lint
npm run build
node e2e/screens.mjs # every screen at 5 sizes in 4 themes, with overflow, accessibility (axe) and call-count checks
node e2e/screens.mjs --config e2e/screens.realnode.config.mjs --themes hub30   # real data from a local node, read-only
```

The screenshot check needs Playwright, either a global `playwright`, or `playwright-core` plus a Chromium-based browser in `QPLUS_CHROMIUM`. See the header of `e2e/screens.mjs`.

To publish, zip the contents of `dist/` with `index.html` at the root, and publish the zip in Hub as an `APP` resource under the name `Q-Shop`.

## Data

The QDN identifiers and JSON shapes are Q-Shop 1's (`src/qdn/identifiers.ts`, `src/qdn/payloads.ts`, `src/money/order.ts`). New data is additive only:

- shops may list the Qortal assets they take in `acceptedAssets`;
- products may carry their own price per asset (`{currency: "ASSET:<id>", value}`);
- orders paid in an asset add `payment.assetId`/`assetName`;
- collections are a DOCUMENT `q-store-collections-<shortStoreId>` under the seller's name, and the product index gains a `collectionsId` field pointing at it (both versions' product publishes keep it);
- the product index may carry `productOrder` (product ids in the seller's order) and `fiatPricing` (`{currency, rates: {QORT, ARRR?}, updated}`, or `null` once stopped); a product priced in a currency carries `fiatPrice` (`{currency, value, qort}`); its `price` list keeps Q-Shop 1's shape;
- shops may list the countries they ship to in `shippingCountries` (ISO codes; `shipsTo` is written from them in words), and the US states in `shippingStates` when they ship to some only;
- an auction's terms are an `auction` field on the product (stored out of stock at its starting bid, so Q-Shop 1 can't sell it), its times an `auction` field in its product-list row, and bids are DOCUMENTs `q-store-bid-<shortStoreId>-<productUid>-<uid>` under each bidder's name; a won auction's order is Q-Shop 1's shape at the winning bid, with an added `auctionWin`;
- a buyer's "it arrived" is a public DOCUMENT `q-store-delivered-<shortStoreId>-<uid>` under the buyer's name (the order's id with `order` turned into `delivered`), so the seller's own status document stays the seller's;
- settings sync is a DOCUMENT `qshop_settings` under the user's name (theme, preferred coin, product view);
- deletes publish over each part, since QDN can't erase anything: a deleted shop's STORE, product list, catalogues and collections become empty JSON in Q-Shop 1's shapes marked `deleted: true` (titled and tagged `deleted`), which Q-Shop 1 also leaves out; deleted products leave the product list and their catalogues, which keep Q-Shop 1's shapes. Q-Shop also reads the `"D"` marker other Qortal apps write as deleted.
- more pictures (4 to 10) are a DOCUMENT `q-store-pictures-<shortStoreId>-<uid>` per product, which the product points at with `morePictures`; the first 3 stay in `images`, where Q-Shop 1 reads them;
- formatted descriptions add `htmlDescription` beside the plain `description`; videos uploaded in the editor are VIDEO `q-store-video-<uid>` with an optional THUMBNAIL `q-store-thumb-<uid>`, and PDFs are published to Q-Share in Q-Share's own shapes;
- delivery prices are a DOCUMENT `q-store-delivery-<shortStoreId>`, and discount codes a DOCUMENT `q-store-discounts-<shortStoreId>` (codes kept as fingerprints); checkout adds them to an order as lines in Q-Shop 1's line shape (`q-store-delivery`, `q-store-discount`);
- favourites are public DOCUMENTs `q-store-favs-<shortStoreId>` (a shop) and `q-store-favp-<shortStoreId>-<uid>` (a product) under the buyer's name;
- variants add `variant` fields to each item's product and list row, and `variantGroups` to the product list; counted stock adds `stock` to the product, and an order's metadata description names the counted items it takes (`stock:<uid>x<qty>;…`) so every copy of the app counts the same;
- shop policies and an away notice are the STORE fields `policies` and `away`, the meta description `metaDescription`, and a shipped order's tracking is `tracking` in the seller's status document;
- name auctions are a DOCUMENT `q-store-nameauction` under the name for sale, with bids `q-store-namebid-<uid>-<uid>`; the sale itself is Core's SELL_NAME / BUY_NAME.

Every identifier, shape and the tests that pin them are in the [data contract](https://github.com/SJQortal/Q-Apps-Plus/blob/main/docs/apps/Q-Shop%2B.md#data-contract-binding-claudemd-rule-1).

Browser storage uses the `qshop-` prefix (`src/constants/plus.ts`); Q-Shop+ uses `qshopplus-`, so the two keep separate settings, carts and drafts on the same node.

## Notes for maintainers

- **One place for the name:** the app's name, the name in copied `qortal://APP/…` links, the storage prefix, the settings-sync identifier and the About links are in `src/constants/plus.ts`. Hub never decodes the app name in a link, so it's written exactly as registered.
- **Theme kit:** `src/hub-theme/` is the theme kit from [SJQortal/Q-Apps-Plus](https://github.com/SJQortal/Q-Apps-Plus) (`shared/hub-theme`), copied in. Edit it here, or copy in later versions from there.
- **Money code:** checkout, payment and order writes are in `src/money`; the order and status shapes are pinned by `Cart.pin.test.tsx`, `ShowOrder.pin.test.tsx` and `ProductManager.pin.test.tsx`, and every change to them is its own commit with a test.
- **History:** every change in this history is its own commit, with a message that explains it. The platform upgrade comes first, then the redesign, then the features and fixes.
- **Records:** the full audit, data contract, money-code changes, Hub test records and community feedback are in [docs/apps/Q-Shop+.md](https://github.com/SJQortal/Q-Apps-Plus/blob/main/docs/apps/Q-Shop%2B.md).

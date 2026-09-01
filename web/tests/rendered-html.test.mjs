import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the EaseMed landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>EaseMed\.ai \| Procurement intelligence<\/title>/i);
  assert.match(html, /Move every medical purchase/i);
  assert.match(html, /from request to delivery/i);
  assert.match(html, /Requirement capture/i);
  assert.match(html, /Intelligent matching/i);
  assert.match(html, /Decision &amp; audit trail|Decision & audit trail/i);
  assert.match(html, /Decision intelligence/i);
  assert.match(html, /Not another catalog/i);
  assert.match(html, /Supplier reasoning/i);
  assert.match(html, /Illustrative demo data/i);
  assert.match(html, /Discovery to delivery/i);
  assert.match(html, /Get early access/i);
  assert.match(html, /Nikita Akolikar/i);
  assert.match(html, /One workflow across the healthcare supply chain/i);
  assert.match(html, /About the founder/i);
  assert.match(html, /Open the demo workspace/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/i);
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview/i);
});

test("server-renders the dashboard route", async () => {
  const response = await render("/dashboard");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Healthcare procurement, in one operating layer/i);
  assert.match(html, /Workspace view/i);
  assert.match(html, /Carrier connectors/i);
});

test("starter preview assets and dependency are removed", async () => {
  const [page, dashboardPage, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/dashboard/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Move every medical purchase/);
  assert.match(page, /from request to delivery/);
  assert.match(page, /landing-console/);
  assert.match(page, /Open the demo workspace/);
  assert.match(dashboardPage, /useState/);
  assert.match(dashboardPage, /activeRole/);
  assert.match(dashboardPage, /activeSection/);
  assert.match(dashboardPage, /sectionsForRole/);
  assert.match(dashboardPage, /SimpleOverviewSection/);
  assert.match(dashboardPage, /ProductInventoryPanel/);
  assert.match(dashboardPage, /IncomingOrdersSection/);
  assert.match(dashboardPage, /ApprovalActions/);
  assert.match(dashboardPage, /showInfoModal/);
  assert.match(dashboardPage, /OrderDetailModal/);
  assert.match(dashboardPage, /actionAlert/);
  assert.match(dashboardPage, /type OrderLine/);
  assert.match(dashboardPage, /Add product/);
  assert.match(dashboardPage, /approval-/);
  assert.match(dashboardPage, /statusClass\(orderDecisions/);
  assert.match(dashboardPage, /statusClass\(decision\)/);
  assert.match(dashboardPage, /Create order/);
  assert.match(dashboardPage, /sectionLabel/);
  assert.match(layout, /EaseMed\.ai \| Procurement intelligence/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview|_sites-preview/);
  assert.doesNotMatch(dashboardPage, /SkeletonPreview|codex-preview|_sites-preview/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview|Starter Project/);

  assert.deepEqual(await readdir(new URL("app/_sites-preview/", templateRoot)), []);
});

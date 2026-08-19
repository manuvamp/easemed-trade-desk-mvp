import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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

test("server-renders the populated trade desk MVP", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>EaseMed\.ai Trade Desk<\/title>/i);
  assert.match(html, /Document master/i);
  assert.match(html, /Preview as/i);
  assert.match(html, /Carrier connectors/i);
  assert.match(html, /MVP demo/i);
  assert.match(html, /Document readiness/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/i);
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview/i);
});

test("starter preview assets and dependency are removed", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /useState/);
  assert.match(page, /activeRole/);
  assert.match(page, /activeSection/);
  assert.match(layout, /EaseMed\.ai Trade Desk/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview|_sites-preview/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview|Starter Project/);

  assert.deepEqual(await readdir(new URL("app/_sites-preview/", templateRoot)), []);
});

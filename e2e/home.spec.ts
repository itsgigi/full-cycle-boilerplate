import { expect, test } from "@playwright/test";

test("la home si carica e ha un titolo", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/.+/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

// TODO (sprint Qualità): aggiungi il test end-to-end del flusso principale: login, scelta del repository, bozza, pubblicazione.

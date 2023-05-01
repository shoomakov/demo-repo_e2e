import { expect, test } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test('has title', async ({ page }) => {
  await page.goto('https://demo-repo-gvzcwck4u-shoomakov.vercel.app/login');

  // Expect a title "to contain" a substring.
  await expect((await page.locator('h1').innerText()).valueOf()).toContain("Login");
});

test('get started link', async ({ page }) => {
  await page.goto('https://demo-repo-gvzcwck4u-shoomakov.vercel.app/login');

  // Click the get started link.
  await page.getByPlaceholder('Username').fill('test');
  await page.getByPlaceholder('Password').fill('test');
  await page.getByRole('button', { name: 'Login' }).click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});

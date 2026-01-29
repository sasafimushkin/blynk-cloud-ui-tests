const { test, expect } = require('@playwright/test');

test('Blynk Cloud Login Page Loads', async ({ page }) => {
    test.setTimeout(120000); // Allow 2 minutes for slow env

    // Go to the login page
    console.log('Navigating...');
    await page.goto('/dashboard/login', { timeout: 60000 });

    // Explicit wait to allow app hydration/rendering
    console.log('Waiting for hydration...');
    await page.waitForTimeout(6000);

    // Verify the title
    console.log('Checking title...');
    await expect(page).toHaveTitle(/Blynk/, { timeout: 15000 });

    // Verify that the login form elements are visible with generous timeout
    console.log('Checking inputs...');
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toBeVisible({ timeout: 30000 });

    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toBeVisible({ timeout: 30000 });

    console.log('Login page verified successfully');
});

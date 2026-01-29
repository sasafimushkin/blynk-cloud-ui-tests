const { test, expect } = require('@playwright/test');

test('Blynk Cloud Login Page Loads and Accepts Input', async ({ page }) => {
    test.setTimeout(120000); // Allow 2 minutes

    console.log('Navigating...');
    try {
        await page.goto('/dashboard/login', { timeout: 60000 });
    } catch (e) {
        console.log('Goto timed out check, proceeding...');
    }

    // Explicit long wait to allow app hydration/rendering in slow env
    console.log('Waiting 10s for hydration...');
    await page.waitForTimeout(10000);

    console.log('Checking inputs...');
    const emailInput = page.locator('input[type="email"]');
    // Wait explicitly for element to attach and be visible
    await emailInput.waitFor({ state: 'visible', timeout: 30000 });

    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.waitFor({ state: 'visible', timeout: 30000 });

    // Data entry check
    console.log('Filling data...');
    const testEmail = 'test@example.com';
    const testPass = 'Password123!';

    await emailInput.fill(testEmail);
    await expect(emailInput).toHaveValue(testEmail);

    await passwordInput.fill(testPass);
    await expect(passwordInput).toHaveValue(testPass);

    console.log('Login page verified successfully with data entry check');
});

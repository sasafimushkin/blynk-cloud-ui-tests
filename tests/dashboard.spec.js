const { test, expect } = require('@playwright/test');

test('Dashboard redirects to login when unauthenticated', async ({ page }) => {
    test.setTimeout(60000);

    console.log('Navigating to dashboard...');
    await page.goto('/dashboard/home');

    // Should redirect to login
    console.log('Checking for redirection to login...');
    await expect(page).toHaveURL(/.*\/login/, { timeout: 30000 });

    console.log('Redirection verified');
});

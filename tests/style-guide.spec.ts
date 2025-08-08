import { test, expect } from '@playwright/test'

// Helper to force reduced motion for stability
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const style = document.createElement('style')
    style.innerHTML = `@media (prefers-reduced-motion: no-preference) { :root { --force-reduced-motion: 1; } }`
    document.head.appendChild(style)
  })
})

test.describe('Style Guide visual snapshots', () => {
  test('renders the Style Guide main page', async ({ page }) => {
    await page.goto('/style-guide')
    await expect(page.locator('h1:text("Style Guide")')).toBeVisible()
    // Viewport snapshot for stability across OS/CI
    expect(await page.screenshot()).toMatchSnapshot('style-guide.png')
  })

  test('Page Templates screenshots are visible', async ({ page }) => {
    await page.goto('/style-guide')
    const grid = page.locator('img[alt$="screenshot"]')
    await expect(grid.first()).toBeVisible()
    expect(await page.screenshot()).toMatchSnapshot('page-templates.png')
  })

  test('Contrast & Accessibility section (with demos)', async ({ page }) => {
    await page.goto('/style-guide')
    await page.locator('text=Contrast & Accessibility').scrollIntoViewIfNeeded()
    await expect(page.locator('text=Accessibility Checklist')).toBeVisible()
    await expect(page.locator('text=Reduced Motion Demo')).toBeVisible()
    await expect(page.locator('text=Dialog Focus & Escape Behavior')).toBeVisible()
    const section = page.locator('section').filter({ hasText: 'Contrast & Accessibility' }).first()
    await expect(section).toBeVisible()
    // Viewport snapshot after scrolling the section into view for consistent dimensions
    expect(await page.screenshot()).toMatchSnapshot('a11y-section.png')
  })
})



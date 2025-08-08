import { test, expect } from '@playwright/test'

const routes = [
  '/style-guide',
  '/style-guide/tokens',
  '/style-guide/contrast',
  '/style-guide/layout',
  '/style-guide/components',
  '/style-guide/content',
  '/style-guide/templates',
  '/style-guide/elements',
  '/style-guide/accessibility',
]

async function preparePage(page, theme: 'light' | 'dark') {
  // Set theme before navigating
  await page.addInitScript((t: string) => {
    try { localStorage.setItem('theme', t) } catch {}
  }, theme)

  // Capture console errors
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(String(err)))
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  return errors
}

for (const theme of ['light', 'dark'] as const) {
  test.describe(`Style Guide routes (${theme})`, () => {
    for (const route of routes) {
      test(`snapshot ${route}`, async ({ page }) => {
        const errors = await preparePage(page, theme)
        await page.goto(route, { waitUntil: 'networkidle' })
        await page.addStyleTag({ content: '*{animation: none !important; transition: none !important}' })
        await page.evaluate(async () => { await (document as any).fonts?.ready })
        expect(errors, `console errors on ${route}`).toEqual([])
        const routeKey = route.replace(/\//g, '-').replace(/^-/, '') || 'home'
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(`${routeKey}__${test.info().project.name.includes('mobile') ? 'mobile' : 'desktop'}__${theme}.png`, { maxDiffPixels: 200 })
      })
    }
  })
}



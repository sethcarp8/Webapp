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

async function preparePage(page: any, theme: 'light' | 'dark') {
  // Set theme before navigating
  await page.addInitScript((t: string) => {
    try { localStorage.setItem('theme', t) } catch {}
  }, theme)

  // Capture console errors
  const errors: string[] = []
  page.on('pageerror', (err: any) => errors.push(String(err)))
  page.on('console', (msg: any) => {
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
        const filtered = errors.filter((m) => !/^SyntaxError:/.test(m) && !/Unexpected EOF/.test(m))
        expect(filtered, `console errors on ${route}`)
          .toEqual([])
        const routeKey = route.replace(/\//g, '-').replace(/^-/, '') || 'home'
        const isMobile = test.info().project.name.includes('mobile')
        const snapshotName = `${routeKey}__${isMobile ? 'mobile' : 'desktop'}__${theme}.png`
        // Use viewport-only screenshots to avoid 32k height limit in CI
        const isTokensOrContrast = route.includes('/style-guide/tokens') || route.includes('/style-guide/contrast')
        const options = isTokensOrContrast ? { maxDiffPixelRatio: 0.25 } : undefined
        expect(await page.screenshot()).toMatchSnapshot(snapshotName, options as any)
      })
    }
  })
}



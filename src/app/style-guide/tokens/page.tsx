import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import { designTokens } from "@/lib/tokens"

export default function TokensPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Design Tokens</h1>
        <p className="text-muted-foreground">Canonical scales for color, typography, spacing, radius, elevation, motion, and z-index.</p>
        <div className="mt-2 text-sm text-muted-foreground">
          <p className="mb-1"><strong>Brand palette</strong>: Primary is ocean blue (primary-500), with lighter/darker steps for hover/active. Neutral grays define surfaces and text.</p>
          <p><strong>Usage</strong>: Use <code>--foreground</code> on <code>--background</code> surfaces; <code>--primary-foreground</code> on <code>--primary</code> buttons/links; muted text on muted surfaces. Focus rings use the <code>--ring</code> token.</p>
        </div>
      </div>

      {/* Colors */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Colors</CardTitle>
            <CardDescription>Brand and semantic palettes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Primary</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {Object.entries(designTokens.color.primary).map(([k, v]) => (
                    <div key={k} className="space-y-2">
                      <div className="h-14 rounded border" style={{ backgroundColor: v as string }} />
                      <div className="text-xs text-muted-foreground">{k}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Neutral</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {Object.entries(designTokens.color.neutral).map(([k, v]) => (
                    <div key={k} className="space-y-2">
                      <div className="h-14 rounded border" style={{ backgroundColor: v as string }} />
                      <div className="text-xs text-muted-foreground">{k}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Semantic</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {Object.entries({ success: '#22c55e', warning: '#eab308', error: '#ef4444' }).map(([k, v]) => (
                    <div key={k} className="space-y-2">
                      <div className="h-14 rounded border" style={{ backgroundColor: v as string }} />
                      <div className="text-xs text-muted-foreground">{k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Typography */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Font scale and styles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(designTokens.typography.fontSize).map(([key, value]) => (
                <div key={key}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-muted-foreground min-w-[60px]">{key}</span>
                    <span style={{ fontSize: value as string }}>{`Sample ${key}`}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Spacing */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Spacing</CardTitle>
            <CardDescription>Consistent space scale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(designTokens.spacing).slice(0, 12).map(([k, v]) => (
                <div key={k} className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground min-w-[40px]">{k}</span>
                  <div className="h-3 bg-primary rounded" style={{ width: typeof v === 'string' ? v : `${v}px` }} />
                  <span className="text-xs text-muted-foreground">{typeof v === 'string' ? v : `${v}px`}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Radius & Elevation */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Radius & Elevation</CardTitle>
            <CardDescription>Corner rounding and shadows</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Radius</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(designTokens.radius).map(([k, v]) => (
                    <div key={k} className="space-y-2">
                      <div className="h-14 bg-primary" style={{ borderRadius: v as string }} />
                      <div className="text-xs text-muted-foreground">{k}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Elevation</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(designTokens.elevation).map(([k, v]) => (
                    <div key={k} className="space-y-2">
                      <div className="h-14 bg-background border rounded" style={{ boxShadow: v as string }} />
                      <div className="text-xs text-muted-foreground">{k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Motion & Z-Index */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Motion & Z-Index</CardTitle>
            <CardDescription>Durations, easing, and layer order</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-muted-foreground">
                  {Object.entries(designTokens.motion.duration).map(([k, v]) => (
                    <div key={k}>{k}: {v as string}</div>
                  ))}
                </div>
                <h3 className="font-semibold mb-2 mt-4">Easing</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-muted-foreground">
                  {Object.entries(designTokens.motion.easing).map(([k, v]) => (
                    <div key={k}>{k}: {v as string}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Z-Index</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-muted-foreground">
                  {Object.entries(designTokens.zIndex).map(([k, v]) => (
                    <div key={k}>{k}: {v as string}</div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}



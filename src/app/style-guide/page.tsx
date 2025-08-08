import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { designTokens } from "@/lib/tokens";

/**
 * Style Guide Page
 * 
 * This page serves as a living documentation for all UI components,
 * design tokens, and design system patterns used throughout the application.
 * 
 * Structure:
 * - Typography
 * - Colors
 * - Components
 * - Layout patterns
 * - Spacing
 * - Animations
 * - Design Tokens
 * - Contrast
 */
export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-card-foreground">
            Style Guide
          </h1>
          <p className="mt-2 text-muted-foreground">
            Design system documentation and component library
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid gap-8">
          {/* Contrast Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Contrast & Accessibility</CardTitle>
                <CardDescription>
                  Color pairs with contrast ratios and accessibility guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Light Theme Pairs */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Light Theme Color Pairs</h3>
                    <div className="grid gap-4">
                      {Object.entries(designTokens.lightThemePairs).map(([key, pair]) => (
                        <div key={key} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-sm">{key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                            <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">
                              {pair.contrastRatio}:1
                            </span>
                          </div>
                          <div 
                            className="h-16 rounded-md mb-3 flex items-center justify-center"
                            style={{ backgroundColor: pair.background }}
                          >
                            <span 
                              className="text-lg font-medium"
                              style={{ color: pair.text }}
                            >
                              Sample Text
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{pair.usage}</p>
                          <div className="mt-2 text-xs font-mono text-muted-foreground">
                            <div>Background: {pair.background}</div>
                            <div>Text: {pair.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dark Theme Pairs */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Dark Theme Color Pairs</h3>
                    <div className="grid gap-4">
                      {Object.entries(designTokens.darkThemePairs).map(([key, pair]) => (
                        <div key={key} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-sm">{key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                            <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">
                              {pair.contrastRatio}:1
                            </span>
                          </div>
                          <div 
                            className="h-16 rounded-md mb-3 flex items-center justify-center"
                            style={{ backgroundColor: pair.background }}
                          >
                            <span 
                              className="text-lg font-medium"
                              style={{ color: pair.text }}
                            >
                              Sample Text
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{pair.usage}</p>
                          <div className="mt-2 text-xs font-mono text-muted-foreground">
                            <div>Background: {pair.background}</div>
                            <div>Text: {pair.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accessibility Guidelines */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Accessibility Guidelines</h3>
                    <div className="grid gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">WCAG 2.1 AA Standards</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span><strong>4.5:1</strong> - Normal text (minimum)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span><strong>3:1</strong> - Large text (18pt+)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <span><strong>3:1</strong> - UI components and graphics</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Usage Guidelines</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Text on Brand:</strong> Use primary color pairs for buttons, links, and brand elements
                          </div>
                          <div>
                            <strong>Text on Surface:</strong> Use surface pairs for body text and content
                          </div>
                          <div>
                            <strong>Disabled States:</strong> Use disabled pairs for non-interactive elements
                          </div>
                          <div>
                            <strong>Focus Rings:</strong> Use focus ring pairs for keyboard navigation indicators
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Design Tokens Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Design Tokens</CardTitle>
                <CardDescription>
                  Complete design token system with color, typography, spacing, radius, elevation, motion, and z-index scales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Color Tokens */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Color Tokens</h3>
                    <div className="grid gap-6">
                      {/* Primary Colors */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Primary</h4>
                        <div className="grid grid-cols-11 gap-2">
                          {Object.entries(designTokens.color.primary).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div 
                                className="h-12 rounded-md mb-2" 
                                style={{ backgroundColor: value }}
                              />
                              <p className="text-xs font-mono">{key}</p>
                              <p className="text-xs text-muted-foreground">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Neutral Colors */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Neutral</h4>
                        <div className="grid grid-cols-11 gap-2">
                          {Object.entries(designTokens.color.neutral).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div 
                                className="h-12 rounded-md mb-2" 
                                style={{ backgroundColor: value }}
                              />
                              <p className="text-xs font-mono">{key}</p>
                              <p className="text-xs text-muted-foreground">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Semantic Colors */}
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-3">Success</h4>
                          <div className="grid grid-cols-6 gap-2">
                            {Object.entries(designTokens.color.success).slice(0, 6).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div 
                                  className="h-8 rounded-md mb-1" 
                                  style={{ backgroundColor: value }}
                                />
                                <p className="text-xs font-mono">{key}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-3">Warning</h4>
                          <div className="grid grid-cols-6 gap-2">
                            {Object.entries(designTokens.color.warning).slice(0, 6).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div 
                                  className="h-8 rounded-md mb-1" 
                                  style={{ backgroundColor: value }}
                                />
                                <p className="text-xs font-mono">{key}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-3">Error</h4>
                          <div className="grid grid-cols-6 gap-2">
                            {Object.entries(designTokens.color.error).slice(0, 6).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div 
                                  className="h-8 rounded-md mb-1" 
                                  style={{ backgroundColor: value }}
                                />
                                <p className="text-xs font-mono">{key}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography Tokens */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Typography Tokens</h3>
                    <div className="grid gap-6">
                      {/* Font Sizes */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Font Sizes</h4>
                        <div className="space-y-2">
                          {Object.entries(designTokens.typography.fontSize).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between p-2 bg-muted rounded">
                              <span className="font-mono text-sm">{key}</span>
                              <span className="text-sm text-muted-foreground">{value}</span>
                              <span style={{ fontSize: value }} className="font-medium">
                                The quick brown fox jumps over the lazy dog
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Font Weights */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Font Weights</h4>
                        <div className="grid grid-cols-5 gap-4">
                          {Object.entries(designTokens.typography.fontWeight).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-muted rounded">
                              <p className="text-sm font-mono mb-1">{key}</p>
                              <p className="text-sm text-muted-foreground mb-2">{value}</p>
                              <p style={{ fontWeight: value }} className="text-lg">
                                Aa
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacing Tokens */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Spacing Tokens</h3>
                    <div className="grid grid-cols-8 gap-4">
                      {Object.entries(designTokens.spacing).slice(0, 16).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div 
                            className="bg-primary-500 rounded mb-2" 
                            style={{ 
                              width: value, 
                              height: '1rem',
                              minWidth: '1rem'
                            }}
                          />
                          <p className="text-xs font-mono">{key}</p>
                          <p className="text-xs text-muted-foreground">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Radius Tokens */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Radius Tokens</h3>
                    <div className="grid grid-cols-8 gap-4">
                      {Object.entries(designTokens.radius).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div 
                            className="bg-primary-500 mb-2" 
                            style={{ 
                              width: '3rem', 
                              height: '3rem',
                              borderRadius: value
                            }}
                          />
                          <p className="text-xs font-mono">{key}</p>
                          <p className="text-xs text-muted-foreground">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Elevation Tokens */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Elevation Tokens</h3>
                    <div className="grid grid-cols-4 gap-6">
                      {Object.entries(designTokens.elevation).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div 
                            className="bg-card border rounded-lg p-4 mb-2" 
                            style={{ boxShadow: value }}
                          >
                            <div className="w-8 h-8 bg-primary-500 rounded mx-auto" />
                          </div>
                          <p className="text-xs font-mono">{key}</p>
                          <p className="text-xs text-muted-foreground break-all">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Motion Tokens */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Motion Tokens</h3>
                    <div className="grid gap-6">
                      {/* Duration */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Duration</h4>
                        <div className="grid grid-cols-4 gap-4">
                          {Object.entries(designTokens.motion.duration).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-muted rounded">
                              <p className="text-sm font-mono">{key}</p>
                              <p className="text-sm text-muted-foreground">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Easing */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Easing</h4>
                        <div className="grid grid-cols-4 gap-4">
                          {Object.entries(designTokens.motion.easing).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-muted rounded">
                              <p className="text-sm font-mono">{key}</p>
                              <p className="text-sm text-muted-foreground break-all">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Z-Index Tokens */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Z-Index Tokens</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {Object.entries(designTokens.zIndex).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-muted rounded">
                          <p className="text-sm font-mono">{key}</p>
                          <p className="text-sm text-muted-foreground">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Typography Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
                <CardDescription>
                  Font families, sizes, and text styles used throughout the application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold">Heading 1</h1>
                    <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Heading 2</h2>
                    <p className="text-sm text-muted-foreground">text-3xl font-bold</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Heading 3</h3>
                    <p className="text-sm text-muted-foreground">text-2xl font-semibold</p>
                  </div>
                  <div>
                    <p className="text-lg">Body Large</p>
                    <p className="text-sm text-muted-foreground">text-lg</p>
                  </div>
                  <div>
                    <p className="text-base">Body</p>
                    <p className="text-sm text-muted-foreground">text-base</p>
                  </div>
                  <div>
                    <p className="text-sm">Body Small</p>
                    <p className="text-sm text-muted-foreground">text-sm</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Colors Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Colors</CardTitle>
                <CardDescription>
                  Color palette and semantic color tokens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="h-12 bg-primary rounded-md"></div>
                    <p className="text-sm font-medium">Primary</p>
                    <p className="text-xs text-muted-foreground">bg-primary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-secondary rounded-md"></div>
                    <p className="text-sm font-medium">Secondary</p>
                    <p className="text-xs text-muted-foreground">bg-secondary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-muted rounded-md"></div>
                    <p className="text-sm font-medium">Muted</p>
                    <p className="text-xs text-muted-foreground">bg-muted</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-destructive rounded-md"></div>
                    <p className="text-sm font-medium">Destructive</p>
                    <p className="text-xs text-muted-foreground">bg-destructive</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Components Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Components</CardTitle>
                <CardDescription>
                  Reusable UI components and their variants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Cards</h4>
                    <div className="grid gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                          <CardDescription>Card description text</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Card content goes here</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Spacing Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Spacing</CardTitle>
                <CardDescription>
                  Consistent spacing scale and layout patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/20 rounded"></div>
                    <p className="text-sm">4px (space-1)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-primary/20 rounded"></div>
                    <p className="text-sm">16px (space-4)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 bg-primary/20 rounded"></div>
                    <p className="text-sm">24px (space-6)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded"></div>
                    <p className="text-sm">32px (space-8)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { designTokens } from "@/lib/tokens";
import { 
  Container, 
  Stack, 
  Inline, 
  Cluster, 
  Grid, 
  Section, 
  Divider, 
  VisuallyHidden,
  SkipToContent 
} from "@/components/layout";
import { UIComponentsDemo } from "@/components/ui-demo";
import { ContentComponentsDemo } from "@/components/content-demo";

export default function StyleGuide() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Style Guide</h1>
        <p className="text-lg text-muted-foreground">
          Design system documentation and component examples
        </p>
      </div>

      {/* Content Components Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Content Components</CardTitle>
            <CardDescription>
              Page-level content components for guest pages and marketing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContentComponentsDemo />
          </CardContent>
        </Card>
      </section>

      {/* UI Components Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>UI Components</CardTitle>
            <CardDescription>
              Core interactive components built with accessibility and design tokens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UIComponentsDemo />
          </CardContent>
        </Card>
      </section>

      {/* Layout Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Layout Primitives</CardTitle>
            <CardDescription>
              Responsive layout components for consistent spacing and alignment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* Container */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Container</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Responsive container with max-widths and consistent padding
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Small Container</h4>
                  <Container size="sm" className="bg-muted p-4 rounded-md">
                    <p className="text-sm">This is a small container with max-width 640px</p>
                  </Container>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Large Container (Default)</h4>
                  <Container className="bg-muted p-4 rounded-md">
                    <p className="text-sm">This is the default large container with max-width 1024px</p>
                  </Container>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Full Width Container</h4>
                  <Container size="full" className="bg-muted p-4 rounded-md">
                    <p className="text-sm">This is a full-width container with no max-width</p>
                  </Container>
                </div>
              </div>
            </div>

            {/* Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stack</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Vertical layout with consistent spacing between items
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-2">Small Gap</h4>
                  <Stack gap="sm" className="bg-muted p-4 rounded-md">
                    <div className="bg-background p-2 rounded">Item 1</div>
                    <div className="bg-background p-2 rounded">Item 2</div>
                    <div className="bg-background p-2 rounded">Item 3</div>
                  </Stack>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Large Gap</h4>
                  <Stack gap="lg" className="bg-muted p-4 rounded-md">
                    <div className="bg-background p-2 rounded">Item 1</div>
                    <div className="bg-background p-2 rounded">Item 2</div>
                    <div className="bg-background p-2 rounded">Item 3</div>
                  </Stack>
                </div>
              </div>
            </div>

            {/* Inline */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Inline</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Horizontal layout with consistent spacing between items
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Default (Wrapped)</h4>
                  <Inline className="bg-muted p-4 rounded-md">
                    <div className="bg-background p-2 rounded">Item 1</div>
                    <div className="bg-background p-2 rounded">Item 2</div>
                    <div className="bg-background p-2 rounded">Item 3</div>
                    <div className="bg-background p-2 rounded">Item 4</div>
                    <div className="bg-background p-2 rounded">Item 5</div>
                  </Inline>
                </div>
                <div>
                  <h4 className="font-medium mb-2">No Wrap</h4>
                  <Inline wrap={false} className="bg-muted p-4 rounded-md">
                    <div className="bg-background p-2 rounded">Item 1</div>
                    <div className="bg-background p-2 rounded">Item 2</div>
                    <div className="bg-background p-2 rounded">Item 3</div>
                  </Inline>
                </div>
              </div>
            </div>

            {/* Cluster */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Cluster</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Flexible horizontal layout with gap spacing (no margin collapse)
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Default Cluster</h4>
                  <Cluster className="bg-muted p-4 rounded-md">
                    <div className="bg-background p-2 rounded">Tag 1</div>
                    <div className="bg-background p-2 rounded">Tag 2</div>
                    <div className="bg-background p-2 rounded">Tag 3</div>
                    <div className="bg-background p-2 rounded">Tag 4</div>
                  </Cluster>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Justify Between</h4>
                  <Cluster justify="between" className="bg-muted p-4 rounded-md">
                    <div className="bg-background p-2 rounded">Left</div>
                    <div className="bg-background p-2 rounded">Right</div>
                  </Cluster>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Grid</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Responsive grid layout with automatic column adjustments
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">2 Columns (Responsive)</h4>
                  <Grid cols={2} className="bg-muted p-4 rounded-md">
                    <div className="bg-background p-4 rounded">Grid Item 1</div>
                    <div className="bg-background p-4 rounded">Grid Item 2</div>
                    <div className="bg-background p-4 rounded">Grid Item 3</div>
                    <div className="bg-background p-4 rounded">Grid Item 4</div>
                  </Grid>
                </div>
                <div>
                  <h4 className="font-medium mb-2">3 Columns (Responsive)</h4>
                  <Grid cols={3} className="bg-muted p-4 rounded-md">
                    <div className="bg-background p-4 rounded">Grid Item 1</div>
                    <div className="bg-background p-4 rounded">Grid Item 2</div>
                    <div className="bg-background p-4 rounded">Grid Item 3</div>
                  </Grid>
                </div>
              </div>
            </div>

            {/* Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Section</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Content sections with consistent vertical spacing
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Small Spacing</h4>
                  <Section spacing="sm" className="bg-muted rounded-md">
                    <div className="bg-background p-4 rounded">
                      <h5 className="font-medium mb-2">Section Content</h5>
                      <p className="text-sm">This section has small spacing (py-8)</p>
                    </div>
                  </Section>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Large Spacing (Default)</h4>
                  <Section className="bg-muted rounded-md">
                    <div className="bg-background p-4 rounded">
                      <h5 className="font-medium mb-2">Section Content</h5>
                      <p className="text-sm">This section has large spacing (py-16 lg:py-24)</p>
                    </div>
                  </Section>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Divider</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Visual separators with different sizes and orientations
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Horizontal Dividers</h4>
                  <div className="space-y-2">
                    <div className="bg-muted p-4 rounded">
                      <p className="text-sm mb-2">Content above</p>
                      <Divider size="sm" />
                      <p className="text-sm mt-2">Content below</p>
                    </div>
                    <div className="bg-muted p-4 rounded">
                      <p className="text-sm mb-2">Content above</p>
                      <Divider size="lg" />
                      <p className="text-sm mt-2">Content below</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Vertical Divider</h4>
                  <Inline className="bg-muted p-4 rounded-md">
                    <span className="text-sm">Left content</span>
                    <Divider orientation="vertical" size="md" />
                    <span className="text-sm">Right content</span>
                  </Inline>
                </div>
              </div>
            </div>

            {/* Accessibility Components */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Accessibility Components</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Components for improved accessibility and screen reader support
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Visually Hidden</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm">This text is visible</p>
                    <VisuallyHidden>This text is hidden visually but accessible to screen readers</VisuallyHidden>
                    <p className="text-sm mt-2">This text is also visible</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Skip to Content</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm mb-2">
                      Press Tab to see the skip link appear at the top of the page
                    </p>
                    <SkipToContent href="#main-content">
                      Skip to main content
                    </SkipToContent>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Examples */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Responsive Layout Examples</h3>
              <p className="text-sm text-muted-foreground mb-4">
                How layout primitives adapt to different screen sizes
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Responsive Grid</h4>
                  <Grid cols={4} className="bg-muted p-4 rounded-md">
                    <div className="bg-background p-3 rounded text-xs">1 col mobile</div>
                    <div className="bg-background p-3 rounded text-xs">2 cols tablet</div>
                    <div className="bg-background p-3 rounded text-xs">4 cols desktop</div>
                    <div className="bg-background p-3 rounded text-xs">Responsive</div>
                  </Grid>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Responsive Stack to Inline</h4>
                  <div className="md:hidden">
                    <Stack gap="sm" className="bg-muted p-4 rounded-md">
                      <div className="bg-background p-2 rounded text-xs">Stacked on mobile</div>
                      <div className="bg-background p-2 rounded text-xs">Vertical layout</div>
                    </Stack>
                  </div>
                  <div className="hidden md:block">
                    <Inline className="bg-muted p-4 rounded-md">
                      <div className="bg-background p-2 rounded text-xs">Inline on desktop</div>
                      <div className="bg-background p-2 rounded text-xs">Horizontal layout</div>
                    </Inline>
                  </div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      </section>

      {/* Typography and Elements Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Typography & Elements</CardTitle>
            <CardDescription>
              Global base styles for typography, links, lists, and layout elements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* Headings */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Headings</h3>
              <div className="space-y-4">
                <div>
                  <h1>Heading 1 (2.5rem, 700 weight)</h1>
                  <p className="text-sm text-muted-foreground">Used for page titles and main sections</p>
                </div>
                <div>
                  <h2>Heading 2 (2rem, 600 weight)</h2>
                  <p className="text-sm text-muted-foreground">Used for major section headers</p>
                </div>
                <div>
                  <h3>Heading 3 (1.5rem, 600 weight)</h3>
                  <p className="text-sm text-muted-foreground">Used for subsection headers</p>
                </div>
                <div>
                  <h4>Heading 4 (1.25rem, 600 weight)</h4>
                  <p className="text-sm text-muted-foreground">Used for minor section headers</p>
                </div>
                <div>
                  <h5>Heading 5 (1.125rem, 600 weight)</h5>
                  <p className="text-sm text-muted-foreground">Used for small section headers</p>
                </div>
                <div>
                  <h6>Heading 6 (1rem, 600 weight)</h6>
                  <p className="text-sm text-muted-foreground">Used for the smallest headers</p>
                </div>
              </div>
            </div>

            {/* Body Text */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Body Text</h3>
              <div className="space-y-4">
                <div>
                  <p>
                    This is a standard paragraph with 1.7 line height and proper spacing. 
                    It provides good readability and follows typographic best practices. 
                    The text color adapts to the current theme and maintains proper contrast ratios.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This is muted text used for secondary information and captions.
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <div className="space-y-4">
                <div>
                  <p>
                    This is a paragraph with an <a href="#example">inline link</a> that demonstrates 
                    the default link styling with underline and hover effects.
                  </p>
                  <p>
                    <a href="#example" className="text-primary hover:text-primary/80">
                      Primary colored link
                    </a> - 
                    <a href="#example" className="text-secondary-foreground hover:text-secondary-foreground/80">
                      Secondary colored link
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Lists */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Lists</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Unordered List</h4>
                  <ul>
                    <li>First item with proper spacing and bullet styling</li>
                    <li>Second item demonstrating list hierarchy</li>
                    <li>Third item with nested content
                      <ul>
                        <li>Nested item with proper indentation</li>
                        <li>Another nested item</li>
                      </ul>
                    </li>
                    <li>Fourth item completing the list</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ordered List</h4>
                  <ol>
                    <li>First step in a process</li>
                    <li>Second step with proper numbering</li>
                    <li>Third step with nested content
                      <ol>
                        <li>Sub-step with proper indentation</li>
                        <li>Another sub-step</li>
                      </ol>
                    </li>
                    <li>Fourth step completing the process</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Container and Layout */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Container & Layout</h3>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Container Classes</h4>
                  <p className="text-sm">
                    The <code>.container</code> class provides responsive max-widths:
                  </p>
                  <ul className="text-sm mt-2">
                    <li><strong>Mobile:</strong> 100% width with 1rem padding</li>
                    <li><strong>640px+:</strong> max-width 640px</li>
                    <li><strong>768px+:</strong> max-width 768px</li>
                    <li><strong>1024px+:</strong> max-width 1024px</li>
                    <li><strong>1280px+:</strong> max-width 1280px</li>
                    <li><strong>1536px+:</strong> max-width 1536px</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Section Spacing</h4>
                  <p className="text-sm">
                    Sections have consistent vertical spacing:
                  </p>
                  <ul className="text-sm mt-2">
                    <li><strong>Mobile:</strong> 4rem (64px) top and bottom padding</li>
                    <li><strong>768px+:</strong> 6rem (96px) top and bottom padding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Focus States */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Focus States</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  All interactive elements have consistent focus outlines for accessibility:
                </p>
                <div className="space-y-2">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                    Focus me (Tab to test)
                  </button>
                  <a href="#example" className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-md">
                    Link with focus
                  </a>
                  <input 
                    type="text" 
                    placeholder="Input with focus" 
                    className="px-4 py-2 border border-border rounded-md bg-background"
                  />
                </div>
              </div>
            </div>

            {/* Utility Classes */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Utility Classes</h3>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Screen Reader Only</h4>
                  <p className="text-sm">
                    Use <code>.sr-only</code> class to hide content visually while keeping it accessible to screen readers.
                  </p>
                  <button className="sr-only">This button is hidden visually but accessible to screen readers</button>
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
              Font sizes, weights, and line heights from the design tokens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(designTokens.typography.fontSize).map(([key, value]) => (
                <div key={key} className="border-b pb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-mono text-muted-foreground min-w-[100px]">
                      {key}
                    </span>
                    <span 
                      className="font-sans"
                      style={{ 
                        fontSize: typeof value === 'string' ? value : `${value}px`,
                        lineHeight: designTokens.typography.lineHeight[key as keyof typeof designTokens.typography.lineHeight] || '1.2'
                      }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Size: {typeof value === 'string' ? value : `${value}px`} | 
                    Line Height: {designTokens.typography.lineHeight[key as keyof typeof designTokens.typography.lineHeight] || '1.2'}
                  </p>
                </div>
              ))}
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
              Color palette and theme variables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-12 bg-primary rounded-md"></div>
                <p className="text-sm font-medium">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-secondary rounded-md"></div>
                <p className="text-sm font-medium">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-muted rounded-md"></div>
                <p className="text-sm font-medium">Muted</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-accent rounded-md"></div>
                <p className="text-sm font-medium">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-destructive rounded-md"></div>
                <p className="text-sm font-medium">Destructive</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-card rounded-md border"></div>
                <p className="text-sm font-medium">Card</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-popover rounded-md border"></div>
                <p className="text-sm font-medium">Popover</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-background rounded-md border"></div>
                <p className="text-sm font-medium">Background</p>
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
              Reusable UI components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Card Component</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Example Card</CardTitle>
                    <CardDescription>This is a card component example</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content goes here with proper spacing and typography.</p>
                  </CardContent>
                </Card>
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
              Spacing scale and layout utilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(designTokens.spacing).slice(0, 10).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <span className="text-sm font-mono text-muted-foreground min-w-[60px]">
                    {key}
                  </span>
                  <div 
                    className="bg-primary h-4 rounded"
                    style={{ width: typeof value === 'string' ? value : `${value}px` }}
                  ></div>
                  <span className="text-sm text-muted-foreground">
                    {typeof value === 'string' ? value : `${value}px`}
                  </span>
                </div>
              ))}
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
              Centralized design system tokens and their values
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              
              {/* Color Tokens */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Color Scale</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(designTokens.color.primary).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div 
                        className="h-16 rounded-md"
                        style={{ backgroundColor: value as string }}
                      ></div>
                      <p className="text-sm font-medium">{key}</p>
                      <p className="text-xs text-muted-foreground font-mono">{value as string}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Tokens */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Typography Scale</h3>
                <div className="space-y-4">
                  {Object.entries(designTokens.typography.fontSize).map(([key, value]) => (
                    <div key={key} className="border-b pb-2">
                      <div className="flex items-baseline gap-4">
                        <span className="text-sm font-mono text-muted-foreground min-w-[100px]">
                          {key}
                        </span>
                        <span 
                          className="font-sans"
                          style={{ 
                            fontSize: typeof value === 'string' ? value : `${value}px`,
                            lineHeight: designTokens.typography.lineHeight[key as keyof typeof designTokens.typography.lineHeight] || '1.2'
                          }}
                        >
                          Sample text
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spacing Tokens */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Spacing Scale</h3>
                <div className="space-y-2">
                  {Object.entries(designTokens.spacing).slice(0, 8).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4">
                      <span className="text-sm font-mono text-muted-foreground min-w-[60px]">
                        {key}
                      </span>
                      <div 
                        className="bg-primary h-4 rounded"
                        style={{ width: typeof value === 'string' ? value : `${value}px` }}
                      ></div>
                      <span className="text-sm text-muted-foreground">
                        {typeof value === 'string' ? value : `${value}px`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Radius Tokens */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Border Radius Scale</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(designTokens.radius).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div 
                        className="h-16 bg-primary rounded"
                        style={{ borderRadius: typeof value === 'string' ? value : `${value}px` }}
                      ></div>
                      <p className="text-sm font-medium">{key}</p>
                      <p className="text-xs text-muted-foreground font-mono">{value as string}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elevation Tokens */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Elevation Scale</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(designTokens.elevation).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div 
                        className="h-16 bg-background rounded-md border"
                        style={{ boxShadow: value as string }}
                      ></div>
                      <p className="text-sm font-medium">{key}</p>
                      <p className="text-xs text-muted-foreground font-mono">{value as string}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motion Tokens */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Motion Scale</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Duration</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(designTokens.motion.duration).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <p className="text-sm font-medium">{key}</p>
                          <p className="text-xs text-muted-foreground font-mono">{value as string}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Easing</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(designTokens.motion.easing).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <p className="text-sm font-medium">{key}</p>
                          <p className="text-xs text-muted-foreground font-mono">{value as string}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Z-Index Tokens */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Z-Index Scale</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(designTokens.zIndex).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <p className="text-sm font-medium">{key}</p>
                      <p className="text-xs text-muted-foreground font-mono">{value as string}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contrast & Accessibility Section */}
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
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{key}</span>
                        <span className="text-sm text-muted-foreground">
                          {pair.contrastRatio}:1 ratio
                        </span>
                      </div>
                      <div
                        className="h-16 rounded-md mb-3 flex items-center justify-center"
                        style={{ backgroundColor: pair.background }}
                      >
                        <span
                          className="text-lg font-medium"
                          style={{ color: 'text' in pair ? pair.text : pair.ring }}
                        >
                          Sample Text
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{pair.usage}</p>
                      <div className="mt-2 text-xs font-mono text-muted-foreground">
                        <div>Background: {pair.background}</div>
                        <div>Text: {'text' in pair ? pair.text : pair.ring}</div>
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
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{key}</span>
                        <span className="text-sm text-muted-foreground">
                          {pair.contrastRatio}:1 ratio
                        </span>
                      </div>
                      <div
                        className="h-16 rounded-md mb-3 flex items-center justify-center"
                        style={{ backgroundColor: pair.background }}
                      >
                        <span
                          className="text-lg font-medium"
                          style={{ color: 'text' in pair ? pair.text : pair.ring }}
                        >
                          Sample Text
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{pair.usage}</p>
                      <div className="mt-2 text-xs font-mono text-muted-foreground">
                        <div>Background: {pair.background}</div>
                        <div>Text: {'text' in pair ? pair.text : pair.ring}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessibility Guidelines */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Accessibility Guidelines</h3>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">WCAG 2.1 AA Standards</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Normal text: Minimum 4.5:1 contrast ratio</li>
                      <li>• Large text: Minimum 3:1 contrast ratio</li>
                      <li>• UI components: Minimum 3:1 contrast ratio</li>
                      <li>• Focus indicators: Minimum 3:1 contrast ratio</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Best Practices</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Use semantic HTML elements</li>
                      <li>• Provide sufficient color contrast</li>
                      <li>• Include focus indicators for all interactive elements</li>
                      <li>• Test with screen readers and keyboard navigation</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}

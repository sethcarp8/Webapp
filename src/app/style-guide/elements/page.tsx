import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"

export default function ElementsPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Elements</h1>
        <p className="text-muted-foreground">Preview of base HTML elements styled by global tokens.</p>
      </div>

      {/* Headings */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Headings</CardTitle>
            <CardDescription>Mobile-first typographic scale</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </CardContent>
        </Card>
      </section>

      {/* Paragraphs & Links */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Paragraphs & Links</CardTitle>
            <CardDescription>Base copy styles and link treatments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This is a standard paragraph with appropriate line height and contrast. It adapts to light and dark themes and uses the tokenized font scale.
            </p>
            <p>
              Inline <a href="#example">link example</a> with hover and focus styles.
            </p>
            <div className="space-x-3">
              <a href="#primary" className="text-primary hover:text-primary/80">Primary link</a>
              <a href="#muted" className="text-muted-foreground hover:text-foreground">Muted link</a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Lists */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Lists</CardTitle>
            <CardDescription>Unordered and ordered list styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Unordered List</h4>
                <ul>
                  <li>First item with proper spacing</li>
                  <li>Second item demonstrating hierarchy
                    <ul>
                      <li>Nested item with indentation</li>
                      <li>Another nested item</li>
                    </ul>
                  </li>
                  <li>Third item completing the list</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ordered List</h4>
                <ol>
                  <li>First step</li>
                  <li>Second step
                    <ol>
                      <li>Sub-step A</li>
                      <li>Sub-step B</li>
                    </ol>
                  </li>
                  <li>Third step</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Focus States */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Focus States</CardTitle>
            <CardDescription>Token-based focus outline and ring</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Focusable Button</button>
            <a href="#focus" className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-md">Focusable Link</a>
            <input type="text" placeholder="Focusable input" className="px-4 py-2 border border-border rounded-md bg-background" />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}



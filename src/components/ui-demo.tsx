import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import { 
  Button, 
  Input, 
  Label, 
  Textarea, 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Badge,
  Alert,
  AlertDescription,
  AlertTitle
} from "@/components/ui"

export function UIComponentsDemo() {
  return (
    <div className="space-y-8">
      
      {/* Button Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>
              Interactive buttons with multiple variants and states. Use for primary actions, form submissions, and navigation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Button Variants */}
            <div>
              <h4 className="font-semibold mb-3">Variants</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <h4 className="font-semibold mb-3">Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">+</Button>
              </div>
            </div>

            {/* Button States */}
            <div>
              <h4 className="font-semibold mb-3">States</h4>
              <div className="flex flex-wrap gap-3">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button className="opacity-50">Loading...</Button>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Usage Guidelines</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Default:</strong> Primary actions and form submissions</li>
                <li>• <strong>Secondary:</strong> Secondary actions and alternatives</li>
                <li>• <strong>Destructive:</strong> Dangerous actions like delete</li>
                <li>• <strong>Outline:</strong> Less prominent actions</li>
                <li>• <strong>Ghost:</strong> Subtle actions in navigation</li>
                <li>• <strong>Link:</strong> Navigation and external links</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Form Components */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>
              Input fields, labels, and form controls with proper accessibility and validation states.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Input */}
            <div>
              <h4 className="font-semibold mb-3">Input</h4>
              <div className="grid gap-4 max-w-sm">
                <div>
                  <Label htmlFor="normal">Normal Input</Label>
                  <Input id="normal" placeholder="Enter text..." />
                </div>
                <div>
                  <Label htmlFor="error">Error State</Label>
                  <Input id="error" error placeholder="Invalid input..." />
                </div>
                <div>
                  <Label htmlFor="success">Success State</Label>
                  <Input id="success" success placeholder="Valid input..." />
                </div>
                <div>
                  <Label htmlFor="disabled">Disabled</Label>
                  <Input id="disabled" disabled placeholder="Disabled input..." />
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div>
              <h4 className="font-semibold mb-3">Textarea</h4>
              <div className="grid gap-4 max-w-sm">
                <div>
                  <Label htmlFor="textarea">Description</Label>
                  <Textarea id="textarea" placeholder="Enter description..." />
                </div>
                <div>
                  <Label htmlFor="textarea-error">Error State</Label>
                  <Textarea id="textarea-error" error placeholder="Invalid textarea..." />
                </div>
              </div>
            </div>

            {/* Select */}
            <div>
              <h4 className="font-semibold mb-3">Select</h4>
              <div className="grid gap-4 max-w-sm">
                <div>
                  <Label htmlFor="select">Choose Option</Label>
                  <Select>
                    <SelectTrigger id="select">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Form Guidelines</h5>
              <ul className="text-sm space-y-1">
                <li>• Always pair inputs with labels for accessibility</li>
                <li>• Use error states to show validation feedback</li>
                <li>• Provide clear placeholder text for guidance</li>
                <li>• Disable inputs when form is processing</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Components */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Interactive Components</CardTitle>
            <CardDescription>
              Checkboxes, radio buttons, and switches for user input and preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Checkbox */}
            <div>
              <h4 className="font-semibold mb-3">Checkbox</h4>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </div>

            {/* Radio Group */}
            <div>
              <h4 className="font-semibold mb-3">Radio Group</h4>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="option-1" />
                  <Label htmlFor="option-1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="option-2" />
                  <Label htmlFor="option-2">Option 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-3" id="option-3" />
                  <Label htmlFor="option-3">Option 3</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Switch */}
            <div>
              <h4 className="font-semibold mb-3">Switch</h4>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Interactive Guidelines</h5>
              <ul className="text-sm space-y-1">
                <li>• Use checkboxes for multiple selections</li>
                <li>• Use radio buttons for single selections</li>
                <li>• Use switches for on/off toggles</li>
                <li>• Always provide clear labels</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Feedback Components */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Feedback Components</CardTitle>
            <CardDescription>
              Badges and alerts for status indicators and user feedback.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Badge */}
            <div>
              <h4 className="font-semibold mb-3">Badge</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            {/* Alert */}
            <div>
              <h4 className="font-semibold mb-3">Alert</h4>
              <div className="space-y-3">
                <Alert>
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    This is a default alert with an icon and description.
                  </AlertDescription>
                </Alert>
                
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    This is a destructive alert for errors and warnings.
                  </AlertDescription>
                </Alert>
                
                <Alert variant="success">
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    This is a success alert for positive feedback.
                  </AlertDescription>
                </Alert>
                
                <Alert variant="info">
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an info alert for general information.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Feedback Guidelines</h5>
              <ul className="text-sm space-y-1">
                <li>• Use badges for status indicators and labels</li>
                <li>• Use alerts for important messages and notifications</li>
                <li>• Choose appropriate variants for the message type</li>
                <li>• Keep alert content concise and actionable</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

    </div>
  )
}

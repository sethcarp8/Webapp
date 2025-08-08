"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import { designTokens } from "@/lib/tokens"
import { computeContrastRatio } from "@/lib/utils"

function Pair({ label, bg, fg, usage }: { label: string; bg: string; fg: string; usage: string }) {
  const ratio = computeContrastRatio(fg, bg)
  const passesAA = ratio >= 4.5
  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-medium">{label}</span>
        <span className={passesAA ? "text-green-600" : "text-red-600"}>{passesAA ? "pass" : "fail"} ({ratio}:1)</span>
      </div>
      <div className="h-16 rounded flex items-center justify-center" style={{ backgroundColor: bg }}>
        <span className="text-sm font-medium" style={{ color: fg }}>
          Sample Text
        </span>
      </div>
      <div className="text-xs text-muted-foreground">
        <div>Background: {bg}</div>
        <div>Text: {fg}</div>
        <div>Usage: {usage}</div>
      </div>
    </div>
  )
}

type PairRecord = Record<string, { background: string } & ({ text: string; usage: string } | { ring: string; usage: string })>

export default function ContrastPage() {
  const lightPairs: [string, PairRecord[keyof PairRecord]][] = Object.entries(designTokens.lightThemePairs as unknown as PairRecord)
  const darkPairs: [string, PairRecord[keyof PairRecord]][] = Object.entries(designTokens.darkThemePairs as unknown as PairRecord)

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Contrast</h1>
        <p className="text-muted-foreground">Accessible text/background color pairs for light and dark themes with computed ratios.</p>
      </div>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Light Theme</CardTitle>
            <CardDescription>Color pairs and their WCAG contrast ratios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {lightPairs.map(([key, pair]) => (
                <Pair key={key} label={key} bg={pair.background} fg={'text' in pair ? pair.text : (pair as { ring: string }).ring} usage={pair.usage} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Dark Theme</CardTitle>
            <CardDescription>Color pairs and their WCAG contrast ratios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {darkPairs.map(([key, pair]) => (
                <Pair key={key} label={key} bg={pair.background} fg={'text' in pair ? pair.text : (pair as { ring: string }).ring} usage={pair.usage} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}



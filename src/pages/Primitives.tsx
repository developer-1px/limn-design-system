import * as React from 'react'
import { Button } from '@/components/ui/Button'
import { PageHeader } from '@/widgets/common/PageHeader'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Checkbox } from '@/components/ui/Checkbox'
import { Switch } from '@/components/ui/Switch'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Separator } from '@/components/ui/Separator'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { Toggle } from '@/components/ui/toggle'
import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Heart,
  Star,
  Zap,
  User,
} from 'lucide-react'

export default function Primitives() {
  const [sliderValue, setSliderValue] = React.useState([50])
  const [progressValue, setProgressValue] = React.useState(65)
  const [checked, setChecked] = React.useState(false)
  const [switchOn, setSwitchOn] = React.useState(false)
  const [toggleActive, setToggleActive] = React.useState(false)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue((prev) => {
        const next = prev + 10
        return next > 100 ? 0 : next
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #08080d 0%, #0a0a10 50%, #0d0a10 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        padding: 'calc(var(--limn-titlebar-height) + 48px) 32px 64px 32px',
        color: 'rgba(255,250,245,0.7)',
      }}
    >
      {/* Container - centered, narrow */}
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <PageHeader subtitle="UI Primitives" />
        </div>
          {/* Form & Input */}
          <Section title="Form & Input" description="Interactive form controls">
            <Example title="Button" description="Primary, ghost, and outline variants">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Primary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button size="sm">Small Button</Button>
                <Button size="lg">Large Button</Button>
                <Button disabled>Disabled</Button>
              </div>
            </Example>

            <Example title="Input" description="Text input with warm focus glow">
              <div className="max-w-md space-y-3">
                <Input placeholder="Enter text..." />
                <Input placeholder="Disabled input" disabled />
                <Input placeholder="With value" value="Hello LIMN" readOnly />
              </div>
            </Example>

            <Example title="Checkbox" description="Toggle for checked/unchecked states">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="check1"
                    checked={checked}
                    onCheckedChange={(c) => setChecked(c as boolean)}
                  />
                  <label htmlFor="check1" className="text-sm text-text-primary cursor-pointer">
                    Accept terms and conditions
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check2" checked />
                  <label htmlFor="check2" className="text-sm text-text-primary cursor-pointer">
                    Checked
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check3" disabled />
                  <label htmlFor="check3" className="text-sm text-text-muted cursor-not-allowed">
                    Disabled
                  </label>
                </div>
              </div>
            </Example>

            <Example title="Switch" description="Toggle switch for on/off states">
              <div className="flex items-center gap-2">
                <Switch
                  id="switch1"
                  checked={switchOn}
                  onCheckedChange={setSwitchOn}
                />
                <label htmlFor="switch1" className="text-sm text-text-primary">
                  {switchOn ? 'Enabled' : 'Disabled'}
                </label>
              </div>
            </Example>

            <Example title="Select" description="Dropdown list selection">
              <div className="max-w-xs">
                <Select defaultValue="option1">
                  <SelectTrigger>
                    <SelectValue placeholder="Select option..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Example>

            <Example title="Slider" description="Value selection within range">
              <div className="max-w-md space-y-3">
                <div>
                  <div className="mb-2 text-xs text-text-secondary">Value: {sliderValue[0]}</div>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    min={0}
                    max={100}
                  />
                </div>
                <Slider defaultValue={[75]} disabled />
              </div>
            </Example>
          </Section>

          {/* Feedback & Status */}
          <Section title="Feedback & Status" description="Visual feedback components">
            <Example title="Badge" description="Visual labels and tags">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="active">Active</Badge>
              </div>
            </Example>

            <Example title="Progress" description="Task completion indicator">
              <div className="max-w-md space-y-4">
                <div>
                  <div className="mb-2 text-xs text-text-secondary">Default (animated: {progressValue}%)</div>
                  <Progress value={progressValue} />
                </div>
                <div>
                  <div className="mb-2 text-xs text-text-secondary">Success</div>
                  <Progress value={75} variant="success" />
                </div>
                <div>
                  <div className="mb-2 text-xs text-text-secondary">Warning</div>
                  <Progress value={50} variant="warning" />
                </div>
                <div>
                  <div className="mb-2 text-xs text-text-secondary">Error</div>
                  <Progress value={25} variant="error" />
                </div>
              </div>
            </Example>

            <Example title="Alert" description="User attention callouts">
              <div className="space-y-3">
                <Alert>
                  <Info />
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    This is a default alert with info icon.
                  </AlertDescription>
                </Alert>
                <Alert variant="success">
                  <CheckCircle />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your changes have been saved successfully.
                  </AlertDescription>
                </Alert>
                <Alert variant="warning">
                  <AlertTriangle />
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Please review your changes before continuing.
                  </AlertDescription>
                </Alert>
                <Alert variant="error">
                  <XCircle />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    An error occurred while processing your request.
                  </AlertDescription>
                </Alert>
              </div>
            </Example>

            <Example title="Tooltip" description="Hover/keyboard-triggered info popup">
              <div className="flex flex-wrap items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tooltip content</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost">
                      <Heart className="mr-2" size={14} />
                      With Icon
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to favorite</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Example>

            <Example title="Skeleton" description="Loading placeholder">
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex items-center gap-3">
                  <Skeleton className="size-12 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              </div>
            </Example>
          </Section>

          {/* Layout & Structure */}
          <Section title="Layout & Structure" description="Layout and container components">
            <Example title="Card" description="Container with header, content, footer">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <h3 className="mb-2 text-sm font-medium text-text-primary">Default Card</h3>
                  <p className="text-xs text-text-secondary">
                    Card content goes here with subtle background.
                  </p>
                </Card>
                <Card className="p-4" active>
                  <h3 className="mb-2 text-sm font-medium text-text-primary">Active Card</h3>
                  <p className="text-xs text-text-secondary">
                    Card with active state and warm glow effect.
                  </p>
                </Card>
              </div>
            </Example>

            <Example title="Separator" description="Visual content divider">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-text-primary">Content above</p>
                  <Separator className="my-4" />
                  <p className="text-sm text-text-primary">Content below</p>
                </div>
              </div>
            </Example>

            <Example title="Avatar" description="Profile image with fallback">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>
                    <User size={16} />
                  </AvatarFallback>
                </Avatar>
              </div>
            </Example>
          </Section>

          {/* Interaction */}
          <Section title="Interaction" description="Interactive UI elements">
            <Example title="Toggle" description="Two-state button (on/off)">
              <div className="flex items-center gap-3">
                <Toggle
                  pressed={toggleActive}
                  onPressedChange={setToggleActive}
                >
                  <Star size={14} className="mr-2" />
                  {toggleActive ? 'Starred' : 'Star'}
                </Toggle>
                <Toggle>
                  <Zap size={14} />
                </Toggle>
                <Toggle disabled>
                  Disabled
                </Toggle>
              </div>
            </Example>
          </Section>
      </div>
    </div>
  )
}

// Helper components
interface SectionProps {
  title: string
  description: string
  children: React.ReactNode
}

function Section({ title, description, children }: SectionProps) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <h2
          style={{
            color: 'rgba(255,240,220,0.95)',
            fontSize: 18,
            fontWeight: 500,
            margin: 0,
          }}
        >
          {title}
        </h2>
        <p style={{ color: 'rgba(255,250,245,0.5)', fontSize: 13, margin: '8px 0 0 0' }}>
          {description}
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {children}
      </div>
    </div>
  )
}

interface ExampleProps {
  title: string
  description: string
  children: React.ReactNode
}

function Example({ title, description, children }: ExampleProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <h3 style={{ color: 'rgba(255,250,245,0.8)', fontSize: 14, fontWeight: 500, margin: 0 }}>
          {title}
        </h3>
        <p style={{ color: 'rgba(255,250,245,0.4)', fontSize: 12, margin: '4px 0 0 0' }}>
          {description}
        </p>
      </div>
      <div
        style={{
          padding: 24,
          borderRadius: 12,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

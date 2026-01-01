# LIMN Design System v2.0

> "흐릿한 의도가 선명한 형태가 되는 곳"
> Where blurry intentions become clear forms.

---

## Table of Contents

1. [Philosophy](#philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Border & Radius](#border--radius)
6. [Shadows & Glow](#shadows--glow)
7. [Animation](#animation)
8. [State Guidelines](#state-guidelines)
9. [App Shell Components](#app-shell-components)
10. [Editor Components](#editor-components)
11. [AI Components](#ai-components)
12. [Feedback Components](#feedback-components)
13. [Do's and Don'ts](#dos-and-donts)
14. [CSS Variables](#css-variables)

---

## Philosophy

LIMN의 디자인은 **Blur → Clarity** 메타포를 시각적으로 구현한다.

### Core Principles

| 원칙 | 설명 |
|------|------|
| **Warmth over Cold** | 차가운 파란색 대신 따뜻한 오렌지/크림 |
| **Glow means Active** | 활성 상태만 빛나고, 나머지는 쉼 |
| **Depth through Transparency** | 불투명도로 계층 구조 표현 |
| **Gentle Transitions** | 급격한 변화 없이 부드러운 전환 |
| **Native App Feel** | 웹이 아닌 네이티브 앱의 무게감 |

---

## Color Palette

### Background
```css
--bg-deep:       #08080d                    /* 가장 깊은 배경 */
--bg-base:       #0a0a10                    /* 기본 배경 */
--bg-surface:    rgba(18, 18, 28, 0.9)      /* 카드, 패널 */
--bg-elevated:   rgba(12, 12, 18, 0.98)     /* 헤더, 사이드바 */
--bg-overlay:    rgba(0, 0, 0, 0.6)         /* 모달 백드롭 */
```

### Warm Accent
```css
--warm-50:       #fffaf5                    /* 가장 밝은 */
--warm-100:      #fff8f0
--warm-200:      #ffeedd
--warm-300:      #ffcc99                    /* Primary */
--warm-400:      rgba(255, 200, 150, 0.9)   /* CTA 버튼 */
--warm-500:      rgba(255, 180, 120, 0.8)   /* 호버 */
--warm-glow:     rgba(255, 180, 120, 0.15)  /* 배경 글로우 */
```

### Text
```css
--text-primary:    rgba(255, 240, 220, 0.95)  /* 제목, 활성 */
--text-secondary:  rgba(255, 250, 245, 0.7)   /* 본문 */
--text-tertiary:   rgba(255, 250, 245, 0.5)   /* 설명 */
--text-muted:      rgba(255, 250, 245, 0.35)  /* 비활성 */
--text-faint:      rgba(255, 250, 245, 0.2)   /* 라인 넘버 */
```

### Status Colors
```css
--status-success:    #4ade80                  /* 성공, 연결됨 */
--status-success-bg: rgba(74, 222, 128, 0.1)
--status-warning:    #fbbf24                  /* 주의 */
--status-warning-bg: rgba(251, 191, 36, 0.1)
--status-error:      #f87171                  /* 오류 */
--status-error-bg:   rgba(248, 113, 113, 0.1)
--status-info:       #60a5fa                  /* 정보 */
```

### Border
```css
--border-subtle:   rgba(255, 255, 255, 0.04)  /* 가장 약한 */
--border-default:  rgba(255, 255, 255, 0.06)  /* 기본 */
--border-light:    rgba(255, 255, 255, 0.08)  /* 카드 */
--border-medium:   rgba(255, 255, 255, 0.1)   /* 강조 */
--border-warm:     rgba(255, 200, 150, 0.2)   /* 따뜻한 강조 */
--border-active:   rgba(255, 200, 150, 0.3)   /* 활성 */
```

---

## Typography

### Font Stack
```css
--font-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
               'Noto Sans KR', sans-serif;
--font-mono:   'SF Mono', 'Fira Code', 'JetBrains Mono', 
               'Consolas', monospace;
```

### Scale
```css
--text-2xs:   10px     /* 라벨, 배지 */
--text-xs:    11px     /* 상태바, 힌트 */
--text-sm:    12px     /* 캡션, 메타 */
--text-base:  13px     /* 기본 본문 */
--text-md:    14px     /* 강조 본문 */
--text-lg:    15px     /* 소제목 */
--text-xl:    18px     /* 섹션 제목 */
--text-2xl:   20px     /* 페이지 제목 */
```

### Weight
```css
--weight-normal:  400
--weight-medium:  500
--weight-bold:    600
```

### Special Styles
```css
/* 라벨 (UPPERCASE) */
.label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}

/* 코드 */
.code {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
}

/* 단축키 */
.shortcut {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
}
```

---

## Spacing & Layout

### Spacing Scale
```css
--space-0:    0
--space-1:    4px
--space-2:    6px
--space-3:    8px
--space-4:    10px
--space-5:    12px
--space-6:    14px
--space-7:    16px
--space-8:    20px
--space-9:    24px
--space-10:   32px
--space-11:   40px
--space-12:   48px
```

### Layout Dimensions
```css
/* Window */
--titlebar-height:   38px
--statusbar-height:  24px

/* Sidebar */
--activity-bar-width:  48px
--sidebar-width:       260px
--sidebar-min:         200px
--sidebar-max:         400px

/* Panels */
--panel-min-height:    120px
--chat-panel-width:    380px

/* Editor */
--tab-height:          36px
--breadcrumb-height:   32px
--line-height:         22px
--gutter-width:        48px
```

---

## Border & Radius

### Radius Scale
```css
--radius-xs:    2px     /* 인라인 코드 */
--radius-sm:    4px     /* 태그, 뱃지 */
--radius-md:    6px     /* 버튼, 작은 입력 */
--radius-lg:    8px     /* 탭, 메뉴 아이템 */
--radius-xl:    10px    /* 터미널, diff 뷰 */
--radius-2xl:   12px    /* 입력 필드 */
--radius-3xl:   14px    /* 카드, 패널 */
--radius-4xl:   16px    /* 큰 카드, 모달 */
--radius-full:  9999px  /* 원형, 인디케이터 */
```

### Usage Guidelines
| 컴포넌트 | Radius |
|---------|--------|
| Window Controls | full |
| Activity Bar Icon | lg |
| Tab | sm (bottom only) |
| Card | 3xl |
| Modal | 4xl |
| Button | md - lg |
| Input | 2xl |
| Tag/Badge | sm |
| Tooltip | md |
| Context Menu | xl |

---

## Shadows & Glow

### Shadows
```css
--shadow-sm:     0 4px 16px rgba(0, 0, 0, 0.2)
--shadow-md:     0 8px 32px rgba(0, 0, 0, 0.3)
--shadow-lg:     0 16px 48px rgba(0, 0, 0, 0.4)
--shadow-xl:     0 24px 80px rgba(0, 0, 0, 0.5)
--shadow-inset:  inset 0 1px 2px rgba(0, 0, 0, 0.2)
```

### Glow Effects
```css
/* Warm Glow - 활성 요소 */
--glow-sm:     0 0 8px rgba(255, 200, 150, 0.6)
--glow-md:     0 0 12px rgba(255, 200, 150, 0.5)
--glow-lg:     0 0 24px rgba(255, 180, 120, 0.3)
--glow-xl:     0 0 40px rgba(255, 180, 120, 0.15)

/* Status Glow */
--glow-success:  0 0 8px rgba(74, 222, 128, 0.5)
--glow-warning:  0 0 8px rgba(251, 191, 36, 0.5)
--glow-error:    0 0 8px rgba(248, 113, 113, 0.5)
```

### Ambient Background
```css
.ambient-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(255, 180, 120, 0.08) 0%,
    transparent 60%
  );
  filter: blur(60px);
  pointer-events: none;
}
```

---

## Animation

### Duration
```css
--duration-instant:  0ms
--duration-fast:     100ms
--duration-normal:   200ms
--duration-slow:     300ms
--duration-slower:   500ms
--duration-slowest:  1000ms
```

### Easing
```css
--ease-default:     cubic-bezier(0.4, 0, 0.2, 1)
--ease-in:          cubic-bezier(0.4, 0, 1, 1)
--ease-out:         cubic-bezier(0, 0, 0.2, 1)
--ease-in-out:      cubic-bezier(0.4, 0, 0.2, 1)
--ease-bounce:      cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Keyframes
```css
/* 커서 깜빡임 */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* 상태 펄스 */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* 로딩 스피너 */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 스트리밍 타이핑 */
@keyframes typing {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* 글로우 펄스 */
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 180, 120, 0.2); }
  50% { box-shadow: 0 0 30px rgba(255, 180, 120, 0.4); }
}
```

---

## State Guidelines

### Interactive States

| State | Background | Border | Text | Glow |
|-------|------------|--------|------|------|
| **Default** | transparent | subtle | tertiary | none |
| **Hover** | white 0.02 | light | secondary | none |
| **Active** | warm gradient | warm active | primary | lg |
| **Focus** | warm 0.08 | active | primary | md |
| **Disabled** | transparent | subtle | faint | none |

### Active Element Pattern
```css
.active {
  background: linear-gradient(
    145deg,
    rgba(255, 200, 150, 0.12) 0%,
    rgba(255, 180, 120, 0.06) 100%
  );
  border: 1px solid rgba(255, 200, 150, 0.3);
  box-shadow: 0 0 40px rgba(255, 180, 120, 0.1);
}
```

### Indicator States
```css
/* Inactive */
.indicator-inactive {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

/* Active */
.indicator-active {
  background: #ffcc99;
  box-shadow: 0 0 8px rgba(255, 200, 150, 0.6);
}

/* Success */
.indicator-success {
  background: #4ade80;
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.5);
}

/* Working (animated) */
.indicator-working {
  background: #ffcc99;
  box-shadow: 0 0 12px rgba(255, 200, 150, 0.6);
  animation: pulse 1.5s infinite;
}
```

---

## App Shell Components

### 1. Title Bar
```
┌─────────────────────────────────────────────────────────┐
│ ● ● ●     filename.ts — project-name                    │
└─────────────────────────────────────────────────────────┘
Height: 38px
Background: --bg-elevated
Border: bottom 1px --border-default
Draggable: yes (-webkit-app-region: drag)
```

### 2. Activity Bar
```
┌────┐
│ 📁 │  <- Active (warm bg + border)
│ 🔍 │
│ 🔀 │  <- Badge (notification dot)
│ ✦  │
│    │
│ ⚙️ │  <- Settings at bottom
└────┘
Width: 48px
Icon Size: 36x36px
Icon Radius: 8px
```

### 3. Sidebar
```
┌────────────────────────┐
│ EXPLORER               │  <- Section Label
├────────────────────────┤
│ ▶ 📁 src               │  <- Folder (expandable)
│   ▶ 📁 components      │
│     📄 AuthService.ts ●│  <- File + dirty indicator
│     📄 types.ts        │
│ 📄 package.json        │
└────────────────────────┘
Width: 260px (resizable 200-400px)
Item Height: 28px
Indent: 16px per level
Active: left border 2px warm
```

### 4. Tab Bar
```
┌──────────────┬──────────┬─────────────────────────────┐
│ 📄 file.ts ● │ 📄 other │                             │
└──────────────┴──────────┴─────────────────────────────┘
Height: 36px
Active: bottom border 2px warm, elevated bg
Dirty: orange dot (6px)
Close: × appears on hover/active
```

### 5. Breadcrumb
```
┌─────────────────────────────────────────────────────────┐
│ src › components › AuthService.ts                       │
└─────────────────────────────────────────────────────────┘
Height: 32px
Separator: › (10px, muted)
Clickable: each segment
```

### 6. Status Bar
```
┌─────────────────────────────────────────────────────────┐
│ 🔀 main  ↑2 ↓0     │     Ln 24, Col 8  UTF-8  TS  ● AI │
└─────────────────────────────────────────────────────────┘
Height: 24px
Background: warm tint (rgba(255,200,150,0.08))
Border: top 1px warm subtle
```

---

## Editor Components

### 7. Code Editor
```
┌────┬────────────────────────────────────────────────────┐
│  1 │ import { OAuth } from 'lib';                       │
│  2 │                                                    │
│  3 │ export async function handle() {                   │
│▌ 4 │   const result = await |                          │ <- Active line
│  5 │ }                                                  │
└────┴────────────────────────────────────────────────────┘
Line Number Width: 48px
Line Height: 22px
Active Line: warm bg 0.08 + left border 2px
Font: monospace 13px
```

### 8. Inline Suggestion (Ghost Text)
```
const result = await client.getToken(code);
                     ↑ ghost text (warm 0.4, italic)  [Tab to accept]
```

### 9. Diff View
```
┌────────────────────────────────────────────────────────┐
│ 📄 AuthService.ts                           +12 −4     │
├────┬───┬───────────────────────────────────────────────┤
│  8 │   │ export async function handleCallback(code) { │
│  9 │ − │   const { tokens } = await client.getToken(); │ <- Red bg
│  9 │ + │   try {                                       │ <- Green bg
│ 10 │ + │     const { tokens } = await client.getToken();│
└────┴───┴───────────────────────────────────────────────┘
Add: green bg 0.1 + left border 3px green
Remove: red bg 0.1 + left border 3px red
```

### 10. Terminal
```
┌─────────────────────────────────────────────────────────┐
│ TERMINAL                              [zsh]          × │
├─────────────────────────────────────────────────────────┤
│ ➜ ~/project npm run dev                                 │
│ Starting development server...                          │
│ ✓ Ready in 1.2s                                         │
│ ➜ ~/project █                                           │
└─────────────────────────────────────────────────────────┘
Background: --bg-deep
Prompt: green arrow + blue path
Cursor: block, blinking
```

---

## AI Components

### 11. AI Chat Panel
```
┌─────────────────────────────────────────────────────────┐
│ ● AI Assistant                    claude-3.5-sonnet    │
├─────────────────────────────────────────────────────────┤
│ 👤 handleCallback 함수를 리팩토링해줘                    │
│                                                         │
│ ✦ 네, try-catch 블록을 추가하고 에러 처리를            │ <- Warm bg
│   개선하겠습니다...█                                    │ <- Streaming cursor
├─────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ ↑  │
│ │ Ask anything...                                 │    │
│ └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
Width: 380px
Message Avatar: 28x28px
Assistant BG: warm 0.04
Streaming: blinking cursor
```

### 12. Agent Status
```
┌─────────────────────────────────────────────────────────┐
│ ◐ Working                                          ↻   │
│   Refactoring handleCallback...                         │
└─────────────────────────────────────────────────────────┘
States: idle (gray) → thinking (yellow) → working (orange) → complete (green)
Spinner: 16px, 2px border, rotating
```

### 13. Command Palette (⌘K)
```
┌─────────────────────────────────────────────────────────┐
│ 🔍 Type a command or search...                    [ESC]│
├─────────────────────────────────────────────────────────┤
│ ▌ 📄 New File                                      ⌘N  │ <- Selected
│   🔍 Find in Files                                ⇧⌘F  │
│   ✦ Ask AI                                         ⌘K  │
│   🚀 Run Project                                   ⌘R  │
└─────────────────────────────────────────────────────────┘
Width: 560px
Backdrop: black 0.6
Shadow: xl
Selected: warm bg 0.08
```

---

## Feedback Components

### 14. Toast / Notification
```
┌─────────────────────────────────────────────────────────┐
│ ✓ Changes saved successfully                            │  <- Success (green)
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ ✕ Failed to connect                              Retry  │  <- Error (red)
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ ✦ AI is analyzing your code...                          │  <- Info (warm)
└─────────────────────────────────────────────────────────┘
Min Width: 300px
Radius: 10px
Position: bottom-right, stacked
```

### 15. Progress Bar
```
┌─────────────────────────────────────────────────────────┐
│ Generating code...                                 67%  │
│ ████████████████████░░░░░░░░░░                          │
└─────────────────────────────────────────────────────────┘
Height: 4px
Fill: warm gradient with glow
Track: white 0.1
```

### 16. Context Menu
```
┌─────────────────────────┐
│ ✂️ Cut              ⌘X  │
│ 📋 Copy             ⌘C  │
│ 📄 Paste            ⌘V  │
├─────────────────────────┤
│ ✦ Ask AI            ⌘K  │
│ 🔄 Refactor       ⌘⇧R  │
└─────────────────────────┘
Min Width: 200px
Radius: 10px
Divider: 1px border-default
Shadow: md
```

### 17. Tooltip
```
      ┌────────────────┐
      │ Open Settings  │
      └───────▼────────┘
            ↓
          [⚙️]
Padding: 6px 12px
Radius: 6px
Arrow: 6px triangle
Delay: 500ms
```

---

## Do's and Don'ts

### Do ✓
- 따뜻한 오렌지/크림 톤만 액센트로 사용
- 활성 요소에만 글로우 적용
- 상태 변화에 부드러운 전환 사용 (200-300ms)
- 계층을 투명도로 표현
- 네이티브 앱처럼 무게감 있게
- 키보드 단축키 항상 표시
- 모든 인터랙션에 피드백 제공

### Don't ✗
- 차가운 파란색 사용 금지 (상태 표시 제외)
- 순수 흰색(#fff) 직접 사용 금지
- 모든 요소에 글로우 적용 금지
- 갑작스러운 나타남/사라짐 금지
- 과도한 애니메이션 금지
- 너무 많은 정보를 한 번에 표시 금지

---

## CSS Variables

```css
:root {
  /* Background */
  --limn-bg-deep: #08080d;
  --limn-bg-base: #0a0a10;
  --limn-bg-surface: rgba(18, 18, 28, 0.9);
  --limn-bg-elevated: rgba(12, 12, 18, 0.98);

  /* Warm Accent */
  --limn-warm-300: #ffcc99;
  --limn-warm-400: rgba(255, 200, 150, 0.9);
  --limn-warm-glow: rgba(255, 180, 120, 0.15);

  /* Text */
  --limn-text-primary: rgba(255, 240, 220, 0.95);
  --limn-text-secondary: rgba(255, 250, 245, 0.7);
  --limn-text-muted: rgba(255, 250, 245, 0.35);

  /* Border */
  --limn-border-default: rgba(255, 255, 255, 0.06);
  --limn-border-active: rgba(255, 200, 150, 0.3);

  /* Status */
  --limn-success: #4ade80;
  --limn-warning: #fbbf24;
  --limn-error: #f87171;

  /* Layout */
  --limn-titlebar: 38px;
  --limn-statusbar: 24px;
  --limn-activity-bar: 48px;
  --limn-sidebar: 260px;

  /* Radius */
  --limn-radius-sm: 4px;
  --limn-radius-md: 8px;
  --limn-radius-lg: 14px;
  --limn-radius-xl: 16px;

  /* Animation */
  --limn-duration: 200ms;
  --limn-ease: cubic-bezier(0.4, 0, 0.2, 1);

  /* Glow */
  --limn-glow-sm: 0 0 8px rgba(255, 200, 150, 0.6);
  --limn-glow-lg: 0 0 24px rgba(255, 180, 120, 0.3);
}
```

---

*LIMN Design System v2.0*
*"빛은 숨겨진 것을 드러낸다"*

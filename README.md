# LIMN Design System

> "흐릿한 의도가 선명한 형태가 되는 곳"
> Where blurry intentions become clear forms.

AI-powered IDE 인터페이스를 위한 디자인 시스템입니다. shadcn/ui를 기반으로 따뜻한 다크 테마와 글로우 효과를 특징으로 합니다.

![LIMN Design System](https://img.shields.io/badge/version-2.0.0-orange)
![Built with](https://img.shields.io/badge/built%20with-React%20%2B%20TypeScript-blue)
![Styling](https://img.shields.io/badge/styling-TailwindCSS-38bdf8)

## ✨ 특징

- 🎨 **따뜻한 다크 테마** - 차가운 파란색 대신 오렌지/크림 톤 사용
- ✨ **글로우 효과** - 활성 상태를 빛으로 표현
- 🧩 **shadcn/ui 기반** - 컴포넌트 커스터마이징 용이
- 🎯 **IDE 전용 컴포넌트** - TitleBar, ActivityBar, StatusBar 등
- 📱 **완전한 타입 안정성** - TypeScript 완벽 지원
- 🚀 **빠른 개발** - Vite 기반 HMR

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:5173 에서 디자인 시스템을 확인할 수 있습니다.

### 페이지 라우트

#### 메인 페이지
- **/** - 홈: 디자인 시스템 개요 및 컴포넌트 쇼케이스
- **/ide** - Full IDE Layout: 완전한 IDE 인터페이스
- **/editor** - Code Editor: 코드 에디터 뷰
- **/chat** - AI Chat Panel: AI 채팅 인터페이스
- **/components** - Component Library: 모든 컴포넌트 카탈로그

#### 원본 샘플 (docs/ 비교용)
- **/samples/style-guide** - Style Guide (Original): docs/limn-style-guide.jsx
- **/samples/ide-components** - IDE Components (Original): docs/limn-ide-components.jsx
- **/samples/ide-clean** - IDE Clean (Original): docs/limn-ide-clean.jsx

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 🎨 디자인 토큰

### 색상

```css
/* Background */
--bg-deep: #08080d
--bg-base: #0a0a10
--bg-surface: rgba(18, 18, 28, 0.9)

/* Warm Accent */
--warm-300: #ffcc99  /* Primary */

/* Text */
--text-primary: rgba(255, 240, 220, 0.95)
--text-secondary: rgba(255, 250, 245, 0.7)
--text-muted: rgba(255, 250, 245, 0.35)

/* Status */
--status-success: #4ade80
--status-warning: #fbbf24
--status-error: #f87171
```

### 타이포그래피

- **Font**: System fonts (Apple System, Segoe UI, etc.)
- **Scale**: 10px - 20px
- **Weight**: 400 (normal), 500 (medium)

### 간격

4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 48px

### Border Radius

2px (xs), 4px (sm), 6px (md), 8px (lg), 10px (xl), 12px (2xl), 14px (3xl), 16px (4xl)

## 🧩 컴포넌트

### UI 컴포넌트

#### Button

```tsx
import { Button } from '@/components/ui/button'

<Button variant="primary">Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
```

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

<Card active>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
</Card>
```

#### Input

```tsx
import { Input } from '@/components/ui/input'

<Input placeholder="Enter text..." />
```

#### Badge & Indicator

```tsx
import { Badge } from '@/components/ui/badge'
import { Indicator } from '@/components/ui/indicator'

<Badge variant="active">Active</Badge>
<Indicator variant="success" />
```

### IDE 컴포넌트

#### TitleBar

```tsx
import { TitleBar } from '@/components/ide/title-bar'

<TitleBar filename="index.ts" projectName="my-project" />
```

#### ActivityBar

```tsx
import { ActivityBar, ActivityBarItem } from '@/components/ide/activity-bar'
import { Files, Search, Sparkles } from 'lucide-react'

<ActivityBar>
  <ActivityBarItem icon={Files} label="Explorer" active />
  <ActivityBarItem icon={Search} label="Search" />
  <ActivityBarItem icon={Sparkles} label="AI" hasBadge />
</ActivityBar>
```

#### StatusBar

```tsx
import { StatusBar } from '@/components/ide/status-bar'

<StatusBar
  branch="main"
  ahead={2}
  line={24}
  column={8}
  aiActive
/>
```

#### TabBar

```tsx
import { TabBar, Tab } from '@/components/ide/tab-bar'
import { FileCode } from 'lucide-react'

<TabBar>
  <Tab icon={FileCode} label="index.ts" active dirty />
  <Tab icon={FileCode} label="types.ts" />
</TabBar>
```

#### Sidebar

```tsx
import { Sidebar, FileTreeItem } from '@/components/ide/sidebar'
import { Folder, FileCode } from 'lucide-react'

<Sidebar title="EXPLORER">
  <FileTreeItem icon={Folder} label="src" isFolder isOpen />
  <FileTreeItem icon={FileCode} label="index.ts" active indent={1} />
</Sidebar>
```

## 📁 프로젝트 구조

```
limn-design/
├── docs/                       # 디자인 시스템 문서
│   ├── LIMN-Design-System.md
│   ├── LIMN-Design-System-v2.md
│   ├── LIMN-Icon-System.md
│   └── *.jsx                   # 컴포넌트 쇼케이스
├── src/
│   ├── components/
│   │   ├── ui/                 # 기본 UI 컴포넌트
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   └── indicator.tsx
│   │   └── ide/                # IDE 전용 컴포넌트
│   │       ├── title-bar.tsx
│   │       ├── activity-bar.tsx
│   │       ├── status-bar.tsx
│   │       ├── tab-bar.tsx
│   │       └── sidebar.tsx
│   ├── lib/
│   │   └── utils.ts            # 유틸리티 함수
│   ├── styles/
│   │   └── globals.css         # 전역 스타일
│   ├── App.tsx                 # 데모 애플리케이션
│   └── main.tsx                # 엔트리 포인트
├── tailwind.config.js          # TailwindCSS 설정
├── vite.config.ts              # Vite 설정
└── package.json
```

## 🎯 디자인 원칙

### Core Principles

1. **Warmth over Cold** - 차가운 파란색 대신 따뜻한 오렌지/크림
2. **Glow means Active** - 활성 상태만 빛나고, 나머지는 쉼
3. **Depth through Transparency** - 불투명도로 계층 구조 표현
4. **Gentle Transitions** - 급격한 변화 없이 부드러운 전환 (200-300ms)
5. **Native App Feel** - 웹이 아닌 네이티브 앱의 무게감

### Do's ✓

- 따뜻한 오렌지/크림 톤만 액센트로 사용
- 활성 요소에만 글로우 적용
- 상태 변화에 부드러운 전환 사용
- 계층을 투명도로 표현
- 키보드 단축키 항상 표시

### Don'ts ✗

- 차가운 파란색 사용 금지 (상태 표시 제외)
- 순수 흰색(#fff) 직접 사용 금지
- 모든 요소에 글로우 적용 금지
- 갑작스러운 나타남/사라짐 금지
- 과도한 애니메이션 금지

## 🔧 기술 스택

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS 3
- **Icons**: Lucide React
- **Component Utilities**:
  - class-variance-authority (CVA)
  - clsx
  - tailwind-merge

## 📚 문서

자세한 디자인 명세는 `docs/` 폴더를 참고하세요:

- `LIMN-Design-System-v2.md` - 전체 디자인 시스템 명세
- `LIMN-Icon-System.md` - 아이콘 시스템 가이드
- `*.jsx` - 인터랙티브 컴포넌트 쇼케이스

## 📄 라이선스

ISC

## 🙏 크레딧

- Design inspired by modern code editors
- Built with [shadcn/ui](https://ui.shadcn.com) principles
- Icons by [Lucide](https://lucide.dev)

---

*LIMN Design System v2.0*
*"빛은 숨겨진 것을 드러낸다"*

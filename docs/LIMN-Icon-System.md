# LIMN Icon System

> Lucide 기반의 일관된 아이콘 시스템

---

## Icon Library

LIMN은 **Lucide React**를 사용합니다.
- 일관된 스트로크 굵기 (1.5px)
- SVG 기반으로 선명함
- 트리쉐이킹 지원

```bash
npm install lucide-react
```

---

## Icon Sizes

| Size | px | 용도 |
|------|-----|------|
| **xs** | 10 | 인라인, 화살표 |
| **sm** | 12 | 상태바, 힌트 |
| **md** | 14 | 기본 UI |
| **lg** | 16 | 버튼, 패널 헤더 |
| **xl** | 18 | 검색창 |
| **2xl** | 20 | Activity Bar |

---

## Icon Mapping

### Navigation & Structure

| 용도 | 아이콘 | Import |
|------|--------|--------|
| 파일 탐색기 | Files | `Files` |
| 검색 | Search | `Search` |
| Git | GitBranch | `GitBranch` |
| AI/Agent | Sparkles | `Sparkles` |
| 터미널 | Terminal | `Terminal` |
| 설정 | Settings | `Settings` |

### File Types

| 용도 | 아이콘 | Import |
|------|--------|--------|
| 폴더 | Folder | `Folder` |
| 일반 파일 | FileText | `FileText` |
| 코드 파일 | FileCode | `FileCode` |
| 이미지 | Image | `Image` |
| 설정 파일 | FileJson | `FileJson` |

### Actions

| 용도 | 아이콘 | Import |
|------|--------|--------|
| 새로 만들기 | Plus | `Plus` |
| 삭제 | Trash2 | `Trash2` |
| 편집 | Edit3 | `Edit3` |
| 복사 | Clipboard | `Clipboard` |
| 붙여넣기 | ClipboardPaste | `ClipboardPaste` |
| 잘라내기 | Scissors | `Scissors` |
| 새로고침 | RefreshCw | `RefreshCw` |
| 되돌리기 | Undo2 | `Undo2` |
| 다시실행 | Redo2 | `Redo2` |

### Navigation

| 용도 | 아이콘 | Import |
|------|--------|--------|
| 닫기 | X | `X` |
| 펼치기 | ChevronRight | `ChevronRight` |
| 접기 | ChevronDown | `ChevronDown` |
| 위로 | ArrowUp | `ArrowUp` |
| 아래로 | ArrowDown | `ArrowDown` |
| 왼쪽 | ArrowLeft | `ArrowLeft` |
| 오른쪽 | ArrowRight | `ArrowRight` |

### Status

| 용도 | 아이콘 | Import |
|------|--------|--------|
| 성공/체크 | Check | `Check` |
| 오류 | AlertCircle | `AlertCircle` |
| 경고 | AlertTriangle | `AlertTriangle` |
| 정보 | Info | `Info` |
| 로딩 | Loader2 | `Loader2` |

### Editor

| 용도 | 아이콘 | Import |
|------|--------|--------|
| 실행 | Play | `Play` |
| 중지 | Square | `Square` |
| 디버그 | Bug | `Bug` |
| 포맷 | AlignLeft | `AlignLeft` |
| 접기 | ChevronsUpDown | `ChevronsUpDown` |

### Panels

| 용도 | 아이콘 | Import |
|------|--------|--------|
| 왼쪽 패널 닫기 | PanelLeftClose | `PanelLeftClose` |
| 오른쪽 패널 닫기 | PanelRightClose | `PanelRightClose` |
| 하단 패널 닫기 | PanelBottomClose | `PanelBottomClose` |
| 최대화 | Maximize2 | `Maximize2` |
| 최소화 | Minimize2 | `Minimize2` |

### Semantic Zoom

| 용도 | 아이콘 | Import |
|------|--------|--------|
| Vibe (전체 조망) | Layers | `Layers` |
| Logic (흐름) | GitBranch | `GitBranch` |
| Syntax (코드) | Code | `Code` |

### AI Features

| 용도 | 아이콘 | Import |
|------|--------|--------|
| AI 요청 | Sparkles | `Sparkles` |
| 채팅 | MessageSquare | `MessageSquare` |
| 자동완성 | Wand2 | `Wand2` |
| 리팩토링 | RefreshCw | `RefreshCw` |
| 설명 | BookOpen | `BookOpen` |

### Git

| 용도 | 아이콘 | Import |
|------|--------|--------|
| 브랜치 | GitBranch | `GitBranch` |
| 커밋 | GitCommit | `GitCommit` |
| 머지 | GitMerge | `GitMerge` |
| PR | GitPullRequest | `GitPullRequest` |

---

## Styling Guidelines

### Color States

```jsx
// Inactive
<Icon style={{ color: 'rgba(255, 250, 245, 0.35)' }} />

// Default
<Icon style={{ color: 'rgba(255, 250, 245, 0.5)' }} />

// Hover
<Icon style={{ color: 'rgba(255, 250, 245, 0.7)' }} />

// Active
<Icon style={{ color: '#ffcc99' }} />

// Success
<Icon style={{ color: '#4ade80' }} />

// Error
<Icon style={{ color: '#f87171' }} />

// Warning
<Icon style={{ color: '#fbbf24' }} />
```

### Stroke Width

```jsx
// 기본
<Icon strokeWidth={1.5} />

// 강조 (Active)
<Icon strokeWidth={2} />

// 약하게
<Icon strokeWidth={1} />
```

### Standard Pattern

```jsx
import { FileCode } from 'lucide-react';

// Activity Bar Icon
<FileCode 
  size={20} 
  style={{ 
    color: isActive ? '#ffcc99' : 'rgba(255, 250, 245, 0.35)',
    strokeWidth: 1.5,
  }} 
/>

// File Tree Icon
<FileCode 
  size={14} 
  style={{ 
    color: 'rgba(255, 250, 245, 0.5)',
  }} 
/>

// Button Icon
<FileCode 
  size={16} 
  style={{ 
    color: 'rgba(255, 250, 245, 0.7)',
  }} 
/>
```

---

## Animation

### Loading Spinner

```jsx
import { Loader2 } from 'lucide-react';

<Loader2 
  size={16} 
  style={{ 
    color: '#ffcc99',
    animation: 'spin 1s linear infinite',
  }} 
/>

// CSS
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### Pulse (Working State)

```jsx
<div style={{
  width: 10,
  height: 10,
  borderRadius: '50%',
  background: '#ffcc99',
  animation: 'pulse 1.5s infinite',
}} />

// CSS
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

---

## Component Examples

### Activity Bar Item

```jsx
const ActivityBarItem = ({ icon: Icon, isActive, hasBadge }) => (
  <div style={{
    width: 36,
    height: 36,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: isActive ? 'rgba(255,200,150,0.12)' : 'transparent',
    border: isActive 
      ? '1px solid rgba(255,200,150,0.2)' 
      : '1px solid transparent',
    position: 'relative',
  }}>
    <Icon 
      size={20} 
      style={{ 
        color: isActive ? '#ffcc99' : 'rgba(255,250,245,0.35)',
        strokeWidth: 1.5,
      }} 
    />
    {hasBadge && (
      <div style={{
        position: 'absolute',
        top: 6,
        right: 6,
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: '#ffcc99',
        boxShadow: '0 0 6px rgba(255,200,150,0.6)',
      }} />
    )}
  </div>
);
```

### File Tree Item

```jsx
const FileTreeItem = ({ name, type, isActive, isOpen }) => {
  const ChevronIcon = isOpen ? ChevronDown : ChevronRight;
  const FileIcon = type === 'folder' ? Folder : FileCode;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '6px 12px',
      background: isActive ? 'rgba(255,200,150,0.08)' : 'transparent',
      borderLeft: isActive 
        ? '2px solid #ffcc99' 
        : '2px solid transparent',
    }}>
      {type === 'folder' && (
        <ChevronIcon size={12} style={{ color: 'rgba(255,250,245,0.35)' }} />
      )}
      <FileIcon 
        size={14} 
        style={{ 
          color: type === 'folder' 
            ? 'rgba(255,250,245,0.5)' 
            : 'rgba(255,250,245,0.35)',
        }} 
      />
      <span style={{ 
        color: isActive ? 'rgba(255,240,220,0.95)' : 'rgba(255,250,245,0.7)',
        fontSize: 13,
      }}>
        {name}
      </span>
    </div>
  );
};
```

### Toast with Icon

```jsx
const Toast = ({ type, message }) => {
  const config = {
    success: { icon: Check, color: '#4ade80' },
    error: { icon: AlertCircle, color: '#f87171' },
    info: { icon: Sparkles, color: '#ffcc99' },
  };
  const { icon: Icon, color } = config[type];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderRadius: 10,
      background: `${color}15`,
      border: `1px solid ${color}40`,
    }}>
      <Icon size={16} style={{ color }} />
      <span style={{ color: 'rgba(255,240,220,0.95)', fontSize: 14 }}>
        {message}
      </span>
    </div>
  );
};
```

---

## Complete Icon Import

```jsx
import {
  // Navigation
  Files,
  Search,
  GitBranch,
  Sparkles,
  Terminal,
  Settings,
  
  // Files
  Folder,
  FileText,
  FileCode,
  
  // Actions
  Plus,
  Trash2,
  Edit3,
  Clipboard,
  ClipboardPaste,
  Scissors,
  RefreshCw,
  
  // Navigation
  X,
  ChevronRight,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  
  // Status
  Check,
  AlertCircle,
  AlertTriangle,
  Info,
  Loader2,
  
  // Panels
  PanelLeftClose,
  PanelRightClose,
  Maximize2,
  
  // Semantic Zoom
  Layers,
  Code,
  
  // Git
  GitCommit,
  GitMerge,
  GitPullRequest,
  
  // AI
  MessageSquare,
  Wand2,
  BookOpen,
  
  // Editor
  Play,
  Square,
  Bug,
} from 'lucide-react';
```

---

## Don'ts

- ❌ 이모지 사용 금지
- ❌ 다른 아이콘 라이브러리 혼용 금지
- ❌ 커스텀 SVG 임의 추가 금지 (필요시 논의)
- ❌ 아이콘 색상에 순수 흰색(#fff) 사용 금지
- ❌ strokeWidth 2 초과 금지

---

*LIMN Icon System*
*Based on Lucide React*

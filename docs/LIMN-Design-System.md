# LIMN Design System

> "흐릿한 의도가 선명한 형태가 되는 곳"
> Where blurry intentions become clear forms.

---

## Philosophy

LIMN의 디자인은 **Blur → Clarity** 메타포를 시각적으로 구현한다.
- 어둠 속에서 따뜻한 빛이 서서히 형태를 드러내는 느낌
- 차가운 기술이 아닌, 손으로 만지고 싶은 따뜻함
- 활성 상태는 빛나고, 비활성 상태는 쉬고 있다

---

## Color Palette

### Base (배경)
```
--bg-deep:      #08080d      // 가장 깊은 배경
--bg-base:      #0a0a10      // 기본 배경
--bg-surface:   rgba(18, 18, 28, 0.9)   // 카드, 패널
--bg-elevated:  rgba(12, 12, 18, 0.98)  // 헤더, 푸터
```

### Warm Accent (따뜻한 강조)
```
--warm-100:     #fff8f0      // 가장 밝은 크림
--warm-200:     #ffeedd      // 밝은 크림
--warm-300:     #ffcc99      // 기본 액센트 (Primary)
--warm-400:     rgba(255, 200, 150, 0.9)  // 버튼, CTA
--warm-500:     rgba(255, 180, 120, 0.8)  // 호버 상태
```

### Text
```
--text-primary:    rgba(255, 240, 220, 0.95)  // 제목, 강조
--text-secondary:  rgba(255, 250, 245, 0.7)   // 본문
--text-tertiary:   rgba(255, 250, 245, 0.5)   // 설명
--text-muted:      rgba(255, 250, 245, 0.35)  // 비활성, 힌트
--text-faint:      rgba(255, 250, 245, 0.2)   // 라인 넘버
```

### Border
```
--border-subtle:   rgba(255, 255, 255, 0.06)  // 기본 구분선
--border-light:    rgba(255, 255, 255, 0.08)  // 카드 테두리
--border-warm:     rgba(255, 200, 150, 0.2)   // 따뜻한 강조
--border-active:   rgba(255, 200, 150, 0.3)   // 활성 상태
```

### Status
```
--status-success:  #4ade80    // 연결됨, 성공
--status-warning:  #fbbf24    // 주의
--status-error:    #f87171    // 오류
```

### Glow (발광)
```
--glow-warm:       0 0 40px rgba(255, 180, 120, 0.15)   // 부드러운 글로우
--glow-strong:     0 0 24px rgba(255, 180, 120, 0.3)    // 강한 글로우
--glow-indicator:  0 0 8px rgba(255, 200, 150, 0.6)     // 인디케이터
--glow-success:    0 0 8px rgba(74, 222, 128, 0.5)      // 상태 표시
```

---

## Typography

### Font Family
```
--font-system:  -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
--font-mono:    'SF Mono', 'Fira Code', 'Consolas', monospace
```

### Scale
```
--text-xs:    11px    // 힌트, 라벨
--text-sm:    12px    // 캡션, 메타
--text-base:  13px    // 본문
--text-md:    14px    // 강조 본문
--text-lg:    15px    // 소제목
--text-xl:    20px    // 제목
```

### Weight
```
--weight-normal:   400
--weight-medium:   500
```

### Letter Spacing
```
--tracking-tight:   -0.01em   // 제목
--tracking-normal:  0         // 본문
--tracking-wide:    0.1em     // 라벨 (uppercase)
```

---

## Spacing

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-8:   32px
--space-10:  40px
```

---

## Border Radius

```
--radius-sm:    4px     // 태그, 뱃지
--radius-md:    6px     // 버튼, 입력
--radius-lg:    8px     // 작은 카드
--radius-xl:    10px    // 아이콘 컨테이너
--radius-2xl:   14px    // 패널
--radius-3xl:   16px    // 큰 카드
--radius-full:  9999px  // 원형
```

---

## Shadows

```
--shadow-sm:      0 8px 32px rgba(0, 0, 0, 0.2)
--shadow-md:      0 8px 32px rgba(0, 0, 0, 0.3)
--shadow-lg:      0 20px 60px rgba(0, 0, 0, 0.4)
--shadow-warm:    0 0 40px rgba(255, 180, 120, 0.1)
```

---

## Component Patterns

### Card (기본 카드)
```css
.card {
  background: rgba(18, 18, 28, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 20px;
}
```

### Card Active (활성 카드)
```css
.card-active {
  background: linear-gradient(145deg, 
    rgba(255, 200, 150, 0.12) 0%, 
    rgba(255, 180, 120, 0.06) 100%
  );
  border: 1px solid rgba(255, 200, 150, 0.3);
  box-shadow: 0 0 40px rgba(255, 180, 120, 0.1);
}
```

### Button Primary
```css
.btn-primary {
  background: linear-gradient(135deg, 
    rgba(255, 200, 150, 0.9) 0%, 
    rgba(255, 180, 120, 0.9) 100%
  );
  color: #1a1a2e;
  border-radius: 10px;
  font-weight: 500;
}
```

### Button Ghost
```css
.btn-ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: rgba(255, 250, 245, 0.35);
  border-radius: 8px;
}

.btn-ghost:active {
  background: linear-gradient(135deg, 
    rgba(255, 200, 150, 0.2) 0%, 
    rgba(255, 180, 120, 0.1) 100%
  );
  border-color: rgba(255, 200, 150, 0.3);
  color: rgba(255, 220, 180, 0.95);
}
```

### Input Field
```css
.input {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: rgba(255, 250, 245, 0.8);
  padding: 12px 16px;
}
```

### Indicator Dot
```css
.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffcc99;
  box-shadow: 0 0 8px rgba(255, 200, 150, 0.6);
}

.indicator-success {
  background: #4ade80;
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.5);
}
```

### Tag / Badge
```css
.tag {
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 250, 245, 0.5);
  font-size: 11px;
}
```

### Section Label
```css
.label {
  color: rgba(255, 250, 245, 0.3);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

---

## Animation

### Timing
```
--duration-fast:    150ms
--duration-normal:  300ms
--duration-slow:    500ms
--duration-slower:  1000ms

--ease-default:     ease
--ease-out:         ease-out
--ease-in-out:      ease-in-out
```

### Transitions
```css
/* 기본 상태 변화 */
transition: all 0.3s ease;

/* 빠른 호버 */
transition: all 0.15s ease;

/* 느린 페이드 */
transition: opacity 0.5s ease;
```

### Keyframes

```css
/* 숨쉬는 듯한 펄스 */
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
}

/* 부드러운 페이드인 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 글로우 펄스 */
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 180, 120, 0.2); }
  50% { box-shadow: 0 0 30px rgba(255, 180, 120, 0.4); }
}
```

---

## Ambient Effects

### Radial Glow (배경 글로우)
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

### Logo Glow
```css
.logo-core {
  background: radial-gradient(
    circle, 
    #fff 0%, 
    #ffeedd 50%, 
    #ffcc99 100%
  );
  box-shadow: 0 0 16px rgba(255, 200, 150, 0.6);
}

.logo-halo {
  background: radial-gradient(
    circle, 
    rgba(255, 180, 120, 0.25) 0%, 
    transparent 70%
  );
  filter: blur(6px);
}
```

---

## State Guidelines

### Inactive (비활성)
- 배경: 거의 투명 `rgba(255,255,255,0.02-0.03)`
- 테두리: 희미한 `rgba(255,255,255,0.06-0.08)`
- 텍스트: 낮은 대비 `rgba(255,250,245,0.35-0.5)`
- 글로우: 없음
- 인디케이터: 회색 `rgba(255,255,255,0.2-0.3)`

### Active (활성)
- 배경: 따뜻한 그라데이션
- 테두리: 오렌지 틴트 `rgba(255,200,150,0.3)`
- 텍스트: 높은 대비 `rgba(255,240,220,0.95)`
- 글로우: 따뜻한 발광 `rgba(255,180,120,0.1-0.15)`
- 인디케이터: 오렌지 with glow `#ffcc99`

### Hover
- 약간의 스케일 업 `scale(1.02)`
- 테두리 밝아짐
- 배경 살짝 밝아짐

### Focus
- 활성 상태와 유사
- 포커스 링 대신 글로우 사용

---

## Do's and Don'ts

### Do ✓
- 따뜻한 오렌지/크림 톤을 액센트로 사용
- 활성 요소에만 글로우 적용
- 어두운 배경에서 충분한 대비 유지
- 부드러운 전환 애니메이션 사용
- 계층 구조를 투명도로 표현

### Don't ✗
- 차가운 파란색 사용 금지
- 모든 요소에 글로우 남발 금지
- 날카로운 흰색(#fff) 직접 사용 금지
- 급격한 상태 변화 금지
- 과도한 그림자 금지

---

## Usage Example

```jsx
// Active Card
<div style={{
  background: 'linear-gradient(145deg, rgba(255,200,150,0.12) 0%, rgba(255,180,120,0.06) 100%)',
  border: '1px solid rgba(255,200,150,0.3)',
  borderRadius: 14,
  padding: 20,
  boxShadow: '0 0 40px rgba(255,180,120,0.1)',
}}>
  <div style={{
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#ffcc99',
    boxShadow: '0 0 8px rgba(255,200,150,0.6)',
  }} />
  <h3 style={{ color: 'rgba(255,240,220,0.95)', fontSize: 15 }}>
    Active Module
  </h3>
</div>
```

---

## Token Export (CSS Variables)

```css
:root {
  /* Background */
  --limn-bg-deep: #08080d;
  --limn-bg-base: #0a0a10;
  --limn-bg-surface: rgba(18, 18, 28, 0.9);
  --limn-bg-elevated: rgba(12, 12, 18, 0.98);
  
  /* Accent */
  --limn-warm-300: #ffcc99;
  --limn-warm-400: rgba(255, 200, 150, 0.9);
  
  /* Text */
  --limn-text-primary: rgba(255, 240, 220, 0.95);
  --limn-text-secondary: rgba(255, 250, 245, 0.7);
  --limn-text-muted: rgba(255, 250, 245, 0.35);
  
  /* Border */
  --limn-border-subtle: rgba(255, 255, 255, 0.06);
  --limn-border-active: rgba(255, 200, 150, 0.3);
  
  /* Radius */
  --limn-radius-md: 8px;
  --limn-radius-lg: 14px;
  --limn-radius-xl: 16px;
  
  /* Animation */
  --limn-duration: 300ms;
  --limn-ease: ease;
}
```

---

*LIMN Design System v1.0*
*"빛은 숨겨진 것을 드러낸다"*

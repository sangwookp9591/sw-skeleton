# sw-skeleton

좋아요! 그러면 지금까지 만든 **`shared-button` 라이브러리 + Storybook + example 테스트 + GitHub 설치** 전체 과정을 README.md 형식으로 정리해드릴게요.
Notion에 바로 복붙해도 보기 좋게 구성했습니다.

---

```markdown
# Shared Button Library

TypeScript 기반 React 공통 버튼 컴포넌트 라이브러리입니다.  
Storybook을 통해 UI를 확인할 수 있으며, GitHub에서 바로 설치하여 다른 프로젝트에서 사용 가능합니다.

---

## 📂 프로젝트 구조
```

shared-button/
├── src/
│ ├── Button.tsx
│ └── index.ts
├── .storybook/
│ ├── main.ts
│ └── preview\.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
example/
├── src/
├── package.json
└── vite.config.ts

````

---

## 1️⃣ Button 컴포넌트

`src/Button.tsx`

```tsx
import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, label, onClick, disabled = false, variant = 'primary' }) => {
    const style = {
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
    };

    return (
        <button style={style} onClick={onClick} disabled={disabled}>
            {label}
            {children}
        </button>
    );
};
````

---

## 2️⃣ Storybook 스토리

`src/Button.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
        variant: { control: { type: 'radio' }, options: ['primary', 'secondary'] },
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        children: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = { args: { label: '기본 버튼' } };
export const Primary: Story = { args: { label: 'Primary 버튼', variant: 'primary' } };
export const Secondary: Story = { args: { label: 'Secondary 버튼', variant: 'secondary' } };
export const Disabled: Story = { args: { label: 'Disabled 버튼', disabled: true } };
export const WithChildren: Story = { args: { label: '버튼 + ', children: <span>🎉</span> } };
```

---

## 3️⃣ 설치

### 3-1. GitHub에서 직접 설치

```bash
npm install git+https://github.com/사용자명/shared-button.git
```

### 3-2. 특정 브랜치 또는 버전

```bash
npm install git+https://github.com/사용자명/shared-button.git#main
npm install git+https://github.com/사용자명/shared-button.git#v1.0.0
```

---

## 4️⃣ 사용 예시

```tsx
import React from 'react';
import { Button } from 'shared-button';

export default function App() {
    return (
        <div>
            <Button label="공유 버튼" onClick={() => alert('눌림!')} />
            <Button variant="secondary">자식 요소</Button>
        </div>
    );
}
```

---

## 5️⃣ 빌드

라이브러리 빌드:

```bash
npm run build
```

-   `dist/index.cjs` → CommonJS
-   `dist/index.esm.js` → ESM
-   `dist/index.d.ts` → 타입 정의

빌드에는 [tsup](https://tsup.egoist.dev/) 사용

---

## 6️⃣ Storybook 실행

```bash
npm run storybook
```

-   `.storybook/` 폴더 + `src/**/*.stories.tsx` 파일을 기반으로 UI 확인
-   `storybook-static/` 빌드 폴더는 git에 포함하지 않음

---

## 7️⃣ Git 관리 팁

`.gitignore` 예시:

```
node_modules
dist
storybook-static
*.log
.DS_Store
```

-   `.storybook/`와 `stories`는 push
-   `dist/`, `node_modules/`, `storybook-static/`는 push X

---

## 8️⃣ License

-   MIT License (자유롭게 사용/수정/배포 가능, 저작권 표기 필요)
-   LICENSE 파일 포함

```

---

원하면 제가 이 README.md 기반으로 **Notion에 바로 붙일 수 있도록 서식 + 코드 블록 강조**까지 적용한 버전으로 만들어서 드릴 수도 있어요.
그럼 시각적으로 더 보기 좋습니다.
```

# sw-skeleton

React용 공통 컴포넌트 라이브러리입니다. TypeScript로 작성되어 타입 안전성을 보장하며, Storybook을 통해 컴포넌트를 시각적으로 확인할 수 있습니다.

## 📦 설치

```bash
npm install sw-skeleton
```

## 🚀 빠른 시작

```tsx
import { Button } from 'sw-skeleton';

function App() {
    return <Button onClick={() => alert('클릭됨!')}>클릭하세요</Button>;
}
```

## 🧩 컴포넌트

### Button

기본 버튼 컴포넌트입니다.

```tsx
import { Button } from 'sw-skeleton';

// 기본 사용법
<Button onClick={() => console.log('클릭!')}>
    클릭하세요
</Button>

// 다양한 옵션
<Button
    variant="secondary"
    disabled={false}
    label="버튼 텍스트"
    onClick={() => alert('클릭됨!')}
>
    추가 콘텐츠
</Button>
```

#### Props

| Prop       | 타입                       | 기본값      | 설명               |
| ---------- | -------------------------- | ----------- | ------------------ |
| `children` | `React.ReactNode`          | -           | 버튼 내부 콘텐츠   |
| `label`    | `string`                   | -           | 버튼 텍스트        |
| `onClick`  | `() => void`               | -           | 클릭 이벤트 핸들러 |
| `disabled` | `boolean`                  | `false`     | 비활성화 여부      |
| `variant`  | `'primary' \| 'secondary'` | `'primary'` | 버튼 스타일        |

## 🛠️ 개발

### 요구사항

-   Node.js 18+
-   npm 9+

### 설치

```bash
git clone <repository-url>
cd sw-skeleton
npm install
```

### 스크립트

```bash
# 라이브러리 빌드
npm run build

# Storybook 실행
npm run storybook

# Storybook 빌드
npm run build-storybook
```

## 📁 프로젝트 구조

```
sw-skeleton/
├── src/
│   ├── Button.tsx          # Button 컴포넌트
│   └── index.ts            # 라이브러리 진입점
├── dist/                   # 빌드된 파일들
│   ├── index.js           # CommonJS 형식
│   ├── index.mjs          # ESM 형식
│   └── index.d.ts         # TypeScript 타입 정의
├── stories/                # Storybook 스토리들
├── example/                # 사용 예제 프로젝트
├── package.json
└── README.md
```

## 🎨 Storybook

컴포넌트를 시각적으로 확인하고 테스트할 수 있습니다.

```bash
npm run storybook
```

브라우저에서 [http://localhost:6006](http://localhost:6006)을 열어 확인하세요.

## 📦 빌드

라이브러리는 다음 형식으로 빌드됩니다:

-   **CommonJS**: `dist/index.js`
-   **ESM**: `dist/index.mjs`
-   **TypeScript 타입**: `dist/index.d.ts`

빌드에는 [tsup](https://tsup.egoist.dev/)을 사용하여 최적화된 번들을 생성합니다.

## 🔧 기술 스택

-   **React**: 18+ / 19+
-   **TypeScript**: 5.9+
-   **Storybook**: 9.1+
-   **tsup**: 8.5+

## 📝 라이센스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 지원

버그 리포트나 기능 제안은 [GitHub Issues](https://github.com/your-username/sw-skeleton/issues)를 이용해주세요.

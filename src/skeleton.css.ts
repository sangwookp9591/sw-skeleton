import { style, keyframes, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// CSS 변수 생성
// export const shimmerStartVar = createVar();
// export const speedVar = createVar();
export const shimmerColorVar = createVar();
export const shimmerGradientVar = createVar();

export const skeletonBase = style({
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'rgb(230, 230, 230)',
});
// shimmer 애니메이션  keyframes 정의
/**
 * const shimmerKeyframes = keyframes({
    '0%': { transform: 'translateX(-100%)' }, // 완전히 왼쪽 밖으로
    '100%': { transform: 'translateX(100%)' },  // 완전히 오른쪽 밖으로
});
시각적으로:
[-100%]    [skeleton 영역]    [100%]
  ↑                              ↑
시작위치                        끝위치
(보이지않음)                  (보이지않음)

shimmer가 -100% → 100%로 이동하면서
skeleton 영역을 지나가는 효과!
 */
const shimmerLeftToRight = keyframes({
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
});

const shimmerRightToLeft = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-100%)' },
});

const shimmerTopToBottom = keyframes({
    '0%': { transform: 'translateY(-100%)' },
    '100%': { transform: 'translateY(100%)' },
});

const shimmerBottomToTop = keyframes({
    '0%': { transform: 'translateY(100%)' },
    '100%': { transform: 'translateY(-100%)' },
});

export const shimmerAnimation = recipe({
    base: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', //부모와 크기 동일하게
        height: '100%', //부모와 크기 동일하게
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
    },
    variants: {
        direction: {
            'left-to-right': {
                animation: `1.5s infinite ${shimmerLeftToRight}`,
            },
            'right-to-left': {
                animation: `1.5s infinite ${shimmerRightToLeft}`,
            },
            'top-to-bottom': {
                animation: `1.5s infinite ${shimmerTopToBottom}`,
            },
            'bottom-to-top': {
                animation: `1.5s infinite ${shimmerBottomToTop}`,
            },
        },
    },
    defaultVariants: {
        direction: 'left-to-right',
    },
});

import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import type { } from '@emotion/styled'

import lottie from 'lottie-web';

interface AnimationProps {
    animationName: string;
    width?: number;
    height?: number;
}

const Animation: React.FC<AnimationProps> = ({ animationName, width = 100, height = 100 }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: ref.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            // path to your animation file, place it inside public folder
            path: `/animation/${animationName}.json`,
        });

    }, [animationName]);

    return (
        <>
            <AnimationContainer
                ref={ref}
                width={width}
                height={height}
            />
        </>

    )
}



interface AnimationContainerProp {
    width?: number;
    height?: number;
}

const AnimationContainer = styled.div<AnimationContainerProp>(
    {
        margin: '0 auto'
    },
    props => ({
        width: props.width + 'px',
        height: props.height + 'px'
    })
)

export default Animation;
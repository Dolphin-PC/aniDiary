import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import type { } from '@emotion/styled'

import lottie from 'lottie-web';

interface AnimationProps {
    animationName: string;
    width?: string;
    height?: string;
    margin?: string;
}

export default function Animation({ animationName, width, height, margin }: AnimationProps): JSX.Element {
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
                margin={margin}
            />
        </>

    )

};

interface AnimationContainerProp {
    width?: string;
    height?: string;
    margin?: string;
}

const AnimationContainer = styled.div<AnimationContainerProp>(
    {
        maxWidth: '200px'
    },
    props => ({
        width: props.width,
        height: props.height,
        margin: props.margin
    })
)

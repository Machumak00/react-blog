import { memo } from 'react'

import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = memo((props: HStackProps) => {
    return (
        <Flex direction="row" {...props}/>
    )
})

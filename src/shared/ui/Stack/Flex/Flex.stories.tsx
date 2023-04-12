import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Flex } from './Flex'
import 'app/styles/index.scss'

export default {
    title: 'shared/Flex',
    component: Flex
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({})
Row.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const RowJustifyCenter = Template.bind({})
RowJustifyCenter.args = {
    justify: 'center',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const RowJustifyEnd = Template.bind({})
RowJustifyEnd.args = {
    justify: 'end',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const RowJustifyBetween = Template.bind({})
RowJustifyBetween.args = {
    justify: 'between',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const RowGap4 = Template.bind({})
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const RowGap8 = Template.bind({})
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const RowGap16 = Template.bind({})
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const RowGap32 = Template.bind({})
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const Column = Template.bind({})
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const ColumnAlignStart = Template.bind({})
ColumnAlignStart.args = {
    direction: 'column',
    align: 'start',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const ColumnAlignEnd = Template.bind({})
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const ColumnGap4 = Template.bind({})
ColumnGap4.args = {
    gap: '4',
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const ColumnGap8 = Template.bind({})
ColumnGap8.args = {
    gap: '8',
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const ColumnGap16 = Template.bind({})
ColumnGap16.args = {
    gap: '16',
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

export const ColumnGap32 = Template.bind({})
ColumnGap32.args = {
    gap: '32',
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    )
}

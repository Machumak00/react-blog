import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Dropdown } from './Dropdown'

import { Button } from '../../../Button/Button'

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    decorators: [
        Story => <div style={{ padding: 150 }}><Story/></div>
    ]
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Open</Button>,
    items: [
        { content: 'text1' },
        { content: 'text2' },
        { content: 'text3' }
    ]
}

export const topLeft = Template.bind({})
topLeft.args = {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Open</Button>,
    items: [
        { content: 'text1' },
        { content: 'text2' },
        { content: 'text3' }
    ],
    direction: 'top left'
}

export const topRight = Template.bind({})
topRight.args = {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Open</Button>,
    items: [
        { content: 'text1' },
        { content: 'text2' },
        { content: 'text3' }
    ],
    direction: 'top right'
}

export const bottomLeft = Template.bind({})
bottomLeft.args = {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Open</Button>,
    items: [
        { content: 'text1' },
        { content: 'text2' },
        { content: 'text3' }
    ],
    direction: 'bottom left'
}

export const bottomRight = Template.bind({})
bottomRight.args = {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Open</Button>,
    items: [
        { content: 'text1' },
        { content: 'text2' },
        { content: 'text3' }
    ],
    direction: 'bottom right'
}

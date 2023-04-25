import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam asperiores eius expedita, facilis fuga ipsa labore molestias recusandae repellendus.'
}

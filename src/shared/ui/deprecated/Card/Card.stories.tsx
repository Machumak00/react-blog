import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Text } from '../Text/Text';

import { Card } from './Card';

export default {
    title: 'shared/deprecated/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text title={'Title'} text={'Text'} />,
};

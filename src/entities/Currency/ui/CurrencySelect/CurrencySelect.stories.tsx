import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import React from 'react';

import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/Currency/CurrencySelect',
    component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

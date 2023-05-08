import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url:
                    __API__ +
                    '/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=',
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {};

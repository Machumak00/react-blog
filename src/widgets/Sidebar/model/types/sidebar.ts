import { type FC, type SVGAttributes } from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: FC<SVGAttributes<SVGElement>>;
    authOnly?: boolean;
}

import { type StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useLoginError, getLoginError] = buildSelector(
    (state: StateSchema) => state?.loginForm?.error,
);
export const [useLoginIsLoading, getLoginIsLoading] = buildSelector(
    (state: StateSchema) => state?.loginForm?.isLoading || false,
);
export const [useLoginPassword, getLoginPassword] = buildSelector(
    (state: StateSchema) => state?.loginForm?.password || '',
);
export const [useLoginUsername, getLoginUsername] = buildSelector(
    (state: StateSchema) => state?.loginForm?.username || '',
);

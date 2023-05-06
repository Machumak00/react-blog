import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Profile } from '@/entities/Profile';
import { useErrorMessage } from '@/shared/lib/hooks/useErrorMessage/useErrorMessage';

interface Translations {
    profileNotFound: string;
    responseDataNotFound: string;
}

interface FetchProfileDataProps {
    profileId?: string;
    translations: Translations;
}

export const fetchProfileData = createAsyncThunk<
    Profile,
    FetchProfileDataProps,
    ThunkConfig<string>
>('profile/fetchProfileData', async (props, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    const { profileId, translations } = props;

    try {
        if (!profileId) {
            throw new Error(translations.profileNotFound);
        }

        const response = await extra.api.get<Profile>(`/profile/${profileId}`);

        if (!response.data) {
            throw new Error(translations.responseDataNotFound);
        }

        return response.data;
    } catch (e) {
        const message = useErrorMessage(e);

        return rejectWithValue(message);
    }
});

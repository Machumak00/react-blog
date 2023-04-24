import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { RatingCard } from '@/entities/Rating'
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { getProfileData } from '@/features/editableProfileCard'

export interface ArticleRatingProps {
    className?: string
    profileId: string
}

const ProfileRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        profileId
    } = props
    const { t } = useTranslation()
    const userData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)

    const {
        data,
        isLoading
    } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? ''
    })

    const [rateProfileMutation] = useRateProfile()

    const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateProfileMutation({
                userId: userData?.id ?? '',
                profileId,
                rate: starsCount,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [profileId, rateProfileMutation, userData?.id])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback)
    }, [handleRateProfile])

    const onCancel = useCallback((starsCount: number) => {
        handleRateProfile(starsCount)
    }, [handleRateProfile])

    if (!profileData || isLoading || userData?.id === profileId) {
        return null
    }

    const rating = data?.[0]

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте свой отзыв о профиле пользователя')}
            hasFeedback
        />
    )
})

export default ProfileRating

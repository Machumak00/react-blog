import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from 'widgets/Page'
import { VStack } from 'shared/ui/Stack'
import { EditableProfileCard } from 'features/editableProfileCard'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation('profile')

    if (!id) {
        return <Text title={t('Профиль не найден')}/>
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap="16">
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    )
})

export default ProfilePage

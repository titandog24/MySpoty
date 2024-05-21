import { Layout } from '@ui-kitten/components'
import React from 'react'
import { Image } from 'react-native'

interface Props {
    name?: string,
    image: string
}

export const AlbumImage = ({name, image}:Props) => {
  return (
    <Layout>
        <Image
            width={200}
            height={150}
            resizeMode='stretch'
            source={{
              uri: `${image}`
            }} />
    </Layout>
  )
}

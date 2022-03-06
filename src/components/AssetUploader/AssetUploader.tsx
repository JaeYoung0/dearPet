import React, { useState } from 'react'
import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse, Asset } from 'react-native-image-picker'
import { Image, Pressable, Platform } from 'react-native'
import MyIcons from '../MyIcons'
import { useRecoilState } from 'recoil'
import { assetStatus } from '@/modules/uploader/atom'

function AssetUploader() {
  //   console.log('@@---------------assets', assets)
  const [assets, setAssets] = useRecoilState(assetStatus)

  const standByAssets = () => {
    void launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
        selectionLimit: 0,
      },
      async (res) => {
        if (!res.assets) return
        setAssets(res.assets)
      }
    )
  }

  if (!assets)
    return (
      <Pressable onPress={standByAssets}>
        <MyIcons name='SquarePlus' />
      </Pressable>
    )

  return (
    <>
      {assets.map((asset) => (
        <Image source={{ uri: asset.uri, width: 150, height: 150 }} />
      ))}
    </>
  )
}

export default AssetUploader

import React, { useState } from 'react'
import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse, Asset } from 'react-native-image-picker'
import { Image, Pressable, Platform } from 'react-native'
import MyIcons from '../MyIcons'
import { useRecoilState } from 'recoil'
import { useUploaderState } from '@/modules/uploader/atom'
import FastImage from 'react-native-fast-image'

function AssetUploader() {
  const { uploaderState, setUploaderState } = useUploaderState()

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
        setUploaderState(res.assets)
      }
    )
  }

  if (!uploaderState)
    return (
      <Pressable style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={standByAssets}>
        <MyIcons name='SquarePlus' color='#999999' />
      </Pressable>
    )

  return (
    <>
      {uploaderState.map((asset) => (
        <Pressable key={asset.id} onPress={standByAssets} style={{ flex: 1 }}>
          <FastImage style={{ flex: 1 }} source={{ uri: asset.uri }} />
        </Pressable>
      ))}
    </>
  )
}

export default AssetUploader

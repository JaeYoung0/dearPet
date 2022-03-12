import React, { useState } from 'react'
import { getStorage } from '@/modules/storage/helper'

function useSawWelcome() {
  const [sawWelcome, setSawWelcome] = useState<boolean | null>(null)

  getStorage('@saw/welcome').then((data) => {
    if (data === true) {
      setSawWelcome(true)
    } else {
      setSawWelcome(false)
    }
  })
  return { sawWelcome }
}

export default useSawWelcome

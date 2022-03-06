import React from 'react'

export default function useRefreshByUser(refetch: () => Promise<unknown>) {
  const [isRefetchingByUser, setIsRefetchingByUser] = React.useState(false)

  async function refetchByUser() {
    setIsRefetchingByUser(true)

    try {
      await refetch()
    } finally {
      setIsRefetchingByUser(false)
    }
  }

  return {
    isRefetchingByUser,
    refetchByUser,
  }
}

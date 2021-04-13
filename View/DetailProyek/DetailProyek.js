import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'

function DetailProyek() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return isLoading ? (
    <Text style={{ marginVertical: 20 }}>Loading....</Text>
  ) : (
    <Text style={{ marginVertical: 20 }}>Test</Text>
  )
}

export default DetailProyek

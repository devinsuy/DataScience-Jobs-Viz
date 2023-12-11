import React from 'react'
import { RemoteByCountry } from './RemoteByCountry'
import { RemoteByJob } from './RemoteByJob'
import { RemoteByYear } from './RemoteByYear'

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
} as any

export const AllRemoteByPlots = () => {
  return (
    <div>
      <div style={rowStyle}>
        <RemoteByYear isAlone />
        <RemoteByCountry isAlone />
      </div>
      <RemoteByJob isAlone />
    </div>
  )
}

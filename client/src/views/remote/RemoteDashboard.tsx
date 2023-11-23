import React from 'react'
import {
  CloudCountryIndia,
  CloudCountryUS,
  CloudRemoteAllowedNo,
  CloudRemoteAllowedYes,
} from './plots'

export const RemoteDashboard: React.FC = () => {
  return (
    <div>
      <CloudCountryIndia />
      <CloudCountryUS />
      <CloudRemoteAllowedNo />
      <CloudRemoteAllowedYes />
    </div>
  )
}

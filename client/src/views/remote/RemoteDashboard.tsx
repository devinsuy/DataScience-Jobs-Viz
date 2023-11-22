import React from 'react'
import {
  RemoteByYear,
  RemoteByCountry,
  JobDesc,
  RemoteAllowedCounts,
  CloudCountryIndia,
  CloudCountryUS,
  CloudRemoteAllowedNo,
  CloudRemoteAllowedYes,
  CountryCounts,
} from './plots'

export const RemoteDashboard: React.FC = () => {
  return (
    <div>
      <RemoteByYear />
      <RemoteByCountry />
      <RemoteAllowedCounts />
      <CountryCounts />
      <CloudCountryIndia />
      <CloudCountryUS />
      <CloudRemoteAllowedNo />
      <CloudRemoteAllowedYes />
      <JobDesc />
    </div>
  )
}

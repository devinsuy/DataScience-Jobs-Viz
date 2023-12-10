import React from 'react'
import {
  CloudCountryIndia,
  CloudCountryUS,
  CloudRemoteAllowedNo,
  CloudRemoteAllowedYes,
  JobDesc,
} from './'

export const AllCloudPlots = (): React.ReactElement => {
  return (
    <div>
      <div>
        <p style={{ fontSize: '1.2em' }}>All Job Descriptions</p>
        <JobDesc />
      </div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <p style={{ fontSize: '1.2em' }}>US Job Listings</p>
            <CloudCountryUS />
          </div>
          <div>
            <p style={{ fontSize: '1.2em' }}>India Job Listings</p>
            <CloudCountryIndia />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <p style={{ fontSize: '1.2em' }}>Remote Allowed Listings</p>
            <CloudRemoteAllowedYes />
          </div>
          <div>
            <p style={{ fontSize: '1.2em' }}>Remote Not Allowed Listings</p>
            <CloudRemoteAllowedNo />
          </div>
        </div>
      </div>
    </div>
  )
}

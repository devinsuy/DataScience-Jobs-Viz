import React from 'react'
import {
  CloudCountryIndia,
  CloudCountryUS,
  CloudRemoteAllowedNo,
  CloudRemoteAllowedYes,
  JobDesc,
} from './'

export const headingStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
  marginBottom: '20px',
  marginLeft: '10px',
}

export const AllCloudPlots = (): React.ReactElement => {
  const rowStyle = {
    display: 'flex',
    flexDirection: 'row' as any,
    width: '100%',
    height: '100%',
    marginBottom: '40px',
  }

  const rowItemStyle = { height: '35%', width: '35%', border: '1px solid #000' }

  return (
    <div>
      <div
        style={{
          marginTop: '40px',
          border: '1px solid #000',
        }}
      >
        <p style={headingStyle}>All Listings</p>
        <JobDesc />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '40px',
        }}
      >
        <div style={rowStyle}>
          <div style={rowItemStyle}>
            <p style={headingStyle}>United States</p>
            <CloudCountryUS />
          </div>
          <div style={rowItemStyle}>
            <p style={headingStyle}>India</p>
            <CloudCountryIndia />
          </div>
        </div>

        <div style={rowStyle}>
          <div style={rowItemStyle}>
            <p style={headingStyle}>Remote Allowed</p>
            <CloudRemoteAllowedYes />
          </div>
          <div style={rowItemStyle}>
            <p style={headingStyle}>Remote Not Allowed</p>
            <CloudRemoteAllowedNo />
          </div>
        </div>
      </div>
    </div>
  )
}

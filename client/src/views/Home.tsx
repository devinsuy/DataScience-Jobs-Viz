import React, { useRef, useState } from 'react'
import '../styles/views/Home.css'
import { TableauEmbed, type TableauEmbedProps } from './TableauEmbed'
import { NavHeader } from 'NavHeader'
import {
  CloudCountryIndia,
  CloudCountryUS,
  CloudRemoteAllowedNo,
  CloudRemoteAllowedYes,
  JobDesc,
  RemoteByCountry,
  RemoteByYear,
} from './remote/plots'
import { DropdownSelect } from './DropdownSelect'
import { AllCloudPlots } from './remote/plots/wordCloud/AllCloudPlots'
import { SectionDivider, Spacer } from './UtilComponents'

const boldTextStyle = {
  fontWeight: 'bold',
}

const sectionHeadingStyle = {
  fontWeight: 'bold',
  fontSize: '1.2em',
  marginBottom: '20px',
}

const sectionContainerStyle = {} as any

export const Home = () => {
  const compensationVizProps: TableauEmbedProps = {
    workbookUrl: 'Compensation_17019148466490/Dashboard1',
    newDataUrl: '',
  }

  const locationVizProps: TableauEmbedProps = {
    workbookUrl: 'DataScienceJobListingMap/Dashboard1',
    newDataUrl: '',
  }
  const jobTitleVizProps: TableauEmbedProps = {
    workbookUrl: 'PercantageoflistingsbyJobTitle/Dashboard1',
    newDataUrl: '',
  }

  const compRef = useRef<HTMLDivElement>(null)
  const locRef = useRef<HTMLDivElement>(null)
  const remoteRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  // Conditionally select which word cloud type to render
  const options = [
    'Show All Plots',
    'Unfiltered Data',
    'United States',
    'India',
    'Remote Allowed',
    'Remote Not Allowed',
  ]
  type WordCloudEnum =
    | 'Show All Plots'
    | 'India'
    | 'United States'
    | 'Unfiltered Data'
    | 'Remote Allowed'
    | 'Remote Not Allowed'
  const [cloudType, setCloudType] = useState<WordCloudEnum>('Show All Plots')

  const getWordCloud = (): React.ReactElement => {
    switch (cloudType) {
      case 'Unfiltered Data':
        return (
          <div>
            <JobDesc isAlone />
          </div>
        )
      case 'United States':
        return (
          <div>
            <CloudCountryUS isAlone />
          </div>
        )
      case 'India':
        return (
          <div>
            <CloudCountryIndia isAlone />
          </div>
        )
      case 'Remote Allowed':
        return (
          <div>
            <CloudRemoteAllowedYes isAlone />
          </div>
        )
      case 'Remote Not Allowed':
        return (
          <div>
            <CloudRemoteAllowedNo isAlone />
          </div>
        )
      case 'Show All Plots':
        return <AllCloudPlots />
    }
  }

  return (
    <div className='main-container'>
      <NavHeader {...{ compRef, locRef, remoteRef, titleRef }} />

      <div className='main-content'>
        <Spacer height={40} />
        <div>
          <h1 style={boldTextStyle}>Interested in data science?</h1>
          {/* eslint-disable react/no-unescaped-entities */}
          <p style={{ fontSize: '1.2em' }}>
            We'll help you understand the industry and find the job that's right
            for you.
          </p>
        </div>
        <Spacer height={20} />
        <SectionDivider />

        <Spacer height={20} />
        <div ref={locRef} style={sectionContainerStyle}>
          <div>
            <a href='#Location' />
            <h1 style={boldTextStyle}>Where are you located?</h1>
          </div>
          <TableauEmbed {...locationVizProps} />
        </div>

        <Spacer height={40} />
        <SectionDivider />
        <Spacer height={20} />

        <div ref={titleRef}>
          <div>
            <h1 style={boldTextStyle}>
              What kind of job title can you expect?
            </h1>
          </div>
          <Spacer height={40} />
          <TableauEmbed {...jobTitleVizProps} />
        </div>
        <Spacer height={40} />
        <SectionDivider />
        <Spacer height={20} />

        <div ref={remoteRef}>
          <div>
            <h1 style={boldTextStyle}>Is remote work important to you?</h1>
            <Spacer height={20} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p style={sectionHeadingStyle}>Remote Work By Country</p>
            <RemoteByCountry />
          </div>
          <div>
            <p style={sectionHeadingStyle}>Remote Work By Year</p>
            <RemoteByYear />
          </div>
        </div>

        <div style={{ marginTop: '60px', marginBottom: '20px' }}>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '2em',
              marginBottom: '20px',
            }}
          >
            Words most commonly mentioned in job descriptions
          </p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '1.2em' }}>Select a filter:</p>
          </div>
          <DropdownSelect
            options={options}
            onChange={(selectedOption: string) => {
              setCloudType(selectedOption as WordCloudEnum)
            }}
          />
          <div style={{ marginTop: '40px' }}>{getWordCloud()}</div>
        </div>

        <SectionDivider />

        <div ref={compRef} style={{ marginTop: '40px' }}>
          <h1 style={boldTextStyle}>
            What kind of compensation can you expect?
          </h1>
        </div>
        <TableauEmbed {...compensationVizProps} />
        <Spacer height={80} />
      </div>
    </div>
  )
}

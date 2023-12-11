import React from 'react'

export const SectionDivider: React.FC = () => (
  <div
    style={{
      borderBottom: '2px solid #ccc',
      marginBottom: '20px',
      paddingBottom: '10px',
    }}
  ></div>
)

interface SpacerProps {
  height: number
}

export const Spacer: React.FC<SpacerProps> = ({ height }) => (
  <div style={{ height: `${height}px` }} />
)

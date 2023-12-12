import React, { useEffect } from 'react'

export interface TableauEmbedProps {
  workbookUrl: string
  newDataUrl: string
}

const tableau = (window as any).tableau
const baseUrl = 'https://public.tableau.com/views'
const queryParams =
  '?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link'

export const TableauEmbed: React.FC<TableauEmbedProps> = (
  props: TableauEmbedProps,
) => {
  const { workbookUrl, newDataUrl } = props
  const url = `${baseUrl}/${workbookUrl}${queryParams}`
  const containerId = `tableauContainer-${workbookUrl}`

  useEffect(() => {
    const containerDiv = document.getElementById(containerId)
    const options = {
      width: '100%',
      height: workbookUrl.startsWith('PercantageoflistingsbyJobTitle')
        ? '800px'
        : '1000px',
    }
    const viz = new tableau.Viz(containerDiv, url, options)
    return () => {
      // Clean up the Viz when the component is unmounted
      viz.dispose()
    }
  }, [workbookUrl, newDataUrl])

  return <div id={containerId} style={{ alignContent: 'center' }} />
}

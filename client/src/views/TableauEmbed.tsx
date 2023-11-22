import React, { useEffect } from 'react'

export interface TableauEmbedProps {
  workbookUrl: string
  newDataUrl: string
}

const tableau = (window as any).tableau
const baseUrl = 'https://public.tableau.com/views'
const queryParams =
  '?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link'

const TableauEmbed: React.FC<TableauEmbedProps> = (
  props: TableauEmbedProps,
) => {
  const { workbookUrl, newDataUrl } = props
  const url = `${baseUrl}/${workbookUrl}${queryParams}`
  useEffect(() => {
    const containerDiv = document.getElementById('tableauVizContainer')

    const options = {
      width: '100%',
      height: '5000px',
      hideTabs: true,
      hideToolbar: true,
      //   onFirstInteractive: () => {
      //     const viz = tableau.Viz.getVizs()[0]
      //     const workbook = viz.getWorkbook()

      //     // Your logic to change the data source dynamically
      //     workbook.changeDataSourceAsync(newDataUrl)
      //   },
    }

    const viz = new tableau.Viz(containerDiv, url, options)

    return () => {
      // Clean up the Tableau Viz when the component is unmounted
      viz.dispose()
    }
  }, [workbookUrl, newDataUrl])

  return <div id='tableauVizContainer' />
}

export default TableauEmbed

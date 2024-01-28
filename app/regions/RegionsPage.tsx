'use client'

import { useEffect, useState } from 'react'
import { Flex, Text } from '@radix-ui/themes'
import PageLayout from '@/components/PageLayout'
import FilterBar, { Filter, FilterMap } from './FilterBar'
import RegionsTable, { AwsRegion } from './RegionsTable'

interface AwsRegionsPageProps {
  regions: AwsRegion[]
}

const RegionsPage = ({ regions }: AwsRegionsPageProps) => {
  const [filter, setFilter] = useState<Filter>({
    geographies: []
  })
  const [filterMap, setFilterMap] = useState<FilterMap>()
  const [filteredRegions, setFilteredRegions] = useState<AwsRegion[]>([])
  const [tableHeight, setTableHeight] = useState<string>()

  const onResize = (height: number) => {
    setTableHeight(`calc(100vh - ${height}px)`)
  }

  useEffect(() => {
    if (regions?.length) {
      const filters: FilterMap = { geographies: new Set<string>() }
      setFilteredRegions(
        regions.filter((region: AwsRegion) => {
          filters.geographies.add(region.geography)
          return filter?.geographies.includes(region.geography) || !filter?.geographies.length
        })
      )
      setFilterMap(filters)
    }
  }, [regions, filter])

  return (
    <PageLayout
      title="AWS Geographies"
      subTitle={
        <Flex gap="3" direction="column">
          <Text>
            An AWS Region is a geographical location around the world where Amazon clusters its data
            centers.
          </Text>
          <ul className="list-disc list-inside pl-3">
            <li>
              <strong>Geographical Distribution:</strong> AWS Regions are spread across different
              parts of the world, enabling users to select the region closest to their end-users for
              better performance.
            </li>
            <li>
              <strong>Isolation and Availability:</strong> Each region comprises multiple
              Availability Zones, which are isolated from failures in other AZs, thus providing
              fault tolerance and stability for cloud services.
            </li>
            <li>
              <strong>Compliance and Data Residency: </strong> With regions located in various
              countries, AWS allows users to comply with data residency laws by storing data in a
              specific region.
            </li>
          </ul>
        </Flex>
      }
      filter={<FilterBar filterMap={filterMap} filter={filter} setFilter={setFilter} />}
      onResize={onResize}
    >
      <RegionsTable regions={filteredRegions} height={tableHeight} />
    </PageLayout>
  )
}

export default RegionsPage

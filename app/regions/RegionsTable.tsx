'use client'

import { useRef } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable, DataTableProps } from '@/components'

export type AwsRegion = {
  displayName: string
  geography: string
  latitude: string
  longitude: string
  pairedRegion: string
  physicalLocation: string
  regionalDisplayName: string
  name: string
  availabilityZoneCount: number
  restricted: boolean
}

interface AwsRegionsTableProps {
  regions: AwsRegion[]
  className?: string
  variant?: DataTableProps['variant']
  height?: number | string
}

const RegionsTable = ({
  className,
  variant = 'surface',
  regions,
  height = 'calc(100vh - 210px)'
}: AwsRegionsTableProps) => {
  const tableRef = useRef<any>()

  const columns: ColumnDef<AwsRegion>[] = [
    {
      accessorKey: 'name',
      header: 'Name'
    },
    {
      accessorKey: 'displayName',
      header: 'Display Name'
    },
    {
      accessorKey: 'geography',
      header: 'Geography'
    },
    {
      accessorKey: 'physicalLocation',
      header: 'Physical Location'
    },
    {
      accessorKey: 'availabilityZoneCount',
      header: 'Availability Zone Count'
    }
  ]

  return (
    <DataTable
      variant={variant}
      className={className}
      loading={false}
      ref={tableRef}
      columns={columns}
      data={regions}
      style={{ height, minHeight: '400px', width: '100%' }}
    />
  )
}

export default RegionsTable

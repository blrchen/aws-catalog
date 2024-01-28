'use client'

import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import { AwsRegion } from '@/app/regions/RegionsTable'
import PageLayout from '@/components/PageLayout'

interface AwsGeography {
  name: string
  regions: AwsRegion[]
}

interface AwsGeographiesPageProps {
  geographies: AwsGeography[]
}

const GeographiesPage = ({ geographies }: AwsGeographiesPageProps) => {
  console.log(geographies)
  return (
    <PageLayout
      title="AWS Geographies"
      subTitle="AWS Geographies refer to the global regions where Amazon Web Services (AWS) has its data centers. These regions are strategically located in various parts of the world to provide users with the best possible performance by allowing them to choose the region closest to their end-users."
    >
      <Flex direction="column" gap="3" p="4">
        {geographies.map((geography: AwsGeography) => (
          <Card key={geography.name} variant="surface" className="p-5">
            <Heading size="4">
              <Text style={{ color: 'var(--accent-11)' }}> {geography.name}</Text>
            </Heading>
            <Text as="div" color="gray" size="3" mb="4">
              {geography.regions.map((region) => region.displayName).join(', ')}
            </Text>
          </Card>
        ))}
      </Flex>
    </PageLayout>
  )
}

export default GeographiesPage

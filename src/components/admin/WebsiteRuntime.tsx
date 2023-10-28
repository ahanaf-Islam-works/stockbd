"use client";
import {
  ArrowCircleDownIcon,
  CogIcon,
  MinusCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";

import { Card, Icon, Title, Text, Flex } from "@tremor/react";

const categories = {
  title: "Website",
  metric: "98.3%",
};

export default function WebsiteRuntime() {
  return (
    <>
      <Card key={categories.title}>
        <Flex>
          <Title className="w-full">{categories.title}</Title>
          <Flex justifyContent="end" className="-space-x-2 -mr-2">
            <Icon
              icon={CheckCircleIcon}
              color="emerald"
              tooltip="Operational"
            />
          </Flex>
        </Flex>
        <Flex className="mt-4">
          <Text>Uptime</Text>
          <Text>{categories.metric}</Text>
        </Flex>
      </Card>
    </>
  );
}

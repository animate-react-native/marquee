import * as React from 'react';
import { Text } from 'react-native';

export function Heading({
  children,
  primary = true,
}: React.PropsWithChildren<{ primary?: boolean }>) {
  return (
    <Text
      numberOfLines={1}
      style={{
        fontWeight: '900',
        fontSize: 24,
        textTransform: 'uppercase',
        color: primary ? '#F0F464' : '#1f1f1f',
      }}
    >
      {children}
    </Text>
  );
}

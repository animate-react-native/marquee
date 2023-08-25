import * as React from 'react';
import { View } from 'react-native';

export function Box({
  children,
  size = 100,
  spacing = 0,
  primary = true,
}: React.PropsWithChildren<{
  size?: number;
  spacing?: number;
  primary?: boolean;
}>) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 16,
        marginRight: spacing,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primary ? '#F0F464' : '#1f1f1f',
      }}
    >
      {children}
    </View>
  );
}

import React from 'react';
import { CustomThemeInterface } from '@atbay/theming';
import type { IconType } from '@atbay/icons';

export interface TextIconTypes {
  iconLocation?: 'left' | 'right';
  icon: React.VFC<IconType>;
  text: string;
  iconStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  textVariant?: keyof CustomThemeInterface['fonts'];
  onClick?: () => void;
}

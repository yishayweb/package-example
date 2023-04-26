import React from 'react';
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

export interface TextProps extends TypographyProps {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  style?: React.CSSProperties;
  noWrap?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

const StyledText = styled(Typography, {
  shouldForwardProp: (prop: string) => !['noWrap'].includes(prop),
})<TextProps>(({ noWrap }) => ({
  maxWidth: '100%',
  display: 'block',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: noWrap ? 'nowrap' : 'normal',
  fontSize: 14,
  fontWeight: 400,
}));

const Text: React.FC<TextProps> = ({
  component = 'span',
  noWrap = true,
  style = {},
  className,
  onClick = () => {},
  children,
}) => {
  return (
    <StyledText
      noWrap={noWrap}
      component={component}
      style={style}
      classes={{ root: className }}
      onClick={onClick}
    >
      Hello this is the text: {children}
    </StyledText>
  );
};

export default Text;

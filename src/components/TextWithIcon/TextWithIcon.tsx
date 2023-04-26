import React from 'react';
import { TextIconTypes } from './TextWithIcon.types';
import { TextIconStyle } from './TextWithIcon.styles';

const TextWithIcon: React.FC<TextIconTypes> = ({
  iconLocation = 'left',
  text,
  onClick,
}) => {
  return (
    <TextIconStyle hoverFlag={!!onClick} iconLocation={iconLocation}>
      Hi the icon with text:
      <div className="this-is-some-class">{text}</div>
    </TextIconStyle>
  );
};

export default TextWithIcon;

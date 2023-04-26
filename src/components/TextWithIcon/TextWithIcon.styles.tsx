import { styled } from '@mui/material/styles';

export const TextIconStyle = styled('div', {
  shouldForwardProp: (prop: string) =>
    !['hoverFlag', 'iconLocation'].includes(prop),
})<{ hoverFlag: boolean; iconLocation: 'left' | 'right' }>(
  ({ hoverFlag, iconLocation }) => ({
    padding: '5px 15px 5px',
    lineHeight: '1.5rem',
    display: 'inline-flex',
    alignSelf: 'center',
    gap: 8,
    alignItems: 'baseline',
    flexDirection: iconLocation == 'left' ? 'row' : 'row-reverse',
    '& .this-is-some-class': {
      alignSelf: 'center',
      color: 'green',
    },
    '& > svg': {
      alignSelf: 'center',
      '&:hover': {
        filter: hoverFlag ? 'invert(0)' : '',
        cursor: hoverFlag ? 'pointer' : '',
      },
    },
  }),
);

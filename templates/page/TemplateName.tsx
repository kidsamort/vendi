import React, { FC } from 'react';
import { TemplateNameWrapperStyled } from './TemplateName.styled';

const TemplateName: FC = () => (
  <TemplateNameWrapperStyled className='TemplateName' data-testid='TemplateName'>
    TemplateName Component
  </TemplateNameWrapperStyled>
);

export default TemplateName;

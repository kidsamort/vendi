import React, { FC } from 'react';
import { TemplateNameWrapperStyled } from './TemplateName.styled';
import { TemplateNameComponentProps } from './TemplateName.props';


const TemplateName: FC<TemplateNameComponentProps> = () => (
  <TemplateNameWrapperStyled className='TemplateName' data-testid='TemplateName'>
    TemplateName Component
  </TemplateNameWrapperStyled>
);

export default TemplateName;

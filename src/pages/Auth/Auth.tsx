import React, { FC } from 'react';
import { AuthWrapperStyled } from './Auth.styled';
import { AuthComponentProps } from './Auth.props';


const Auth: FC<AuthComponentProps> = () => (
  <AuthWrapperStyled className='Auth' data-testid='Auth'>
    Auth Component
  </AuthWrapperStyled>
);

export default Auth;

import React from 'react';

import style from './RenderField.module.scss';


export const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <input {...input} type={type} placeholder={label} className={style.formInput} />
      {touched &&
        ((error && <span className={style.errorNotice}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );

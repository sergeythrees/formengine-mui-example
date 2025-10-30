import {Checkbox} from '@mui/material'
import {boolean, define, disabled, event, string} from '@react-form-builder/core'
import {sizeProperty} from './consts'

export const muiCheckbox = define(Checkbox, 'MuiCheckbox')
  .name('Checkbox')
  .props({
    checked: boolean.valued.uncontrolledValue(false),
    color: string,
    defaultChecked: boolean,
    disabled: disabled,
    size: sizeProperty,
    onChange: event,
  })

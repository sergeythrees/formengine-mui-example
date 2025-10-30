import {Button} from '@mui/material'
import {boolean, define, disabled, event, oneOf, string, useBuilderValue} from '@react-form-builder/core'
import {sizeProperty} from './consts'

const defaultContent = 'Button'

const MuiButton = ({children, ...props}) => {
  const content = useBuilderValue(children, defaultContent)
  return <Button {...props}>{content}</Button>
}

export const muiButton = define(MuiButton, 'MuiButton')
  .name('Button')
  .props({
    children: string.default(defaultContent).dataBound,
    color: string,
    disabled: disabled,
    disableElevation: boolean,
    loading: boolean,
    variant: oneOf('text', 'outlined', 'contained').withEditorProps({creatable: false}),
    size: sizeProperty,
    onClick: event,
  })

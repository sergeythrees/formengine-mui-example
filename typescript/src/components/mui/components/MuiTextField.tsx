import {TextField} from '@mui/material'
import {boolean, define, disabled, event, number, oneOf, string} from '@react-form-builder/core'
import type {ChangeEvent, ComponentProps} from 'react'
import {useCallback, useMemo} from 'react'
import {useErrorMessage} from './useErrorMessage'
import {useRequired} from './useRequired'

type MuiTextFieldProps = ComponentProps<typeof TextField> & {
  onChange?: (value: string) => void
}

const MuiTextField = ({error, helperText, onChange, ...props}: MuiTextFieldProps) => {
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(event.target.value)
  }, [onChange])

  const required = useRequired()
  const [hasErrorMessage, errorMessage] = useErrorMessage()

  const errorValue = useMemo(() => {
    return hasErrorMessage ? true : error
  }, [error, hasErrorMessage])

  const helperTextValue = useMemo(() => {
    return hasErrorMessage ? errorMessage : helperText
  }, [errorMessage, hasErrorMessage, helperText])

  return <TextField {...props}
                    error={errorValue}
                    helperText={helperTextValue}
                    onChange={handleChange}
                    required={required}
  />
}

export const muiTextField = define(MuiTextField, 'MuiTextField')
  .name('Text Field')
  .props({
    error: boolean,
    color: string,
    label: string,
    fullWidth: boolean,
    multiline: boolean,
    maxRows: number,
    variant: oneOf('outlined', 'standard', 'filled').withEditorProps({creatable: false}),
    size: oneOf('small', 'medium').withEditorProps({creatable: false}),
    margin: oneOf('dense', 'normal', 'none').withEditorProps({creatable: false}),
    helperText: string,
    value: string.valued.uncontrolledValue(''),
    disabled: disabled,
    onChange: event,
  })

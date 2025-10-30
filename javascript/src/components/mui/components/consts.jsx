import {oneOf} from '@react-form-builder/core'

export const sizeProperty = oneOf('small', 'medium', 'large').withEditorProps({creatable: false})

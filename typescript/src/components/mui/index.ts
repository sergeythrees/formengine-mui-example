import type {Definer} from '@react-form-builder/core'
import {createView} from '@react-form-builder/core'
import {muiButton} from './components/MuiButton'
import {muiCheckbox} from './components/MuiCheckbox'
import {muiTextField} from './components/MuiTextField'

const categories = {
  inputs: [
    muiCheckbox,
    muiTextField
  ],
  dataDisplay: [
    muiButton
  ]
}

/**
 * An array of mui component metadata factories.
 */
const muiComponents: Definer<any>[] = []

const prefix = 'Mui'
Object.entries(categories).forEach(([category, components]) => {
  components.forEach(c => {
    if (!c.getType().startsWith(prefix)) {
      throw new Error(`The component type must start with '${prefix}', type: '${c.getType()}'`)
    }
    c.category(category)
    muiComponents.push(c)
  })
})

export {muiComponents}

const components = muiComponents.map(def => def.build())

/**
 * An array of mui component metadata for use in FormViewer.
 */
export const muiModels = components.map(({model}) => model)

/**
 * An assembled set of mui components, ready to be passed as a property to the FormViewer.
 */
export const muiView = createView(muiModels)

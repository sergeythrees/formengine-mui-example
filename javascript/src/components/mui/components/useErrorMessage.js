import { useComponentData } from "@react-form-builder/core"
import { useMemo } from "react"

/**
 * @returns the tuple containing:
 *   - hasError: boolean indicating if an error exists.
 *   - errorMessage: the error message string or undefined.
 */
export const useErrorMessage = () => {
  const componentData = useComponentData()
  const { field } = componentData

  return useMemo(() => {
    const hasError = typeof field?.error === "string"
    return [hasError, field?.error]
  }, [field?.error])
}

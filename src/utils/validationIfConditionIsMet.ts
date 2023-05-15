import { hasValue } from './hasValue'
import { info } from '@actions/core'

export function validationIfConditionIsMet(
  body: string,
  conditionalValue: string,
  valueThatMustExist: string,
): boolean {
  const firstStep = hasValue(body, conditionalValue)
  const secondStep = hasValue(body, valueThatMustExist)

  info(`VALIDATION - FIRST: ${firstStep}`)
  info(`VALIDATION - SECOND: ${secondStep}`)

  let result: boolean
  result = false

  if (!firstStep) {
    result = true
  }

  if (firstStep && !secondStep) {
    result = false
  }

  info(`result -> ${result}`)
  return result
}

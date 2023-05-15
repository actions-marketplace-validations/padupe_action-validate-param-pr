import { hasValue } from './hasValue'

export function validationIfConditionIsMet(
  body: string,
  conditionalValue: string,
  valueThatMustExist: string,
): boolean {
  const firstStep = hasValue(body, conditionalValue)
  const secondStep = hasValue(body, valueThatMustExist)

  console.log(`VALIDATION - FIRST: ${firstStep}`)
  console.log(`VALIDATION - SECOND: ${secondStep}`)

  let result: boolean
  result = false

  if (!firstStep) {
    result = true
  }

  if (firstStep && !secondStep) {
    result = false
  }

  console.log('result ->', result)
  return result
}

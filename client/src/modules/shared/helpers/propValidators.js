import { variableType } from 'shared/util/util.js'

const defaultDimensions = ['x', 'y']
const defaultRangeKeys  = ['start', 'end']
const defaultPositions  = ['left', 'right']

export const numberValidator = value => variableType(value) === 'Number'

export const axisValidator = (value, dimensions = defaultDimensions) => variableType(dimensions) === 'Array' && dimensions.includes(value)

export const rangeValidator = (value, keys = defaultRangeKeys) => variableType(keys) === 'Object' && keys.every(key => Object.keys(value).includes(key))

export const numberOrRangeValidator = (value, keys = defaultRangeKeys)  => variableType(keys) === 'Object' && rangeValidator(value, keys) || variableType(keys) === 'Number'

export const positionValidator = (value, positions = defaultPositions) => variableType(positions) === 'Array' && positions.includes(value)

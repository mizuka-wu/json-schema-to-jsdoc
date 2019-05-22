/* eslint-disable no-console */
import json from 'json-pointer'

/**
 *
 * @param {Object} schema
 * @param {{ignore: string[]}} options
 */
export default function generate(schema, options = {}) {
  let jsdoc = ''

  if (!schema || Object.keys(schema).length === 0) {
    return jsdoc
  }

  jsdoc += '/**\n'
  jsdoc += writeDescription(schema)

  if (!json.has(schema, '/properties')) {
    return jsdoc
  }

  jsdoc += processProperties(schema, '', options)

  jsdoc += '  */\n'

  return jsdoc
}

/**
 * 生成
 * @param {*} schema
 * @param {*} nested
 * @param {*} options
 */
function processProperties(schema, nested, options = {}) {
  const props = json.get(schema, '/properties')
  const required = json.has(schema, '/required')
    ? json.get(schema, '/required')
    : []

  let text = ''
  for (let property in props) {
    let optional = !required.includes(property)
    if (Array.isArray(options.ignore) && options.ignore.includes(property)) {
      continue
    } else {
      let prefix = nested ? `${nested}.` : ''

      if (props[property].type === 'object' && props[property].properties) {
        text += writeParam(
          'Object',
          prefix + property,
          props[property].description,
          optional
        )
        text += processProperties(props[property], prefix + property)
      } else if (props[property].type === 'array' && props[property].items) {
        let { items } = props[property]
        // 如果是object 继续循环
        if (items.type === 'object') {
          text += writeParam(
            'Object[]',
            prefix + property + '[]',
            props[property].description,
            !required.includes(property)
          )
          text += processProperties(items, prefix + property)
        } else {
          /**
           * 非object
           * @todo 支持第三方类 upperFirst(property)
           */
          text += writeParam(
            getType(props[property].items) + '[]',
            prefix + property,
            props[property].description,
            optional
          )
        }
      } else {
        let type = getType(props[property]) || upperFirst(property)
        text += writeParam(
          type,
          prefix + property,
          props[property].description,
          optional
        )
      }
    }
  }
  return text
}

function writeDescription(schema, suffix = 'object') {
  let name = schema.id || schema.description
  let text = schema.description || `Represents a ${name} ${suffix}`
  text += `\n  * @name ${upperFirst(name)}`
  return `  * ${text}\n  *\n`
}

/**
 *
 * @param {*} type
 * @param {*} field
 * @param {*} description
 * @param {boolean} optional
 */
function writeParam(type = '', field, description = '', optional = true) {
  const fieldTemplate = optional ? `[${field}]` : field
  return `  * @property {${type}} ${fieldTemplate} - ${description} \n`
}

function getType(schema) {
  if (schema.$ref) {
    const ref = json.get(schema, schema.$ref.substr(1))
    return getType(ref)
  }

  if (schema.enum) {
    return 'enum'
  }

  if (Array.isArray(schema.type)) {
    if (schema.type.includes('null')) {
      return `?${schema.type[0]}`
    } else {
      return schema.type.join('|')
    }
  }

  return schema.type
}

function upperFirst(str = '') {
  return str.substr(0, 1).toUpperCase() + str.substr(1)
}

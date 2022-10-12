import { DEPENDENCIES_MAP, ASSETS_GROUP, DEFAULT_MODULES, RELATIVES_GROUP } from './constants'

// dependencies utils
function dependenciesMapToGroup(map: typeof DEPENDENCIES_MAP) {
  return { GROUP: Object.values(map) }
}

// modules utils

function modulesToRegex(modules: string[]) {
  return modules.map(module => `^${module}`)
}

function modulesTypingsToRegex(modules: string[]) {
  return modules.map(module => `^typings/${module}`)
}

function modulesTypesToRegex(modules: string[]) {
  return modules.map(module => `^${module}.*\\u0000$`)
}

function modulesToDependenciesMap(modules: string[]) {
  const newDependenciesMap = { ...DEPENDENCIES_MAP }

  newDependenciesMap.DEPENDENCIES_TYPES = `^(?!${modules.join('|')})@?\\w.*\\u0000$`

  newDependenciesMap.DEPENDENCIES = `^(?!${modules.join('|')})@?\\w`

  return newDependenciesMap
}

function modulesToGroup(modules: string[]) {
  const MODULES = modulesToRegex(modules.slice(1))

  const MODULES_TYPING = modulesTypingsToRegex(modules)

  const MODULES_TYPES = modulesTypesToRegex(modules)

  return {
    MODULES,
    MODULES_TYPING,
    MODULES_TYPES,
    GROUP: [...MODULES_TYPING, ...MODULES_TYPES, ...MODULES],
  }
}

function modulesToGroups(modules: string[] = DEFAULT_MODULES) {
  const dependenciesMap = modulesToDependenciesMap(modules)

  const dependenciesGroup = dependenciesMapToGroup(dependenciesMap).GROUP

  const modulesGroup = modulesToGroup(modules).GROUP

  const groups = [ASSETS_GROUP, dependenciesGroup, [...modulesGroup, ...RELATIVES_GROUP]]

  return groups
}

export {
  modulesToRegex,
  modulesTypingsToRegex,
  modulesTypesToRegex,
  modulesToDependenciesMap,
  modulesToGroup,
  dependenciesMapToGroup,
  modulesToGroups,
}

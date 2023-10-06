interface ConfigI {
    newName: string
    newValue: any
}

type Config = Record<string, ConfigI>;

export function deepRename(data: any, config: Config) {
  if (Array.isArray(data)) {
    return data.map(el => deepRename(el, config));
  }

  if (typeof data === 'object') {
    const newObj = {};

    for (const prop in data) {
      if (Object.hasOwn(data, prop)) {
        const configProp = config?.[prop];

        if (configProp) {
          const newProp = Object.hasOwn(configProp, 'newName') ? configProp.newName : prop;
          const newValue = Object.hasOwn(configProp, 'newValue') ? configProp.newValue : data[prop];

          newObj[newProp] = deepRename(newValue, config);
        } else {
          newObj[prop] = deepRename(data[prop], config);
        }
      }
    }

    return newObj;
  }

  return data;
}

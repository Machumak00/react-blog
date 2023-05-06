export function getOptionsFromObject(object: object) {
    const options = [];

    for (const array of Object.entries(object)) {
        options.push({ value: array[0], content: array[1] });
    }

    return options;
}

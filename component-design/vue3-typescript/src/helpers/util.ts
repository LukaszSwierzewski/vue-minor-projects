
export function excludeByFirstLetter<T> (arr: T[], excludes: string[], filterBy: string): T[] {
    if(!arr.every(item => Object.keys(item).includes(filterBy))) throw new Error("filterBy key is not valid in this Object");
    let exclusion = arr.filter((item) => {
        return excludes.some(pattern => (item as any)[filterBy][0].toLowerCase() === pattern.toLowerCase())
        })
        const filtered = arr.filter(val => !exclusion.includes(val));
        return filtered
    }
export function regexID (url: string) {
    const regexMatch = url.match(/\/people\/(\d+)\//)
    if (regexMatch) {
        const ID: any = regexMatch![0] as any;
        return ID
      }
}
export function countMatches<T> (arr: T[], param: string, filterBy: string): number {
    const count = arr.filter((item) => (item as any)[param] === filterBy).length;
    return count

}

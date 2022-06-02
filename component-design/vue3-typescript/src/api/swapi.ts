import type { People } from '@/types/People.type'

export const fetchPersons = async (): Promise<People[]> => {
    let nextPage = 'https://swapi.py4e.com/api/people/'

    let people: People[] = []
    // unfortunately swapi does not allow you to download everything in 1 request
    try {
    while (nextPage) {
        const res = await fetch(nextPage)

        const { next, results } = await res.json()

        nextPage = next

        people = [...people, ...results]
    }
    return people
    } catch (e)  {
        throw(e)
    }
}
export const fetchPerson = async (id: string): Promise<People> => {
    let personUrl = 'https://swapi.py4e.com/api/people/' + id
    const res = await fetch(personUrl)
    const results = await res.json()
    return results
}
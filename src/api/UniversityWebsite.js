export const getUniversityWebsite = (name) => {
    const url = `http://universities.hipolabs.com/search?${new URLSearchParams({"name" : name})}`;
    return fetch(url).then((response) => response.json());
}
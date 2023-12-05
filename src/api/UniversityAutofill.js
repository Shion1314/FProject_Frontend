export const getAutofillUniversityNames = (name, number = 5) => {
    const url = `https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${new URLSearchParams(name)}&fields=school.name&page=0&_per_page=${number}&api_key=JR2bSjRuzWRhqfBKRtivv1zuz8yUVhbnGvk2K31x`;
    return fetch(url).then((response) => response.json());
}
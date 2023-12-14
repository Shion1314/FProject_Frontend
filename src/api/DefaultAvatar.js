export const getDefaultAvatar = ( name ) => {
    const url = `https://ui-avatars.com/api/?name=${name}`;

    return fetch(url).then((response) => response.json());
}
export const postBird = (bird, season) => {
    return fetch('http://localhost:7890/birds', {
        method: 'POST',
        body: JSON.stringify({ bird, season })
    })
    .then(res => res.json());
};
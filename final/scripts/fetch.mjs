export async function apiFetch(url, card, modal, filter1, filter2) {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            if(filter1 == -1) {
                card(data.trees, modal);
            }
            else {
                card(data.trees.filter((tree) => tree.minHeight <= filter2 && tree.maxHeight >= filter1), modal);
            }
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

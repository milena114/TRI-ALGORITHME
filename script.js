function insertionSort(arr) {
    // On parcourt le tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        // L'élément à insérer
        let key = arr[i];
        // Indice de l'élément précédent
        let j = i - 1;

        // Déplacer les éléments du tableau qui sont plus grands que 'key'
        // d'une position vers la droite pour faire de la place pour 'key'
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // Insérer 'key' à sa position correcte
        arr[j + 1] = key;
    }
    return arr;
}

// Exemple d'utilisation
let array = [12, 11, 13, 5, 6];
console.log(insertionSort(array)); // Sortie : [5, 6, 11, 12, 13]

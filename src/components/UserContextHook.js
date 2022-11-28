import React from 'react';




 // Quand on veut mettre en place le partage de donnees avec useContext,
 // on n'utilise plus consumer. Consumer est remplacer par useContext()
export const fullNameContext = React.createContext()
export const idNumberContext = React.createContext()


// On par fournir le composant le plus haut.
const FullNameProvider = fullNameContext.Provider
const IdNumberProvider = idNumberContext.Provider

export { FullNameProvider, IdNumberProvider }


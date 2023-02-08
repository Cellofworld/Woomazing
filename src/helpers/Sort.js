

export function sortItem(choiceNav, data ) {
    let sorteredItems =[]
    if (choiceNav === 'all') {
      return data
    } else {
      sorteredItems.push(data.filter(el => el.category === choiceNav))
      return sorteredItems[0]
    }
  }
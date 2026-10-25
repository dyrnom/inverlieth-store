document.documentElement.dataset.js = 'ok';

const filter = document.querySelector('#category-filter');
const cards = document.querySelectorAll('.card');
const noResults = document.querySelector('#no-results');

function applyFilter() {
  const category = filter.value;
  let visible = 0;

  cards.forEach(function (card) {
    const cardCategory = card.dataset.category;
    // Exact match, or a parent group such as "men" matching "men-topwear".
    const matches = !category || cardCategory === category || cardCategory.startsWith(category + '-');
    card.hidden = !matches;
    if (matches) visible++;
  });

  noResults.hidden = visible > 0;
}

filter.addEventListener('change', applyFilter);
applyFilter();

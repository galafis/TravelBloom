const data = [
  { type: 'beach', title: 'Maldives', img: './assets/images/beach1.jpg', desc: 'Crystal clear waters and white sands.' },
  { type: 'beach', title: 'Bora Bora', img: './assets/images/beach2.jpg', desc: 'Tropical paradise with stunning views.' },
  { type: 'temple', title: 'Taj Mahal', img: './assets/images/temple1.jpg', desc: 'Majestic marble mausoleum in India.' },
  { type: 'temple', title: 'Kyoto Temple', img: './assets/images/temple2.jpg', desc: 'Historic beauty in Japan.' },
  { type: 'city', title: 'Toronto', img: './assets/images/canada1.jpg', desc: 'Skyline and cultural hub of Canada.' },
  { type: 'city', title: 'Vancouver', img: './assets/images/canada2.jpg', desc: 'Harbor city surrounded by nature.' }
];

function searchDestinations() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = data.filter(item => item.type.includes(query) || item.title.toLowerCase().includes(query));
  document.getElementById('results').innerHTML = results.map(item => `
    <div class="card">
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('results').innerHTML = '';
}
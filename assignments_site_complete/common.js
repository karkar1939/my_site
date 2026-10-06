function modal(){document.getElementById('modal').classList.toggle('show')}
function addCart(){document.getElementById('cart').textContent='Product added to cart.'}
function toggleAccordion(btn){const p=btn.nextElementSibling;p.classList.toggle('show');btn.setAttribute('aria-expanded',p.classList.contains('show'))}
function changeLang(v){document.getElementById('hello').textContent=v==='ru'?'Добро пожаловать':'Welcome'}
function loadMore(){const f=document.getElementById('feed');for(let i=0;i<5;i++){const p=document.createElement('p');p.textContent='Loaded item '+(f.children.length+1);f.appendChild(p)}}

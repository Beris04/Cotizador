
(() => {
  const LOGO = "data:image/png;base64,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";
  const dataEl = document.getElementById('pedido-data');
  if (!dataEl) return;
  const APP_DATA = JSON.parse(dataEl.textContent || '{}');
  const productsRaw = Array.isArray(APP_DATA.products) ? APP_DATA.products : [];
  const pageSizeMobile = 30;
  const pageSizeWeb = 45;
  const clientCodeSafe = (APP_DATA.client_code || 'cliente').toString().trim() || 'cliente';
  const STORAGE_KEY = 'toyo_pedido_' + clientCodeSafe;
  const VIEW_KEY = STORAGE_KEY + '_view';

  const PLACEHOLDER_CACHE = new Map();
  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function normalize(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
  function placeholderFor(code) {
    if (PLACEHOLDER_CACHE.has(code)) return PLACEHOLDER_CACHE.get(code);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480">
      <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#eef3fb"/><stop offset="100%" stop-color="#dde7f8"/></linearGradient></defs>
      <rect width="100%" height="100%" rx="36" fill="url(#g)"/>
      <rect x="26" y="26" width="588" height="428" rx="26" fill="#ffffff" stroke="#d9e4f5"/>
      <text x="50%" y="44%" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" text-anchor="middle" fill="#0b3d91">Imagen no disponible</text>
      <text x="50%" y="54%" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="700" text-anchor="middle" fill="#42526b">${esc(code)}</text>
      <text x="50%" y="63%" font-family="Arial, Helvetica, sans-serif" font-size="16" text-anchor="middle" fill="#5b6b82">Catálogo Toyo Foods</text>
    </svg>`;
    const uri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    PLACEHOLDER_CACHE.set(code, uri);
    return uri;
  }
  const products = productsRaw.map((p, idx) => ({
    code: p.code || '',
    name: p.name || '',
    category: p.category || 'Otros',
    img: p.img || '',
    has_img: !!p.has_img,
    qty6m: Number(p.qty6m || 0),
    orders6m: Number(p.orders6m || 0),
    badge: p.badge || '',
    index: idx
  }));

  const categoryOrder = ['Abarrotes','Salsas','Bebidas','Congelados','Frescos','Pescados y Mariscos','Arroces','Fideos y Pastas','Masas y Pieles','Harinas','Tofu','Aceites','Pan y Deli','Pan','Carnes','Utensilios','Accesorios','Dulces y Botanas','Mascotas','Cuidado Personal','Otros'];
  const categoryRank = Object.fromEntries(categoryOrder.map((c, i) => [c, i]));
  const categories = [...new Set(products.map(p => p.category))].sort((a, b) => ((categoryRank[a] ?? 999) - (categoryRank[b] ?? 999)) || a.localeCompare(b, 'es'));
  let state = {
    query: '',
    activeCategory: '',
    selectedOnly: false,
    page: 1,
    viewMode: localStorage.getItem(VIEW_KEY) || 'mobile',
    quantities: {},
    clientName: APP_DATA.client_name || '',
    clientCode: APP_DATA.client_code || '',
    seller: APP_DATA.vendor_label || '',
    payment: APP_DATA.payment_default || 'Crédito',
    notes: ''
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (saved && typeof saved === 'object') {
        if (saved.quantities && typeof saved.quantities === 'object') state.quantities = saved.quantities;
        if (typeof saved.clientName === 'string') state.clientName = saved.clientName;
        if (typeof saved.clientCode === 'string') state.clientCode = saved.clientCode;
        if (typeof saved.seller === 'string') state.seller = saved.seller;
        if (typeof saved.payment === 'string') state.payment = saved.payment;
        if (typeof saved.notes === 'string') state.notes = saved.notes;
      }
    } catch (e) {}
    products.forEach(p => {
      if (!Number.isFinite(state.quantities[p.code])) state.quantities[p.code] = Number(state.quantities[p.code] || 0);
      if (state.quantities[p.code] < 0) state.quantities[p.code] = 0;
    });
  }
  function saveState() {
    const payload = {
      quantities: state.quantities,
      clientName: state.clientName,
      clientCode: state.clientCode,
      seller: state.seller,
      payment: state.payment,
      notes: state.notes
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    localStorage.setItem(VIEW_KEY, state.viewMode);
  }
  loadState();

  function applyViewMode(mode) {
    state.viewMode = mode === 'web' ? 'web' : 'mobile';
    document.body.classList.toggle('force-web', state.viewMode === 'web');
    const btn = document.getElementById('viewToggleBtn');
    const note = document.getElementById('viewNote');
    if (btn) btn.textContent = state.viewMode === 'web' ? 'Vista móvil' : 'Vista web';
    if (note) note.textContent = state.viewMode === 'web' ? 'Vista web activa' : 'Vista móvil activa';
    saveState();
    renderProducts();
  }

  function currentPageSize() {
    return state.viewMode === 'web' ? pageSizeWeb : pageSizeMobile;
  }
  function filteredProducts() {
    let rows = products.filter(p => {
      const matchQuery = !state.query || normalize(p.name).includes(normalize(state.query)) || normalize(p.code).includes(normalize(state.query));
      const matchCategory = !state.activeCategory || normalize(p.category) === normalize(state.activeCategory);
      const matchSelected = !state.selectedOnly || (state.quantities[p.code] || 0) > 0;
      return matchQuery && matchCategory && matchSelected;
    });
    rows.sort((a, b) => (b.qty6m - a.qty6m) || (b.orders6m - a.orders6m) || a.name.localeCompare(b.name, 'es'));
    return rows;
  }
  function totalProductsSelected() {
    return products.filter(p => (state.quantities[p.code] || 0) > 0).length;
  }
  function totalPieces() {
    return products.reduce((acc, p) => acc + Number(state.quantities[p.code] || 0), 0);
  }
  function cartItems() {
    return products.filter(p => (state.quantities[p.code] || 0) > 0).map(p => ({...p, qty: Number(state.quantities[p.code] || 0)}));
  }

  function buildAppChrome() {
    document.body.innerHTML = `
      <div class="app">
        <header class="hero">
          <div class="hero-shell">
            <div class="hero-main">
              <div class="brand-badge"><img src="${LOGO}" alt="Toyo Foods"></div>
              <div class="hero-copy">
                <div class="eyebrow">Pedido digital Toyo Foods</div>
                <h1>${esc(APP_DATA.client_name || 'Cliente')}</h1>
                <p>Catálogo generado desde historial de 6 meses, sin productos repetidos y con imágenes vinculadas al catálogo maestro.</p>
              </div>
            </div>
            <div class="hero-aside">
              <div class="metric full"><div class="k">Cliente</div><div class="v">${esc(APP_DATA.client_name || '')}</div></div>
              <div class="metric"><div class="k">Código</div><div class="v">${esc(APP_DATA.client_code || '')}</div></div>
              <div class="metric"><div class="k">Vendedor</div><div class="v">${esc(APP_DATA.vendor_label || '')}</div></div>
            </div>
          </div>
        </header>
        <div class="layout">
          <main>
            <div class="toolbar">
              <div class="toolcard">
                <div class="search-grid">
                  <div class="search">
                    <span class="search-icon">🔎</span>
                    <input id="searchInput" placeholder="Buscar artículo o código"/>
                  </div>
                  <button class="toolbtn" id="selectedBtn" type="button">Solo capturados</button>
                  <button class="toolbtn" id="clearBtn" type="button">Limpiar todo</button>
                  <button class="toolbtn" id="viewToggleBtn" type="button">Vista web</button>
                </div>
                <div class="helper">Puedes buscar por nombre o SKU, usar las categorías y capturar piezas con teclado o con los botones + / −. El pedido se guarda automáticamente en este navegador.</div>
                <div class="chip-row" id="categoryChips"></div>
                <div class="helper" id="viewNote">Vista móvil activa</div>
              </div>
            </div>
            <section class="section-head">
              <h2 id="resultTitle">Catálogo del cliente</h2>
              <div class="pagebadge" id="pageBadge">Página 1 / 1</div>
            </section>
            <section class="list" id="productList"></section>
            <div class="empty" id="emptyState">No encontramos productos con ese filtro.</div>
            <div class="pager">
              <button id="prevBtn" type="button">← Anterior</button>
              <button id="nextBtn" type="button">Siguiente →</button>
            </div>
          </main>
          <aside class="side">
            <div class="sheet-head">
              <div>
                <div style="font-size:10px;color:var(--muted);font-weight:800">Resumen del pedido</div>
                <div style="font-size:16px;font-weight:900">Captura rápida</div>
              </div>
            </div>
            <div class="sheet-body" id="desktopBody"></div>
          </aside>
        </div>
      </div>
      <div class="bar">
        <div class="bar-inner">
          <div>
            <small id="barCount">0 productos seleccionados</small>
            <strong id="barPieces">0 piezas</strong>
          </div>
          <button id="openSheetBtn" type="button">Ver pedido</button>
        </div>
      </div>
      <div class="sheet-backdrop" id="sheetBackdrop"></div>
      <div class="sheet" id="sheet">
        <div class="sheet-head">
          <div>
            <div style="font-size:10px;color:var(--muted);font-weight:800">Resumen del pedido</div>
            <div style="font-size:16px;font-weight:900">Captura rápida</div>
          </div>
          <button class="close" id="closeSheetBtn" type="button">×</button>
        </div>
        <div class="sheet-body" id="mobileBody"></div>
      </div>
    `;
  }

  function renderCategoryChips() {
    const wrap = document.getElementById('categoryChips');
    const selectedClass = state.selectedOnly ? 'active' : '';
    wrap.innerHTML = [`<button class="chip ${!state.activeCategory ? 'active' : ''}" data-category="">Todas</button>`]
      .concat(categories.map(cat => `<button class="chip ${normalize(cat)===normalize(state.activeCategory) ? 'active' : ''}" data-category="${esc(cat)}">${esc(cat)}</button>`))
      .join('');
    wrap.querySelectorAll('.chip').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeCategory = btn.dataset.category || '';
        state.page = 1;
        renderCategoryChips();
        renderProducts();
      });
    });
    const selectedBtn = document.getElementById('selectedBtn');
    selectedBtn.classList.toggle('primary', state.selectedOnly);
  }

  function renderProducts() {
    const rows = filteredProducts();
    const totalPages = Math.max(1, Math.ceil(rows.length / currentPageSize()));
    if (state.page > totalPages) state.page = totalPages;
    const start = (state.page - 1) * currentPageSize();
    const visible = rows.slice(start, start + currentPageSize());

    const pageBadge = document.getElementById('pageBadge');
    const resultTitle = document.getElementById('resultTitle');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const empty = document.getElementById('emptyState');
    const list = document.getElementById('productList');

    pageBadge.textContent = `Página ${state.page} / ${totalPages} · ${rows.length} artículo(s)`;
    resultTitle.textContent = state.activeCategory ? `Catálogo · ${state.activeCategory}` : 'Catálogo del cliente';
    prevBtn.disabled = state.page <= 1;
    nextBtn.disabled = state.page >= totalPages;

    if (!visible.length) {
      list.innerHTML = '';
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    list.innerHTML = visible.map(p => {
      const qty = Number(state.quantities[p.code] || 0);
      return `
        <article class="product ${qty > 0 ? 'has-qty' : ''}">
          <div class="thumb"><img src="${esc(p.img || placeholderFor(p.code))}" alt="${esc(p.name)}" loading="lazy"></div>
          <div class="info">
            <div class="topline">
              <div style="min-width:0">
                <div class="code">${esc(p.code)}</div>
                <div class="name">${esc(p.name)}</div>
              </div>
              <div class="tagwrap">
                ${p.badge ? `<span class="tag badge">${esc(p.badge)}</span>` : ''}
                <span class="tag">${p.has_img ? 'Catálogo' : 'Demo'}</span>
              </div>
            </div>
            <div class="meta">
              <span>${esc(p.category)}</span>
              <span>Histórico: ${Math.round(p.qty6m)} pzas</span>
            </div>
            <div class="bottom">
              <div class="pieces-label">Selecciona número de piezas</div>
              <div class="qty">
                <button type="button" aria-label="Quitar pieza" data-action="minus" data-code="${esc(p.code)}">−</button>
                <input class="qty-input" type="number" min="0" step="1" inputmode="numeric" value="${qty}" data-input-code="${esc(p.code)}" aria-label="Piezas"/>
                <button type="button" aria-label="Agregar pieza" data-action="plus" data-code="${esc(p.code)}">+</button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    list.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', () => changeQty(btn.dataset.code, btn.dataset.action === 'plus' ? 1 : -1));
    });
    list.querySelectorAll('input[data-input-code]').forEach(input => {
      input.addEventListener('focus', () => input.select());
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^\d]/g, '');
      });
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          commitQtyInput(input.dataset.inputCode, input.value);
          input.blur();
        }
      });
      input.addEventListener('change', () => commitQtyInput(input.dataset.inputCode, input.value));
      input.addEventListener('blur', () => commitQtyInput(input.dataset.inputCode, input.value));
    });
  }

  function bindSummaryInputs(target) {
    const map = [
      ['clientName', 'clientName'],
      ['clientCode', 'clientCode'],
      ['seller', 'seller'],
      ['payment', 'payment'],
      ['notes', 'notes']
    ];
    map.forEach(([id, key]) => {
      const el = target.querySelector('#' + id);
      if (!el) return;
      el.addEventListener('input', () => {
        state[key] = el.value;
        saveState();
      });
      el.addEventListener('change', () => {
        state[key] = el.value;
        saveState();
      });
    });
    target.querySelector('#downloadBtn')?.addEventListener('click', downloadOrder);
    target.querySelector('#resetOrderBtn')?.addEventListener('click', clearAll);
  }

  function buildSummaryHTML() {
    const items = cartItems();
    const pieces = totalPieces();
    const productsCount = totalProductsSelected();
    const rows = items.length ? items.map(item => `
      <div class="line-item">
        <div>
          <div class="lname">${esc(item.name)}</div>
          <div class="lcode">${esc(item.code)}</div>
        </div>
        <div class="lqty">${item.qty}</div>
      </div>
    `).join('') : `<div style="color:var(--muted);font-weight:800">Aún no agregas productos al pedido.</div>`;

    return `
      <div class="order-card">
        <div class="summary-brand">
          <img class="logo" src="${LOGO}" alt="Toyo Foods">
          <div class="txt">
            <div>Toyo Foods</div>
            <div>Resumen ejecutivo del pedido</div>
          </div>
        </div>
        <div class="order-grid">
          <div class="field full">
            <label>Cliente</label>
            <textarea id="clientName" class="wrapfix" style="min-height:52px">${esc(state.clientName)}</textarea>
          </div>
          <div class="field">
            <label>Código cliente</label>
            <input id="clientCode" value="${esc(state.clientCode)}"/>
          </div>
          <div class="field">
            <label>Vendedor</label>
            <input id="seller" value="${esc(state.seller)}"/>
          </div>
          <div class="field full">
            <label>Forma de pago</label>
            <select id="payment">
              <option ${state.payment === 'Crédito' ? 'selected' : ''}>Crédito</option>
              <option ${state.payment === 'Contado' ? 'selected' : ''}>Contado</option>
              <option ${state.payment === 'Transferencia' ? 'selected' : ''}>Transferencia</option>
            </select>
          </div>
        </div>
        <div class="statusline">
          <span class="statuspill">Productos: <strong>${productsCount}</strong></span>
          <span class="statuspill">Piezas: <strong>${pieces}</strong></span>
        </div>
      </div>
      <div class="order-card">
        <div style="font-size:12px;font-weight:900;margin-bottom:8px;color:#38517a">Productos seleccionados</div>
        <div class="line-list">${rows}</div>
      </div>
      <div class="order-card">
        <div class="field full">
          <label>Comentarios</label>
          <textarea id="notes" placeholder="Ej. favor de confirmar disponibilidad, mandar en siguiente ruta, etc." style="min-height:54px">${esc(state.notes)}</textarea>
        </div>
      </div>
      <div class="totalbox">
        <div class="totalrow"><span>Total productos</span><strong>${productsCount}</strong></div>
        <div class="totalrow"><span>Total piezas</span><strong>${pieces}</strong></div>
        <div class="actions-row">
          <button class="ghostbtn" id="resetOrderBtn" type="button">Vaciar pedido</button>
          <button class="actionbtn" id="downloadBtn" type="button">Descargar pedido</button>
        </div>
      </div>
    `;
  }

  function renderSummary() {
    const mobileBody = document.getElementById('mobileBody');
    const desktopBody = document.getElementById('desktopBody');
    mobileBody.innerHTML = buildSummaryHTML();
    desktopBody.innerHTML = buildSummaryHTML();
    bindSummaryInputs(mobileBody);
    bindSummaryInputs(desktopBody);
    document.getElementById('barPieces').textContent = `${totalPieces()} piezas`;
    document.getElementById('barCount').textContent = `${totalProductsSelected()} productos seleccionados`;
  }

  function changeQty(code, delta) {
    state.quantities[code] = Math.max(0, Number(state.quantities[code] || 0) + delta);
    saveState();
    renderProducts();
    renderSummary();
  }

  function commitQtyInput(code, rawValue) {
    const clean = String(rawValue ?? '').replace(/[^\d]/g, '');
    const value = clean === '' ? 0 : Number(clean);
    state.quantities[code] = Number.isFinite(value) ? Math.max(0, value) : 0;
    saveState();
    renderProducts();
    renderSummary();
  }

  function clearAll() {
    Object.keys(state.quantities).forEach(code => state.quantities[code] = 0);
    state.notes = '';
    saveState();
    renderProducts();
    renderSummary();
  }

  function openSheet() {
    if (!totalProductsSelected()) {
      renderSummary();
    }
    document.getElementById('sheet').classList.add('open');
    document.getElementById('sheetBackdrop').classList.add('open');
  }
  function closeSheet() {
    document.getElementById('sheet').classList.remove('open');
    document.getElementById('sheetBackdrop').classList.remove('open');
  }

  function summaryField(id, fallback) {
    const el = document.querySelector('#desktopBody #' + id) || document.querySelector('#mobileBody #' + id);
    return el ? el.value : fallback;
  }

  function generateDownloadHTML() {
    const items = cartItems();
    const now = new Date();
    const fileDate = now.toISOString().slice(0, 10);
    const prettyDate = now.toLocaleString('es-MX');
    const clientName = summaryField('clientName', APP_DATA.client_name || '');
    const clientCode = summaryField('clientCode', APP_DATA.client_code || '');
    const seller = summaryField('seller', APP_DATA.vendor_label || '');
    const payment = summaryField('payment', APP_DATA.payment_default || 'Crédito');
    const notes = summaryField('notes', '');
    const rows = items.length ? items.map(item => `
      <tr>
        <td>${esc(item.code)}</td>
        <td class="desc">${esc(item.name)}</td>
        <td style="text-align:center">${item.qty}</td>
      </tr>
    `).join('') : `<tr><td colspan="3" style="text-align:center;color:#667085;padding:22px 16px">No se seleccionaron productos.</td></tr>`;

    return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<title>Pedido_${esc(clientCode)}_${fileDate}</title>
<style>
*{box-sizing:border-box}
body{margin:0;padding:28px;background:#f5f7fb;color:#0f172a;font-family:Arial,Helvetica,sans-serif}
.page{max-width:960px;margin:0 auto;background:#fff;border:1px solid #e5eaf2;border-radius:24px;overflow:hidden;box-shadow:0 12px 32px rgba(15,23,42,.08)}
.head{padding:24px 28px;background:linear-gradient(135deg,#0b4aa2,#0d61d6);color:#fff}
.brand{display:flex;align-items:center;gap:14px}
.brand img{width:68px;height:68px;border-radius:18px;background:#fff;padding:6px;object-fit:contain}
.brand-copy{min-width:0}
.eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.82;font-weight:700}
h1{margin:8px 0 4px;font-size:32px;line-height:1}
.sub{margin:0;font-size:14px;opacity:.92}
.meta{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;padding:24px 28px 8px}
.box{background:#f7f9fc;border:1px solid #e7edf6;border-radius:16px;padding:14px 16px;min-width:0}
.box .k{font-size:12px;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:.04em}
.box .v{margin-top:6px;font-size:15px;font-weight:800;line-height:1.3;overflow-wrap:anywhere;word-break:break-word}
.content{padding:8px 28px 28px}
table{width:100%;border-collapse:collapse;margin-top:18px}
thead th{background:#f8fafc;color:#334155;font-size:12px;text-transform:uppercase;letter-spacing:.05em;padding:14px 12px;border-bottom:1px solid #e5e7eb;text-align:left}
tbody td{padding:14px 12px;border-bottom:1px solid #eef2f7;font-size:14px;vertical-align:top}
tbody tr:nth-child(even){background:#fcfdff}
.desc{overflow-wrap:anywhere;word-break:break-word}
.summary{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:18px}
.sum{background:#0f172a;color:#fff;border-radius:18px;padding:16px 18px}
.sum .k{font-size:12px;opacity:.72;text-transform:uppercase;letter-spacing:.05em}
.sum .v{margin-top:8px;font-size:28px;font-weight:900}
.notes{margin-top:18px;background:#f7f9fc;border:1px solid #e7edf6;border-radius:18px;padding:16px}
.notes .title{font-size:13px;font-weight:900;color:#38517a;margin-bottom:8px}
.notes .text{overflow-wrap:anywhere;word-break:break-word;line-height:1.5}
.foot{padding:0 28px 28px;color:#64748b;font-size:12px;line-height:1.5}
@media print { body{padding:0;background:#fff} .page{border:0;border-radius:0;box-shadow:none} }
</style>
</head>
<body>
<div class="page">
  <div class="head">
    <div class="brand">
      <img src="${LOGO}" alt="Toyo Foods">
      <div class="brand-copy">
        <div class="eyebrow">Toyo Foods</div>
        <h1>Pedido digital</h1>
        <p class="sub">Documento generado el ${prettyDate}</p>
      </div>
    </div>
  </div>
  <div class="meta">
    <div class="box"><div class="k">Cliente</div><div class="v">${esc(clientName)}</div></div>
    <div class="box"><div class="k">Código cliente</div><div class="v">${esc(clientCode)}</div></div>
    <div class="box"><div class="k">Vendedor</div><div class="v">${esc(seller)}</div></div>
    <div class="box"><div class="k">Forma de pago</div><div class="v">${esc(payment)}</div></div>
  </div>
  <div class="content">
    <table>
      <thead><tr><th>Código</th><th>Descripción</th><th>Piezas</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="summary">
      <div class="sum"><div class="k">Productos</div><div class="v">${items.length}</div></div>
      <div class="sum"><div class="k">Piezas</div><div class="v">${items.reduce((a,b) => a + b.qty, 0)}</div></div>
    </div>
    <div class="notes">
      <div class="title">Comentarios</div>
      <div class="text">${esc(notes || 'Sin comentarios')}</div>
    </div>
  </div>
  <div class="foot">Este archivo fue generado desde el formato digital de pedidos de Toyo Foods.</div>
</div>
</body>
</html>`;
  }

  function downloadOrder() {
    const html = generateDownloadHTML();
    const clientCode = summaryField('clientCode', APP_DATA.client_code || 'cliente');
    const blob = new Blob([html], {type: 'text/html;charset=utf-8'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `pedido_${clientCode}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1200);
  }

  buildAppChrome();
  renderCategoryChips();
  renderProducts();
  renderSummary();
  applyViewMode(state.viewMode);

  document.getElementById('searchInput').addEventListener('input', e => {
    state.query = e.target.value || '';
    state.page = 1;
    renderProducts();
  });
  document.getElementById('selectedBtn').addEventListener('click', () => {
    state.selectedOnly = !state.selectedOnly;
    state.page = 1;
    renderCategoryChips();
    renderProducts();
  });
  document.getElementById('clearBtn').addEventListener('click', clearAll);
  document.getElementById('viewToggleBtn').addEventListener('click', () => applyViewMode(state.viewMode === 'web' ? 'mobile' : 'web'));
  document.getElementById('prevBtn').addEventListener('click', () => {
    state.page = Math.max(1, state.page - 1);
    renderProducts();
  });
  document.getElementById('nextBtn').addEventListener('click', () => {
    const totalPages = Math.max(1, Math.ceil(filteredProducts().length / currentPageSize()));
    state.page = Math.min(totalPages, state.page + 1);
    renderProducts();
  });
  document.getElementById('openSheetBtn').addEventListener('click', openSheet);
  document.getElementById('closeSheetBtn').addEventListener('click', closeSheet);
  document.getElementById('sheetBackdrop').addEventListener('click', closeSheet);
})();

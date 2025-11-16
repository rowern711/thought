const papers = [
  {
    id: 'phil-01',
    category: 'Philosophy',
    title: 'Ethics of Memory: Recollection as Moral Practice',
    author: 'Dr. Eloise Nkrumah',
    date: 'Spring 2023',
    abstract: 'Reframes communal remembrance as an ethical discipline that shapes civic virtues.',
    content: `Recollection is not merely an archival skill; it is the cultivation of attentiveness toward those who came before us. Drawing on Augustine, Hannah Arendt, and the Akan concept of sankofa, this paper argues for a politics of remembering that resists amnesia in public life.\n\nPractices such as liturgical calendars, civic commemorations, and neighborhood storytelling become laboratories for moral imagination.`,
    citations: ['Nkrumah, E. (2023). Ethics of Memory. Pillars Press.', 'Arendt, H. (1958). The Human Condition.'],
    tags: ['Ethics', 'Civic Virtue', 'Memory'],
    pdf: '#',
    featured: true
  },
  {
    id: 'phil-02',
    category: 'Philosophy',
    title: 'Postmodern Realism and the Public Square',
    author: 'Prof. Mateo Rivera',
    date: 'Winter 2022',
    abstract: 'Explores truth-telling and epistemic humility amid pluralistic democracies.',
    content: `The essay challenges the notion that postmodern critique evacuates truth claims from the public square. Instead it proposes a chastened realism that receives testimony across traditions while maintaining shared accountability. Case studies from community organizing demonstrate how epistemic humility can resource local politics.`,
    citations: ['Rivera, M. (2022). Postmodern Realism. Public Reason Journal.'],
    tags: ['Epistemology', 'Pluralism'],
    pdf: '#',
    featured: false
  },
  {
    id: 'theo-01',
    category: 'Theology',
    title: 'Liturgies of Repair: Theology after Extraction',
    author: 'Rev. Sareen Abdo',
    date: 'Summer 2023',
    abstract: 'Articulates a sacramental imagination attentive to ecological reparations.',
    content: `Resource extraction disorders our loves. Liturgies of repair gather communities around tables of shared hunger and repentance. The paper traces Syriac Christian laments, West African soil rituals, and contemporary restorative economics as converging witnesses.`,
    citations: ['Abdo, S. (2023). Liturgies of Repair. Journal of Practical Theology.'],
    tags: ['Ecology', 'Sacrament'],
    pdf: '#',
    featured: true
  },
  {
    id: 'theo-02',
    category: 'Theology',
    title: 'Trinitarian Hospitality in Migrant Chaplaincy',
    author: 'Dr. Maricel Ocampo',
    date: 'Autumn 2021',
    abstract: 'Presents pastoral care frameworks for diasporic communities.',
    content: `Drawing on the Cappadocian tradition, Ocampo articulates a theology of mutual indwelling as a model for migrant chaplaincy. Qualitative interviews from Manila, Doha, and Rome demonstrate the need for shared pastoral authority and multilingual liturgies.`,
    citations: ['Ocampo, M. (2021). Trinitarian Hospitality. Global Pastoral Review.'],
    tags: ['Hospitality', 'Migration'],
    pdf: '#',
    featured: false
  },
  {
    id: 'hist-01',
    category: 'History',
    title: 'Archives of Resistance in the Indian Ocean World',
    author: 'Dr. Julian Mbeki',
    date: '2024',
    abstract: 'A microhistory of overlooked abolitionist correspondences.',
    content: `This study reassembles letters between Swahili merchants, Malagasy sailors, and British officers during the 1840s. The texts reveal shadow networks of sanctuary that unsettled imperial trade routes. Digital humanities methods help visualize these alliances for contemporary activists.`,
    citations: ['Mbeki, J. (2024). Archives of Resistance. Oceanic Histories 12(2).'],
    tags: ['Abolition', 'Indian Ocean'],
    pdf: '#',
    featured: true
  },
  {
    id: 'hist-02',
    category: 'History',
    title: 'Kitchen Tables and Constitutions',
    author: 'Sybille Cho',
    date: '2019',
    abstract: 'Examines domestic political salons hosted by women in Seoul, Accra, and Toronto.',
    content: `Household gatherings served as informal parliaments shaping constitutional imagination. By attending to diaries, recipes, and meeting minutes, Cho recovers the textures of political friendship that influenced formal charters.`,
    citations: ['Cho, S. (2019). Kitchen Tables and Constitutions. Urban History Quarterly.'],
    tags: ['Gender', 'Civic Life'],
    pdf: '#',
    featured: false
  },
  {
    id: 'pol-01',
    category: 'Politics',
    title: 'Deliberation in the Shadow of Platforms',
    author: 'Imani Arboleda',
    date: '2022',
    abstract: 'Considers the moral hazards of algorithmic moderation and offers policy sketches.',
    content: `The essay analyzes emerging legislative proposals in Nairobi, Brussels, and Montevideo that attempt to slow virality and incentivize dialogic deliberation. It proposes "civic slow lanes" co-managed by libraries and civil society groups.`,
    citations: ['Arboleda, I. (2022). Deliberation in the Shadow of Platforms. Civic Futures Review.'],
    tags: ['Policy', 'Technology'],
    pdf: '#',
    featured: true
  },
  {
    id: 'pol-02',
    category: 'Politics',
    title: 'Federalism as Neighborliness',
    author: 'Prof. Theo Markham',
    date: '2020',
    abstract: 'Interprets subsidiarity through the lens of mutual aid traditions.',
    content: `Federalism is often framed in constitutional abstractions. Markham invites a politics of neighborliness that attends to parish credit unions, cooperative farms, and tribal councils that practice subsidiarity on the ground.`,
    citations: ['Markham, T. (2020). Federalism as Neighborliness. Journal of Political Theology.'],
    tags: ['Subsidiarity', 'Mutual Aid'],
    pdf: '#',
    featured: false
  }
];

const blogPosts = [
  {
    id: 'blog-01',
    title: 'Why Every City Needs a Philosophy Night',
    author: 'Naomi Frigg',
    date: 'April 4, 2024',
    excerpt: 'Neighborhood salons can become democratic nerve centers when snacks and serious questions collide.',
    category: 'Philosophy'
  },
  {
    id: 'blog-02',
    title: 'Listening for Theology in Protest Chants',
    author: 'Br. Charles Ndugu',
    date: 'May 11, 2024',
    excerpt: 'Street liturgies carry doctrines on their backs—if we have the ears to hear.',
    category: 'Theology'
  },
  {
    id: 'blog-03',
    title: 'The Micro-histories Hidden in Ledgers',
    author: 'Dr. Lila Morrison',
    date: 'June 2, 2024',
    excerpt: 'Account books can act as diaries of longing and resistance in colonial archives.',
    category: 'History'
  },
  {
    id: 'blog-04',
    title: 'Tea with the City Clerk: A Practical Politics of Hospitality',
    author: 'Thomas Ibarra',
    date: 'July 18, 2024',
    excerpt: 'Hospitality is a slow political technology that keeps civic trust from evaporating.',
    category: 'Politics'
  }
];

const dom = {
  featured: document.getElementById('featured-papers'),
  bookshelf: document.getElementById('bookshelf'),
  blogGrid: document.getElementById('blog-grid'),
  searchInput: document.getElementById('search-input'),
  categoryFilter: document.getElementById('category-filter'),
  tagFilter: document.getElementById('tag-filter'),
  modal: document.getElementById('paper-modal'),
  modalTitle: document.getElementById('paper-title'),
  modalMeta: document.getElementById('paper-meta'),
  modalTags: document.getElementById('paper-tags'),
  modalContent: document.getElementById('paper-content'),
  modalCitations: document.getElementById('paper-citations'),
  modalDownload: document.getElementById('paper-download'),
  modalCloseButtons: document.querySelectorAll('.close-modal'),
  related: document.getElementById('related-papers'),
  commentList: document.getElementById('comment-list'),
  commentForm: document.getElementById('comment-form'),
  commentInput: document.getElementById('comment-input'),
  saveButton: document.getElementById('save-paper'),
  listSelector: document.getElementById('list-selector'),
  addToList: document.getElementById('add-to-list'),
  accountPanel: document.getElementById('account-panel'),
  openAccount: document.getElementById('open-account'),
  registrationForm: document.getElementById('registration-form'),
  savedList: document.getElementById('saved-papers'),
  listForm: document.getElementById('list-form'),
  listCollection: document.getElementById('list-collection')
};

document.getElementById('year').textContent = new Date().getFullYear();

const state = {
  currentPaper: null,
  saved: JSON.parse(localStorage.getItem('pot-saved')) || [],
  lists: JSON.parse(localStorage.getItem('pot-lists')) || {},
  comments: JSON.parse(localStorage.getItem('pot-comments')) || {},
  blogComments: JSON.parse(localStorage.getItem('pot-blog-comments')) || {},
  user: JSON.parse(localStorage.getItem('pot-user')) || null
};

const categories = [...new Set(papers.map(paper => paper.category))];
categories.forEach(category => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  dom.categoryFilter.append(option);
});

function renderFeatured() {
  dom.featured.innerHTML = '';
  papers
    .filter(paper => paper.featured)
    .forEach(paper => {
      dom.featured.appendChild(createBookCard(paper, 'featured'));
    });
}

function groupByCategory(items) {
  const map = new Map();
  items.forEach(item => {
    const collection = map.get(item.category) || [];
    collection.push(item);
    map.set(item.category, collection);
  });
  return map;
}

function renderBookshelf(list) {
  dom.bookshelf.innerHTML = '';
  const grouped = groupByCategory(list);
  grouped.forEach((papersInCategory, category) => {
    const section = document.createElement('section');
    section.className = 'category-shelf';
    section.innerHTML = `<h3>${category}</h3>`;
    const grid = document.createElement('div');
    grid.className = 'shelf-grid';
    papersInCategory.forEach(paper => grid.appendChild(createBookCard(paper)));
    section.appendChild(grid);
    dom.bookshelf.appendChild(section);
  });
  if (!list.length) {
    dom.bookshelf.innerHTML = '<p>No papers match your search just yet. Try another term or broaden the filters.</p>';
  }
}

function createBookCard(paper, variant = 'default') {
  const card = document.createElement('article');
  card.className = 'book-card';
  card.dataset.paperId = paper.id;
  card.innerHTML = `
    <span class="spine"></span>
    <div class="badge">${paper.category}</div>
    <h3>${paper.title}</h3>
    <p><strong>${paper.author}</strong></p>
    <p>${paper.abstract}</p>
    <small>${paper.date}</small>
  `;
  card.addEventListener('click', () => openPaper(paper.id));
  return card;
}

function renderBlog() {
  dom.blogGrid.innerHTML = '';
  blogPosts.forEach(post => {
    const card = document.createElement('article');
    card.className = 'blog-card';
    const shareUrl = encodeURIComponent(window.location.href + '#blog');
    card.innerHTML = `
      <div class="badge">${post.category}</div>
      <h3>${post.title}</h3>
      <p class="blog-meta">${post.author} • ${post.date}</p>
      <p>${post.excerpt}</p>
      <button class="secondary-btn" data-share="${shareUrl}">Share</button>
      <div class="blog-comments">
        <h4>Comments</h4>
        <div class="blog-comment-list" data-blog="${post.id}"></div>
        <form class="blog-comment-form" data-blog="${post.id}">
          <textarea rows="2" placeholder="Add your reflection" required></textarea>
          <button type="submit" class="ghost-btn">Post</button>
        </form>
      </div>
    `;
    dom.blogGrid.appendChild(card);
  });
}

function openPaper(id) {
  const paper = papers.find(item => item.id === id);
  if (!paper) return;
  state.currentPaper = paper.id;
  dom.modalTitle.textContent = paper.title;
  dom.modalMeta.textContent = `${paper.author} • ${paper.date}`;
  dom.modalTags.innerHTML = paper.tags.map(tag => `<span>${tag}</span>`).join('');
  dom.modalContent.textContent = paper.content;
  dom.modalContent.classList.remove('flip');
  requestAnimationFrame(() => dom.modalContent.classList.add('flip'));
  dom.modalCitations.innerHTML = `<strong>Citations:</strong> <ul>${paper.citations.map(c => `<li>${c}</li>`).join('')}</ul>`;
  dom.modalDownload.href = paper.pdf;
  dom.saveButton.textContent = state.saved.includes(paper.id) ? 'Saved to Library' : 'Save to Library';
  renderRelated(paper);
  renderComments(paper.id);
  refreshListSelector();
  dom.modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
  modal.setAttribute('aria-hidden', 'true');
}

dom.modalCloseButtons.forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    [dom.modal, dom.accountPanel].forEach(modal => modal.setAttribute('aria-hidden', 'true'));
  }
});

dom.modal.addEventListener('click', event => {
  if (event.target === dom.modal) closeModal(dom.modal);
});

dom.accountPanel.addEventListener('click', event => {
  if (event.target === dom.accountPanel) closeModal(dom.accountPanel);
});

dom.searchInput.addEventListener('input', filterPapers);
dom.categoryFilter.addEventListener('change', filterPapers);
dom.tagFilter.addEventListener('input', filterPapers);

function filterPapers() {
  const query = dom.searchInput.value.toLowerCase();
  const category = dom.categoryFilter.value;
  const tagQuery = dom.tagFilter.value.toLowerCase();
  const filtered = papers.filter(paper => {
    const matchesCategory = category === 'all' || paper.category === category;
    const matchesQuery = [paper.title, paper.author, paper.abstract].some(text =>
      text.toLowerCase().includes(query)
    );
    const matchesTag = !tagQuery || paper.tags.some(tag => tag.toLowerCase().includes(tagQuery));
    return matchesCategory && matchesQuery && matchesTag;
  });
  renderBookshelf(filtered);
}

function renderRelated(paper) {
  const related = papers.filter(item => item.id !== paper.id && (item.category === paper.category || item.tags.some(tag => paper.tags.includes(tag)))).slice(0, 4);
  if (!related.length) {
    dom.related.innerHTML = '<p>No related papers just yet.</p>';
    return;
  }
  const container = document.createElement('div');
  container.className = 'related-list';
  related.forEach(item => {
    const card = document.createElement('button');
    card.className = 'related-card';
    card.innerHTML = `<strong>${item.title}</strong><br><small>${item.author}</small>`;
    card.addEventListener('click', () => openPaper(item.id));
    container.appendChild(card);
  });
  dom.related.innerHTML = '<h4>Related Reading</h4>';
  dom.related.appendChild(container);
}

function renderComments(paperId) {
  const paperComments = state.comments[paperId] || [];
  dom.commentList.innerHTML = paperComments
    .map(comment => `<div class="comment-card"><p>${comment.text}</p><small>${new Date(comment.date).toLocaleString()}</small></div>`)
    .join('');
  if (!paperComments.length) {
    dom.commentList.innerHTML = '<p>No comments yet. Offer the first annotation.</p>';
  }
}

dom.commentForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!state.currentPaper) return;
  const comment = dom.commentInput.value.trim();
  if (!comment) return;
  const paperComments = state.comments[state.currentPaper] || [];
  paperComments.push({ text: comment, date: new Date().toISOString() });
  state.comments[state.currentPaper] = paperComments;
  localStorage.setItem('pot-comments', JSON.stringify(state.comments));
  dom.commentInput.value = '';
  renderComments(state.currentPaper);
});

function refreshSaved() {
  dom.savedList.innerHTML = '';
  if (!state.saved.length) {
    dom.savedList.innerHTML = '<li>No papers saved yet.</li>';
    return;
  }
  state.saved.forEach(id => {
    const paper = papers.find(item => item.id === id);
    if (!paper) return;
    const li = document.createElement('li');
    li.textContent = `${paper.title} (${paper.category})`;
    dom.savedList.appendChild(li);
  });
}

dom.saveButton.addEventListener('click', () => {
  if (!state.currentPaper) return;
  if (!state.saved.includes(state.currentPaper)) {
    state.saved.push(state.currentPaper);
    localStorage.setItem('pot-saved', JSON.stringify(state.saved));
    dom.saveButton.textContent = 'Saved to Library';
    refreshSaved();
  }
});

function refreshListSelector() {
  dom.listSelector.innerHTML = '<option value="">Select Research List</option>';
  Object.keys(state.lists).forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = `${name} (${state.lists[name].length})`;
    dom.listSelector.appendChild(option);
  });
}

dom.addToList.addEventListener('click', () => {
  if (!state.currentPaper) return;
  const listName = dom.listSelector.value;
  if (!listName) {
    alert('Create or select a research list first.');
    return;
  }
  const list = state.lists[listName] || [];
  if (!list.includes(state.currentPaper)) {
    list.push(state.currentPaper);
    state.lists[listName] = list;
    localStorage.setItem('pot-lists', JSON.stringify(state.lists));
    refreshListSelector();
    renderListCollection();
  }
});

dom.listForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('list-name').value.trim();
  if (!name) return;
  if (!state.lists[name]) {
    state.lists[name] = [];
    localStorage.setItem('pot-lists', JSON.stringify(state.lists));
    document.getElementById('list-name').value = '';
    refreshListSelector();
    renderListCollection();
  }
});

function renderListCollection() {
  dom.listCollection.innerHTML = '';
  if (!Object.keys(state.lists).length) {
    dom.listCollection.innerHTML = '<p>No lists yet. Curate one to organize your research.</p>';
    return;
  }
  Object.entries(state.lists).forEach(([name, ids]) => {
    const wrapper = document.createElement('details');
    wrapper.className = 'list-pill';
    wrapper.innerHTML = `<summary>${name} (${ids.length})</summary>`;
    const ul = document.createElement('ul');
    ids.forEach(id => {
      const paper = papers.find(item => item.id === id);
      if (!paper) return;
      const li = document.createElement('li');
      li.textContent = `${paper.title} — ${paper.author}`;
      ul.appendChild(li);
    });
    wrapper.appendChild(ul);
    dom.listCollection.appendChild(wrapper);
  });
}

function renderBlogComments() {
  document.querySelectorAll('.blog-comment-list').forEach(list => {
    const blogId = list.dataset.blog;
    const comments = state.blogComments[blogId] || [];
    list.innerHTML = comments
      .map(comment => `<div class="comment-card"><p>${comment.text}</p><small>${new Date(comment.date).toLocaleDateString()}</small></div>`)
      .join('');
    if (!comments.length) {
      list.innerHTML = '<p>No reflections yet.</p>';
    }
  });
}

function attachBlogListeners() {
  dom.blogGrid.addEventListener('click', event => {
    if (event.target.matches('button[data-share]')) {
      const shareText = `Reading from Pillars of Thought: ${event.target.closest('.blog-card').querySelector('h3').textContent}`;
      const shareData = {
        title: 'Pillars of Thought',
        text: shareText,
        url: window.location.href
      };
      if (navigator.share) {
        navigator.share(shareData).catch(() => {});
      } else {
        navigator.clipboard.writeText(`${shareText} ${window.location.href}`).then(() => {
          event.target.textContent = 'Link Copied!';
          setTimeout(() => (event.target.textContent = 'Share'), 1500);
        });
      }
    }
  });

  dom.blogGrid.addEventListener('submit', event => {
    if (event.target.matches('.blog-comment-form')) {
      event.preventDefault();
      const textarea = event.target.querySelector('textarea');
      const text = textarea.value.trim();
      if (!text) return;
      const blogId = event.target.dataset.blog;
      const comments = state.blogComments[blogId] || [];
      comments.push({ text, date: new Date().toISOString() });
      state.blogComments[blogId] = comments;
      localStorage.setItem('pot-blog-comments', JSON.stringify(state.blogComments));
      textarea.value = '';
      renderBlogComments();
    }
  });
}

dom.openAccount.addEventListener('click', () => {
  dom.accountPanel.setAttribute('aria-hidden', 'false');
  refreshSaved();
  renderListCollection();
});

dom.registrationForm.addEventListener('submit', event => {
  event.preventDefault();
  const user = {
    name: document.getElementById('reg-name').value,
    email: document.getElementById('reg-email').value,
    password: document.getElementById('reg-password').value
  };
  state.user = user;
  localStorage.setItem('pot-user', JSON.stringify(user));
  dom.registrationForm.reset();
  alert(`Welcome, ${user.name}. Your desk is ready.`);
});

renderFeatured();
renderBookshelf(papers);
renderBlog();
renderBlogComments();
attachBlogListeners();
refreshSaved();
refreshListSelector();
renderListCollection();
filterPapers();

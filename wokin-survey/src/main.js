import { supabase } from './supabase.js'

const forms = [
  {
    id: 'teen', label: 'Gen Z', range: '10–19', sub: 'For teens & students',
    ageOpts: Array.from({length:10},(_,i)=>10+i),
    questions: [
      { id:'q1', text:'How often do you eat out or order food in a week?', opts:['Rarely','1–2 times','3–4 times','Every day'] },
      { id:'q2', text:'What type of food do you crave the most?', opts:['Chinese','Indian','Indo-Chinese','Fast food','South Indian'] },
      { id:'q3', text:'Where do you usually eat or order from?', opts:['Zomato / Swiggy','Food court','Street food','Restaurant','Food truck'], motiveBefore:"You're doing great! Just a few more — promise they're easy." },
      { id:'q4', text:'What\'s your usual budget for a meal?', opts:['Under ₹100','₹100–₹200','₹200–₹350','Above ₹350'] },
      { id:'q5', text:'How spicy do you like your food?', opts:['Mild','Medium','Spicy','Extra spicy'] },
      { id:'q6', text:'What\'s most important when choosing a food place?', opts:['Taste','Price','Speed','Vibe / ambience','Hygiene'], motiveBefore:'Halfway there! You\'re helping shape a real food brand.' },
      { id:'q7', text:'Would you try a food truck serving Indian-style wok dishes?', opts:['Definitely yes','Maybe','Probably not','No'] },
      { id:'q8', text:'Do you prefer veg or non-veg in Indo-Chinese food?', opts:['Always veg','Mostly veg','Mostly non-veg','Both equally'] },
      { id:'q9', text:'Which existing brand do you compare this concept to?', opts:['Wow Momo','Faasos','KFC / McDonald\'s','Local Chinese stall','None, totally new'], motiveBefore:'2 more to go — you\'re almost a WOK IN founding member!' },
      { id:'q10', text:'Would you follow a food brand on Instagram for deals?', opts:['Yes, definitely','If the content is good','Only for discounts','No'] },
      { id:'q11', text:'Any dish you\'d love to see on our menu?', type:'text', optional:true }
    ]
  },
  {
    id: 'young', label: 'Young Adults', range: '20–28', sub: 'For college & early career',
    ageOpts: Array.from({length:9},(_,i)=>20+i),
    questions: [
      { id:'q1', text:'What\'s your current situation?', opts:['College student','Working professional','Freelancer','Job seeking'] },
      { id:'q2', text:'How often do you eat outside in a week?', opts:['1–2 times','3–4 times','5+ times','Daily'] },
      { id:'q3', text:'What do you look for most in a quick lunch?', opts:['Fast delivery','Value for money','Taste & quality','Healthy options','Variety'], motiveBefore:'Nice! 3 questions in — you\'re already helping shape something delicious.' },
      { id:'q4', text:'How much do you spend on a weekday lunch?', opts:['Under ₹150','₹150–₹250','₹250–₹400','Above ₹400'] },
      { id:'q5', text:'Have you tried Indo-Chinese food before?', opts:['Yes, love it','Yes, it\'s okay','Rarely','Never tried'] },
      { id:'q6', text:'What currently disappoints you about existing food brands?', opts:['Too pricey','Inconsistent taste','Small portions','Boring menu','Slow service'], motiveBefore:'Halfway! Just 5 more and your taste becomes our recipe.' },
      { id:'q7', text:'Rate your excitement for a fresh Indian-spiced wok brand (1–5)', type:'rating' },
      { id:'q8', text:'Would a loyalty rewards program make you come back more often?', opts:['Yes, definitely','Depends on rewards','I use them rarely','No'] },
      { id:'q9', text:'Which meal do you prefer from a food truck?', opts:['Breakfast','Lunch','Evening snack','Dinner'], motiveBefore:'2 more! You\'re basically on the founding panel of WOK IN now.' },
      { id:'q10', text:'Which platform do you use most for food discovery?', opts:['Instagram','Zomato / Swiggy','YouTube / Reels','Word of mouth'] },
      { id:'q11', text:'Any suggestion for WOK IN to stand out?', type:'text', optional:true }
    ]
  },
  {
    id: 'pro', label: 'Professionals', range: '29–38', sub: 'For working professionals',
    ageOpts: Array.from({length:10},(_,i)=>29+i),
    questions: [
      { id:'q1', text:'How many days a week do you eat lunch outside?', opts:['1–2 days','3–4 days','Almost every day','I bring my own'] },
      { id:'q2', text:'What\'s your biggest frustration with existing quick lunch options?', opts:['Long wait times','Overpriced','Unhealthy options','Same boring menu','Poor hygiene'] },
      { id:'q3', text:'What\'s your comfortable spending for a full office lunch?', opts:['₹150–₹200','₹200–₹300','₹300–₹450','Above ₹450'], motiveBefore:'Only 8 more to go — your feedback shapes where we set up next!' },
      { id:'q4', text:'How important is a healthy meal at lunch? (1 = not at all, 5 = very)', type:'rating' },
      { id:'q5', text:'Would you visit a food truck at your IT park during lunch hours?', opts:['Yes, regularly','Occasionally','If food looks good','Unlikely'] },
      { id:'q6', text:'Do you prefer portioned bowl-style meals or traditional plate meals?', opts:['Bowl style','Traditional plate','Wraps / rolls','Doesn\'t matter'], motiveBefore:'More than halfway! Your answers are gold for us.' },
      { id:'q7', text:'How do you typically discover new food places?', opts:['Colleague recommendation','Zomato / Swiggy','Instagram / Reels','Walking past it'] },
      { id:'q8', text:'Which protein do you prefer in an Indo-Chinese dish?', opts:['Chicken','Paneer','Egg','Mixed / both','Tofu'] },
      { id:'q9', text:'Would a pre-order / quick pickup option make you choose us over others?', opts:['Absolutely yes','Would be nice','Doesn\'t matter','No'], motiveBefore:'Last 2 questions — you\'ve basically co-built WOK IN with us!' },
      { id:'q10', text:'What would make WOK IN your first choice over Wow Momo or Fassos?', opts:['Better taste','Better price','Faster service','Unique menu','Clean & hygienic'] },
      { id:'q11', text:'Any other feedback or suggestion?', type:'text', optional:true }
    ]
  },
  {
    id: 'adult', label: 'Adults', range: '39–45', sub: 'For experienced food lovers',
    ageOpts: Array.from({length:7},(_,i)=>39+i),
    questions: [
      { id:'q1', text:'How often do you eat outside in a typical week?', opts:['Rarely','1–2 times','3–4 times','Daily'] },
      { id:'q2', text:'What food category do you mostly prefer when eating out?', opts:['Indian','Chinese / Indo-Chinese','South Indian','Continental','Mixed'] },
      { id:'q3', text:'How health-conscious are you when choosing a meal? (1–5)', type:'rating', motiveBefore:'Just 8 more — your food lover experience is exactly what we need!' },
      { id:'q4', text:'What\'s your acceptable spend for a satisfying meal?', opts:['₹200–₹300','₹300–₹450','₹450–₹600','Above ₹600'] },
      { id:'q5', text:'Do you typically eat out alone or with others?', opts:['Alone','With colleagues','With family','Varies'] },
      { id:'q6', text:'How important is hygiene when choosing a food outlet? (1–5)', type:'rating', motiveBefore:'Halfway done — your perspective as an experienced foodie matters a lot.' },
      { id:'q7', text:'What would make you trust a new food brand immediately?', opts:['Good reviews online','Clean, visible kitchen','Friend\'s recommendation','Professional branding','Free sample'] },
      { id:'q8', text:'Would you bring your family or team to an Indo-Chinese food truck?', opts:['Yes, definitely','Maybe, if kids enjoy it','For team lunch, yes','Probably not'] },
      { id:'q9', text:'What\'s missing in fast-casual Chinese food in India?', opts:['Authentic flavour','Better pricing','Consistent quality','Indian spice integration','Wider variety'], motiveBefore:'Almost there — 2 final questions and you\'re done!' },
      { id:'q10', text:'How likely are you to try WOK IN at your workplace? (1–5)', type:'rating' },
      { id:'q11', text:'What one thing would make WOK IN your regular lunch spot?', type:'text', optional:true }
    ]
  }
]

let currentPage = 'landing'
let currentFormIdx = 0
let answers = {}
let submitted = false
let adminData = []
let adminFilter = 'all'

// ── FULL RE-RENDER ON EVERY STATE CHANGE ─────────────────────────────────────

function render() {
  document.getElementById('app').innerHTML = renderNav() + `
    <div id="page-landing" class="page ${currentPage==='landing'?'active':''}">${renderLanding()}</div>
    <div id="page-survey" class="page ${currentPage==='survey'?'active':''}">${renderSurvey()}</div>
    <div id="page-admin" class="page ${currentPage==='admin'?'active':''}">${renderAdmin()}</div>
  `
  if (currentPage === 'admin') loadAdminData()
}

function renderNav() {
  return `<nav>
    <a class="nav-logo" href="#" onclick="navigate('landing');return false;">
      <div class="nav-logo-circle">W</div>
      <span class="nav-brand">WOK IN</span>
    </a>
    <div class="nav-links">
      <button class="${currentPage==='survey'?'active':''}" onclick="navigate('survey')">Take Survey</button>
      <button class="${currentPage==='admin'?'active':''}" onclick="navigate('admin')">Admin</button>
    </div>
  </nav>`
}

function renderLanding() {
  return `
  <div class="hero">
    <div class="hero-logo">W</div>
    <h1>WOK IN</h1>
    <p>Indian spices. Chinese wok. One bold brand.</p>
    <div class="hero-tagline">Where Chinese meets Indian spices</div><br>
    <button class="hero-btn" onclick="navigate('survey')">Share Your Taste →</button>
  </div>
  <div class="features">
    <div class="feature-card"><div class="feature-icon">🥢</div><h3>2 Minutes</h3><p>Quick, fun survey designed for your age group</p></div>
    <div class="feature-card"><div class="feature-icon">🌶️</div><h3>Shape the Menu</h3><p>Your answers directly influence our dishes and locations</p></div>
    <div class="feature-card"><div class="feature-icon">🏆</div><h3>Be a Founder</h3><p>Early responders get exclusive launch discounts</p></div>
    <div class="feature-card"><div class="feature-icon">📍</div><h3>IT Park First</h3><p>Starting at your workplace — lunch will never be boring again</p></div>
  </div>`
}

function renderSurvey() {
  if (submitted) {
    return `<div class="survey-wrap"><div class="thank-you">
      <div class="ty-check">✓</div>
      <h2>Thank you!</h2>
      <p>Your feedback helps WOK IN serve you better.<br>You're officially part of our founding community.</p><br>
      <button class="submit-btn" style="max-width:300px;margin:1rem auto 0" onclick="resetSurvey()">Submit Another Response</button>
    </div></div>`
  }

  const form = forms[currentFormIdx]
  const totalQ = form.questions.filter(q => !q.optional).length + 2
  const answered = countAnswered()
  const pct = Math.round((answered / totalQ) * 100)

  let qs = ''
  form.questions.forEach((q, i) => {
    if (q.motiveBefore) {
      qs += `<div class="motivator"><div class="mot-dot">★</div><p>${q.motiveBefore}</p></div>`
    }
    qs += `<div class="q-card">
      <div class="q-label">${q.optional ? 'Optional' : `Q${i+1}`}</div>
      <div class="q-text">${q.text}</div>`

    if (q.type === 'text') {
      qs += `<textarea onchange="setAnswer('${q.id}',this.value)" placeholder="Type here...">${answers[q.id]||''}</textarea>`
    } else if (q.type === 'rating') {
      qs += `<div class="rating-wrap">`
      for (let r = 1; r <= 5; r++) {
        const sel = answers[q.id] === r ? 'sel' : ''
        qs += `<button class="r-btn ${sel}" onclick="setAnswer('${q.id}',${r})">${r}</button>`
      }
      qs += `</div>`
    } else {
      qs += `<div class="q-grid">`
      q.opts.forEach(opt => {
        const sel = answers[q.id] === opt ? 'sel' : ''
        const safe = opt.replace(/'/g, '&#39;')
        qs += `<button class="q-opt ${sel}" onclick="setAnswer('${q.id}','${safe}')">${opt}</button>`
      })
      qs += `</div>`
    }
    qs += `</div>`
  })

  return `<div class="survey-wrap">
    <div class="age-tabs">
      ${forms.map((f,i) => `
        <button class="age-tab ${i===currentFormIdx?'active':''}" onclick="switchForm(${i})">
          ${f.label}<span class="tab-range">${f.range}</span>
        </button>`).join('')}
    </div>
    <div class="form-header">
      <div class="form-header-icon">W</div>
      <div><h2>WOK IN Survey</h2><p>${form.sub} · Takes 2 mins</p></div>
    </div>
    <div class="progress-wrap">
      <div class="progress-info"><span>Progress</span><span>${answered} / ${totalQ} answered</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="q-card">
      <div class="q-label">Basic Info</div>
      <div class="q-text">Tell us a little about yourself</div>
      <div class="two-col">
        <div class="field-group"><label>Age</label>
          <select onchange="setAnswer('age',parseInt(this.value))">
            <option value="">Select age</option>
            ${form.ageOpts.map(a=>`<option value="${a}" ${answers.age==a?'selected':''}>${a}</option>`).join('')}
          </select>
        </div>
        <div class="field-group"><label>Gender</label>
          <select onchange="setAnswer('gender',this.value)">
            <option value="">Select gender</option>
            ${['Male','Female','Non-binary','Prefer not to say'].map(g=>`<option ${answers.gender===g?'selected':''}>${g}</option>`).join('')}
          </select>
        </div>
      </div>
    </div>
    ${qs}
    <button class="submit-btn" id="submit-btn" onclick="submitForm()">Submit My Answers →</button>
  </div>`
}

function renderAdmin() {
  const filtered = adminFilter==='all' ? adminData : adminData.filter(r=>r.form_version===adminFilter)
  const counts = {teen:0,young:0,pro:0,adult:0}
  adminData.forEach(r=>{if(counts[r.form_version]!==undefined)counts[r.form_version]++})
  const groupLabel = {teen:'Gen Z',young:'Young Adults',pro:'Professionals',adult:'Adults'}
  const badgeClass = {teen:'badge-teen',young:'badge-young',pro:'badge-pro',adult:'badge-adult'}

  const tableHTML = !filtered.length
    ? `<div class="empty-state">No responses yet. Share the survey link to collect data!</div>`
    : `<div class="responses-table-wrap"><table class="responses-table">
        <thead><tr><th>#</th><th>Date</th><th>Group</th><th>Age</th><th>Gender</th>
        <th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>Q5</th>
        <th>Q6</th><th>Q7</th><th>Q8</th><th>Q9</th><th>Q10</th><th>Comment</th></tr></thead>
        <tbody>${filtered.map((r,i)=>`<tr>
          <td>${i+1}</td>
          <td>${new Date(r.created_at).toLocaleDateString('en-IN')}</td>
          <td><span class="badge ${badgeClass[r.form_version]||''}">${groupLabel[r.form_version]||r.form_version}</span></td>
          <td>${r.age||'—'}</td><td>${r.gender||'—'}</td>
          <td>${r.q1||'—'}</td><td>${r.q2||'—'}</td><td>${r.q3||'—'}</td>
          <td>${r.q4||'—'}</td><td>${r.q5||'—'}</td><td>${r.q6||'—'}</td>
          <td>${r.q7||'—'}</td><td>${r.q8||'—'}</td><td>${r.q9||'—'}</td>
          <td>${r.q10||'—'}</td><td>${r.q11||'—'}</td>
        </tr>`).join('')}</tbody>
      </table></div>`

  return `<div class="admin-wrap">
    <div class="admin-header">
      <div><h2>Survey Responses</h2><p>All WOK IN survey submissions</p></div>
      <button class="refresh-btn" onclick="loadAdminData()">Refresh</button>
    </div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-label">Total responses</div><div class="stat-value">${adminData.length}</div></div>
      <div class="stat-card"><div class="stat-label">Gen Z (10–19)</div><div class="stat-value">${counts.teen}</div></div>
      <div class="stat-card"><div class="stat-label">Young Adults (20–28)</div><div class="stat-value">${counts.young}</div></div>
      <div class="stat-card"><div class="stat-label">Professionals (29–38)</div><div class="stat-value">${counts.pro}</div></div>
      <div class="stat-card"><div class="stat-label">Adults (39–45)</div><div class="stat-value">${counts.adult}</div></div>
    </div>
    <div class="filter-row">
      ${[['all','All'],['teen','Gen Z'],['young','Young Adults'],['pro','Professionals'],['adult','Adults']].map(([v,l])=>
        `<button class="filter-btn ${adminFilter===v?'active':''}" onclick="filterAdmin('${v}')">${l}</button>`
      ).join('')}
    </div>
    ${tableHTML}
  </div>`
}

// ── HELPERS ───────────────────────────────────────────────────────────────────

function countAnswered() {
  let n = 0
  if (answers.age) n++
  if (answers.gender) n++
  forms[currentFormIdx].questions.filter(q=>!q.optional).forEach(q=>{
    if (answers[q.id] !== undefined && answers[q.id] !== '') n++
  })
  return n
}

// ── GLOBAL HANDLERS ───────────────────────────────────────────────────────────

window.navigate = function(page) {
  currentPage = page
  window.scrollTo(0,0)
  render()
}

window.switchForm = function(i) {
  currentFormIdx = i
  answers = {}
  render()
}

window.setAnswer = function(id, val) {
  answers[id] = val
  // Full re-render so sel classes are always in sync with state
  const scrollY = window.scrollY
  render()
  window.scrollTo(0, scrollY)
}

window.resetSurvey = function() {
  submitted = false
  answers = {}
  render()
}

window.filterAdmin = function(f) {
  adminFilter = f
  render()
}

window.submitForm = async function() {
  const form = forms[currentFormIdx]
  const required = form.questions.filter(q=>!q.optional)
  const missing = required.filter(q=>answers[q.id]===undefined||answers[q.id]==='')
  if (!answers.age || !answers.gender) { alert('Please fill in your age and gender.'); return }
  if (missing.length > 0) { alert(`Please answer all questions. ${missing.length} remaining.`); return }

  const btn = document.getElementById('submit-btn')
  if (btn) { btn.disabled = true; btn.textContent = 'Submitting...' }

  const { error } = await supabase.from('survey_responses').insert([{
    form_version: form.id,
    age: answers.age, gender: answers.gender,
    q1: answers.q1||'', q2: answers.q2||'', q3: answers.q3||'',
    q4: answers.q4||'', q5: answers.q5||'', q6: answers.q6||'',
    q7: String(answers.q7||''), q8: String(answers.q8||''),
    q9: answers.q9||'', q10: String(answers.q10||''), q11: answers.q11||''
  }])

  if (error) {
    alert('Error: ' + error.message)
    if (btn) { btn.disabled=false; btn.textContent='Submit My Answers →' }
    return
  }
  submitted = true
  render()
  window.scrollTo(0,0)
}

window.loadAdminData = async function() {
  const { data, error } = await supabase.from('survey_responses').select('*').order('created_at',{ascending:false})
  if (!error) { adminData = data||[]; render() }
}

render()

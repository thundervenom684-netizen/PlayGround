const categories = [
  { id: 'ancient', icon: '⌂', tone: 'saffron', title: 'Ancient & medieval', desc: 'Dynasties, ideas & empires', eyebrow: 'OLD SOUL, BIG STORIES' },
  { id: 'freedom', icon: '✊', tone: 'green', title: 'Freedom movement', desc: 'The long road to independence', eyebrow: 'THE ROAD TO 1947' },
  { id: 'modern', icon: '◉', tone: 'blue', title: 'India, made modern', desc: 'A republic takes shape', eyebrow: 'A NATION IN THE MAKING' },
  { id: 'current', icon: '⌁', tone: 'plum', title: 'Current affairs', desc: 'Big moments, recent years', eyebrow: 'INDIA RIGHT NOW' },
  { id: 'mixed', icon: '✳', tone: 'gold', title: 'A bit of everything', desc: 'A surprise tour of India', eyebrow: 'THE GRAND TOUR' }
];

// Facts in the current affairs set are anchored to their stated years so they remain useful over time.
const bank = {
  ancient: [
    { q: 'Which ancient Indian city is famous for its carefully planned grid and advanced drainage?', options: ['Harappa', 'Pataliputra', 'Madurai', 'Taxila'], answer: 0, era: 'INDUS VALLEY CIVILIZATION', why: 'Harappa was one of the major urban centres of the Indus Valley Civilization, known for planned streets and drainage.' },
    { q: 'Who is traditionally credited with writing the Arthashastra?', options: ['Kalidasa', 'Chanakya (Kautilya)', 'Banabhatta', 'Panini'], answer: 1, era: 'MAURYAN INDIA', why: 'The Arthashastra, a treatise on statecraft, is traditionally attributed to Kautilya, also known as Chanakya.' },
    { q: 'Which Mauryan emperor embraced Dhamma after the Kalinga War?', options: ['Bindusara', 'Chandragupta Maurya', 'Ashoka', 'Samudragupta'], answer: 2, era: 'MAURYAN INDIA', why: 'Ashoka’s edicts describe the remorse he felt after the Kalinga War and his turn toward Dhamma.' },
    { q: 'The Iron Pillar near Delhi is especially celebrated for its resistance to what?', options: ['Heat', 'Corrosion', 'Earthquakes', 'Flooding'], answer: 1, era: 'GUPTA PERIOD', why: 'The pillar, associated with the Gupta period, is renowned for its remarkable resistance to corrosion.' },
    { q: 'Which classical Sanskrit poet wrote the play Abhijnanashakuntalam?', options: ['Kalidasa', 'Bhasa', 'Tulsidas', 'Bhavabhuti'], answer: 0, era: 'CLASSICAL INDIA', why: 'Kalidasa composed the celebrated Sanskrit drama Abhijnanashakuntalam.' },
    { q: 'Nalanda, one of the ancient world’s great centres of learning, was in present-day which state?', options: ['Gujarat', 'Bihar', 'Odisha', 'Karnataka'], answer: 1, era: 'ANCIENT INDIA', why: 'The remains of Nalanda Mahavihara are in Bihar, near the modern town of Rajgir.' },
    { q: 'Which Chola ruler built the Brihadisvara Temple at Thanjavur?', options: ['Rajendra I', 'Rajaraja I', 'Kulottunga I', 'Vijayalaya'], answer: 1, era: 'CHOLA EMPIRE', why: 'Rajaraja Chola I commissioned the great Brihadisvara Temple, completed in the early 11th century.' },
    { q: 'The Qutub Minar was begun by which ruler?', options: ['Iltutmish', 'Alauddin Khalji', 'Qutb-ud-din Aibak', 'Balban'], answer: 2, era: 'DELHI SULTANATE', why: 'Qutb-ud-din Aibak began construction; his successor Iltutmish completed much of the tower.' },
    { q: 'Which Mughal emperor commissioned the Taj Mahal?', options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'], answer: 2, era: 'MUGHAL INDIA', why: 'Shah Jahan commissioned the Taj Mahal in memory of Mumtaz Mahal.' },
    { q: 'The Vijayanagara Empire’s capital ruins are now part of which UNESCO World Heritage Site?', options: ['Hampi', 'Sanchi', 'Konark', 'Khajuraho'], answer: 0, era: 'SOUTHERN INDIA', why: 'Hampi in Karnataka preserves the monumental remains of Vijayanagara, a major south Indian empire.' }
  ],
  freedom: [
    { q: 'In which year was the Indian National Congress founded?', options: ['1857', '1885', '1905', '1919'], answer: 1, era: 'THE NATIONAL MOVEMENT', why: 'The Indian National Congress was founded in 1885, with its first session held in Bombay.' },
    { q: 'Who led the 1930 Salt March from Sabarmati to Dandi?', options: ['Jawaharlal Nehru', 'Sardar Patel', 'Mahatma Gandhi', 'Subhas Chandra Bose'], answer: 2, era: 'CIVIL DISOBEDIENCE', why: 'Gandhi led the 240-mile Salt March in protest against British salt laws.' },
    { q: 'The Jallianwala Bagh massacre took place in which city?', options: ['Lahore', 'Amritsar', 'Delhi', 'Lucknow'], answer: 1, era: 'A TURNING POINT • 1919', why: 'British troops fired on a gathering at Jallianwala Bagh in Amritsar on 13 April 1919.' },
    { q: 'Who gave the call “Give me blood, and I shall give you freedom”?', options: ['Bhagat Singh', 'Lala Lajpat Rai', 'Subhas Chandra Bose', 'Bal Gangadhar Tilak'], answer: 2, era: 'AZAD HIND', why: 'Subhas Chandra Bose made this famous call while rallying support for the Indian National Army.' },
    { q: 'The “Do or Die” call is associated with which movement?', options: ['Swadeshi Movement', 'Quit India Movement', 'Khilafat Movement', 'Non-Cooperation Movement'], answer: 1, era: 'QUIT INDIA • 1942', why: 'Gandhi gave the “Do or Die” call at the launch of the Quit India Movement in August 1942.' },
    { q: 'Who was the first woman president of the Indian National Congress?', options: ['Sarojini Naidu', 'Annie Besant', 'Kamaladevi Chattopadhyay', 'Vijaya Lakshmi Pandit'], answer: 1, era: 'THE NATIONAL MOVEMENT', why: 'Annie Besant became the first woman president of the Congress in 1917. Sarojini Naidu was the first Indian woman to hold the role.' },
    { q: 'The Kakori train action of 1925 was carried out by revolutionaries of which organisation?', options: ['Hindustan Republican Association', 'Ghadar Party', 'Anushilan Samiti', 'Azad Hind Fauj'], answer: 0, era: 'REVOLUTIONARY INDIA', why: 'Members of the Hindustan Republican Association carried out the Kakori action to fund their work.' },
    { q: 'Who founded the Indian National Army (INA) in its first form in 1942?', options: ['Rash Behari Bose', 'Mohan Singh', 'Subhas Chandra Bose', 'Bhagat Singh'], answer: 1, era: 'AZAD HIND', why: 'Captain Mohan Singh organised the INA in 1942; Subhas Chandra Bose later reorganised and led it.' },
    { q: 'Which leader was popularly known as “Punjab Kesari”?', options: ['Bipin Chandra Pal', 'Lala Lajpat Rai', 'Gopal Krishna Gokhale', 'Madan Mohan Malaviya'], answer: 1, era: 'THE NATIONAL MOVEMENT', why: 'Lala Lajpat Rai was widely known as Punjab Kesari, or the Lion of Punjab.' },
    { q: 'India became independent on which date?', options: ['26 January 1950', '15 August 1947', '9 August 1942', '2 October 1947'], answer: 1, era: 'INDEPENDENCE • 1947', why: 'India became independent at midnight leading into 15 August 1947.' }
  ],
  modern: [
    { q: 'On what date did the Constitution of India come into effect?', options: ['15 August 1947', '26 November 1949', '26 January 1950', '2 October 1950'], answer: 2, era: 'THE REPUBLIC', why: 'The Constitution came into force on 26 January 1950, celebrated each year as Republic Day.' },
    { q: 'Who chaired the Drafting Committee of the Indian Constitution?', options: ['Rajendra Prasad', 'B. R. Ambedkar', 'Jawaharlal Nehru', 'Vallabhbhai Patel'], answer: 1, era: 'THE CONSTITUTION', why: 'Dr B. R. Ambedkar chaired the Constitution’s Drafting Committee.' },
    { q: 'Who was the first President of the Republic of India?', options: ['Sarvepalli Radhakrishnan', 'Rajendra Prasad', 'V. V. Giri', 'Zakir Husain'], answer: 1, era: 'THE REPUBLIC', why: 'Dr Rajendra Prasad served as India’s first President, from 1950 to 1962.' },
    { q: 'Which was the first state formed on a linguistic basis after independence?', options: ['Andhra State', 'Kerala', 'Gujarat', 'Maharashtra'], answer: 0, era: 'STATES REORGANISED', why: 'Andhra State was created in 1953 for Telugu-speaking areas, before the wider 1956 reorganisation.' },
    { q: 'India’s Green Revolution is most closely associated with which crop?', options: ['Cotton', 'Wheat', 'Tea', 'Jute'], answer: 1, era: 'AGRICULTURAL CHANGE', why: 'High-yielding wheat varieties and improved farming practices helped drive the Green Revolution in India.' },
    { q: 'Who was the first Indian citizen to travel to space?', options: ['Kalpana Chawla', 'Rakesh Sharma', 'Ravish Malhotra', 'Sunita Williams'], answer: 1, era: 'INDIA IN SPACE', why: 'Rakesh Sharma flew aboard the Soviet Soyuz T-11 mission in 1984.' },
    { q: 'In which year did India conduct its first nuclear tests at Pokhran?', options: ['1962', '1974', '1988', '1998'], answer: 1, era: 'A TURNING POINT', why: 'India conducted its first nuclear test, code-named Smiling Buddha, in 1974.' },
    { q: 'Which movement led to the creation of Bangladesh in 1971?', options: ['The Indo-China War', 'The Bangladesh Liberation War', 'The Kargil conflict', 'The Goa liberation movement'], answer: 1, era: 'SOUTH ASIA • 1971', why: 'The 1971 Bangladesh Liberation War ended with the creation of Bangladesh.' },
    { q: 'Which Indian institution is responsible for conducting national elections?', options: ['Union Public Service Commission', 'Election Commission of India', 'NITI Aayog', 'Supreme Court of India'], answer: 1, era: 'INDIA’S DEMOCRACY', why: 'The Election Commission of India is the constitutional body that administers elections.' },
    { q: 'Which Indian mission made a soft landing near the Moon’s south polar region in 2023?', options: ['Chandrayaan-1', 'Mangalyaan', 'Chandrayaan-3', 'Aditya-L1'], answer: 2, era: 'INDIA IN SPACE • 2023', why: 'Chandrayaan-3’s Vikram lander touched down on 23 August 2023.' }
  ],
  current: [
    { q: 'Which city hosted the 2023 G20 Leaders’ Summit in India?', options: ['Mumbai', 'New Delhi', 'Bengaluru', 'Jaipur'], answer: 1, era: 'DIPLOMACY • 2023', why: 'The G20 Leaders’ Summit took place in New Delhi on 9–10 September 2023.' },
    { q: 'What was the name of India’s solar observatory mission launched in 2023?', options: ['Aditya-L1', 'Surya-1', 'Vikram-S', 'Mangalyaan-2'], answer: 0, era: 'SPACE • 2023', why: 'ISRO launched Aditya-L1 in September 2023 to study the Sun from a halo orbit around the L1 point.' },
    { q: 'In 2024, which Indian athlete won silver in men’s javelin at the Paris Olympics?', options: ['Kishore Jena', 'Neeraj Chopra', 'Avinash Sable', 'Murali Sreeshankar'], answer: 1, era: 'SPORT • PARIS 2024', why: 'Neeraj Chopra won silver at Paris 2024, becoming the first Indian track-and-field athlete with two Olympic medals.' },
    { q: 'Which Indian shooter won two medals at the Paris 2024 Olympics?', options: ['Manu Bhaker', 'Sarabjot Singh', 'Swapnil Kusale', 'Elavenil Valarivan'], answer: 0, era: 'SPORT • PARIS 2024', why: 'Manu Bhaker won bronze in the women’s 10m air pistol and the mixed team event.' },
    { q: 'Which Indian film won the Grand Prix at the 2024 Cannes Film Festival?', options: ['All We Imagine as Light', 'Laapataa Ladies', 'The Shameless', 'Santosh'], answer: 0, era: 'CULTURE • 2024', why: 'Payal Kapadia’s All We Imagine as Light won the Grand Prix at Cannes in 2024.' },
    { q: 'In 2024, India’s first underwater metro service opened in which city?', options: ['Chennai', 'Kolkata', 'Kochi', 'Mumbai'], answer: 1, era: 'INFRASTRUCTURE • 2024', why: 'Kolkata Metro opened a tunnel beneath the Hooghly River as part of India’s first underwater metro service.' },
    { q: 'Which Indian chess grandmaster became the youngest world champion in 2024?', options: ['R. Praggnanandhaa', 'Arjun Erigaisi', 'D. Gukesh', 'Vidit Gujrathi'], answer: 2, era: 'SPORT • 2024', why: 'D. Gukesh won the World Chess Championship in December 2024 at age 18.' },
    { q: 'The 2024 Nobel Prize in Literature was awarded to which Indian-born author?', options: ['Salman Rushdie', 'Arundhati Roy', 'No Indian-born author won it', 'Amitav Ghosh'], answer: 2, era: 'CULTURE • 2024', why: 'The 2024 Literature Nobel went to South Korean author Han Kang, not an Indian-born writer.' },
    { q: 'Which Indian space mission entered orbit around the Sun–Earth L1 point in January 2024?', options: ['Chandrayaan-3', 'Aditya-L1', 'XPoSat', 'INSAT-3DS'], answer: 1, era: 'SPACE • 2024', why: 'Aditya-L1 entered its targeted halo orbit on 6 January 2024.' },
    { q: 'In 2023, UNESCO added which Indian dance form to its Intangible Cultural Heritage list?', options: ['Garba', 'Bhangra', 'Lavani', 'Ghoomar'], answer: 0, era: 'CULTURE • 2023', why: 'Garba of Gujarat was inscribed on UNESCO’s Intangible Cultural Heritage list in December 2023.' }
  ]
};

const $ = (selector) => document.querySelector(selector);
const screens = ['homeScreen', 'categoryScreen', 'gameScreen', 'resultScreen'];
const letters = ['A', 'B', 'C', 'D'];
let round = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let bestRoundStreak = 0;
let answered = false;
let chosenCategory = 'mixed';
let selectedAnswer = null;
let soundOn = false;
let audioContext = null;
let bestStreak = Number(localStorage.getItem('indiaQuizBestStreak') || 0);
$('#topStreak').textContent = bestStreak;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function showScreen(id) {
  screens.forEach((screen) => {
    const element = document.getElementById(screen);
    const active = screen === id;
    element.classList.toggle('active', active);
    element.hidden = !active;
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderCategories() {
  $('#categoryGrid').innerHTML = categories.map((item) => `
    <button class="category-card" data-category="${item.id}">
      <span class="category-icon tone-${item.tone}">${item.icon}</span>
      <h3>${item.title}</h3><p>${item.desc}</p><span class="category-arrow">↗</span>
    </button>`).join('');
  $('#categoryGrid').querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => startRound(button.dataset.category));
  });
}
function startRound(categoryId) {
  chosenCategory = categoryId;
  const category = categories.find((item) => item.id === categoryId);
  const source = categoryId === 'mixed' ? Object.values(bank).flat() : bank[categoryId];
  round = shuffle(source).slice(0, 10).map((question) => {
    const choices = question.options.map((text, index) => ({ text, correct: index === question.answer }));
    return { ...question, choices: shuffle(choices) };
  });
  currentIndex = 0;
  score = 0;
  streak = 0;
  bestRoundStreak = 0;
  $('#roundCategory').textContent = category.eyebrow;
  $('#liveScore').textContent = '0';
  $('#streakLabel').textContent = '✦ 0 in a row';
  showScreen('gameScreen');
  renderQuestion();
}
function renderQuestion() {
  const question = round[currentIndex];
  answered = false;
  selectedAnswer = null;
  const number = currentIndex + 1;
  $('#questionNumber').textContent = String(number).padStart(2, '0');
  $('#progressPercent').textContent = `${number * 10}%`;
  $('#progressFill').style.width = `${number * 10}%`;
  $('#questionEra').textContent = question.era;
  $('#questionText').textContent = question.q;
  $('#feedback').textContent = '';
  $('#feedback').className = 'feedback';
  $('#nextButton').disabled = true;
  $('#nextButton').classList.remove('ready');
  $('#nextLabel').textContent = 'Choose an answer';
  $('#answers').innerHTML = question.choices.map((choice, index) => `
    <button class="answer-option" data-answer="${index}" aria-label="${letters[index]}. ${choice.text}">
      <span class="answer-key">${letters[index]}</span><span>${choice.text}</span>
    </button>`).join('');
  $('#answers').querySelectorAll('.answer-option').forEach((button) => {
    button.addEventListener('click', () => selectAnswer(Number(button.dataset.answer)));
  });
}
function selectAnswer(index) {
  if (answered) return;
  answered = true;
  selectedAnswer = index;
  const question = round[currentIndex];
  question.pickedIndex = index;
  const correctIndex = question.choices.findIndex((choice) => choice.correct);
  const right = index === correctIndex;
  const buttons = [...$('#answers').querySelectorAll('.answer-option')];
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === correctIndex) button.classList.add(i === index ? 'correct' : 'reveal');
    if (i === index && !right) button.classList.add('wrong');
  });
  if (right) {
    score += 10;
    streak += 1;
    bestRoundStreak = Math.max(bestRoundStreak, streak);
    $('#feedback').innerHTML = `<strong>That’s right!</strong> ${question.why}`;
    playTone(true);
  } else {
    streak = 0;
    $('#feedback').classList.add('incorrect');
    $('#feedback').innerHTML = `<strong>Not quite.</strong> ${question.why}`;
    playTone(false);
  }
  $('#liveScore').textContent = String(score);
  $('#streakLabel').textContent = `✦ ${streak} in a row`;
  if (bestRoundStreak > bestStreak) {
    bestStreak = bestRoundStreak;
    localStorage.setItem('indiaQuizBestStreak', String(bestStreak));
    $('#topStreak').textContent = bestStreak;
  }
  $('#nextButton').disabled = false;
  $('#nextButton').classList.add('ready');
  $('#nextLabel').textContent = currentIndex === round.length - 1 ? 'See your score' : 'Next question';
}
function nextQuestion() {
  if (!answered) return;
  currentIndex += 1;
  if (currentIndex >= round.length) return showResults();
  renderQuestion();
}
function showResults() {
  const correct = score / 10;
  const title = correct === 10 ? 'A true <em>India buff.</em>' : correct >= 7 ? 'Nicely done, <em>explorer.</em>' : correct >= 4 ? 'Curiosity looks <em>good on you.</em>' : 'Every story starts <em>somewhere.</em>';
  const message = correct === 10 ? 'A perfect round. India’s stories are in good hands.' : correct >= 7 ? 'You made it through the story with plenty to be proud of.' : correct >= 4 ? 'You picked up a few new chapters along the way.' : 'Now you’ve got a few new facts for the next round.';
  $('#resultTitle').innerHTML = title;
  $('#resultMessage').textContent = message;
  $('#finalScore').textContent = String(score);
  $('#correctCount').textContent = String(correct);
  $('#bestStreak').textContent = String(bestRoundStreak);
  $('#resultBadge').innerHTML = correct >= 7 ? '<span>✦</span>' : '<span>✧</span>';
  $('#reviewList').hidden = true;
  $('#reviewButton').innerHTML = 'Review answers <span>↓</span>';
  $('#reviewList').innerHTML = round.map((question, index) => {
    const picked = question.choices.find((choice, choiceIndex) => choiceIndex === answerForQuestion(index));
    const correctChoice = question.choices.find((choice) => choice.correct);
    return `<div class="review-item"><b>${index + 1}. ${question.q}</b><span>${picked?.correct ? '✓ ' : 'Your answer: '}${picked?.text || '—'}${picked?.correct ? '' : ` · Correct: ${correctChoice.text}`}</span><div class="review-result">${question.why}</div></div>`;
  }).join('');
  showScreen('resultScreen');
}
function answerForQuestion(index) {
  return round[index].pickedIndex;
}
function playTone(correct) {
  if (!soundOn) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = correct ? 660 : 240;
    gain.gain.setValueAtTime(.055, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .16);
    oscillator.connect(gain); gain.connect(audioContext.destination);
    oscillator.start(); oscillator.stop(audioContext.currentTime + .16);
  } catch (error) { /* Sound is an optional enhancement. */ }
}
$('#playButton').addEventListener('click', () => { renderCategories(); showScreen('categoryScreen'); });
document.querySelectorAll('[data-back="home"]').forEach((button) => button.addEventListener('click', () => showScreen('homeScreen')));
$('#quitButton').addEventListener('click', () => {
  if (window.confirm('Leave this round? Your progress will not be saved.')) showScreen('categoryScreen');
});
$('#nextButton').addEventListener('click', nextQuestion);
$('#playAgain').addEventListener('click', () => { renderCategories(); showScreen('categoryScreen'); });
$('#reviewButton').addEventListener('click', () => {
  const list = $('#reviewList');
  list.hidden = !list.hidden;
  $('#reviewButton').innerHTML = list.hidden ? 'Review answers <span>↓</span>' : 'Hide review <span>↑</span>';
  if (!list.hidden) list.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
$('#soundToggle').addEventListener('click', () => {
  soundOn = !soundOn;
  $('#soundToggle').classList.toggle('muted', !soundOn);
  $('#soundToggle').setAttribute('aria-label', soundOn ? 'Mute sound' : 'Turn on sound');
  $('#soundIcon').textContent = soundOn ? '♫' : '♩';
  if (soundOn) playTone(true);
});


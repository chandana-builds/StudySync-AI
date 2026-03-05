// ===== STATE MANAGEMENT =====
let userState = {
  username: '',
  schoolName: '',
  studentType: '',
  course: '',
  skillLevel: '',
  language: 'english',
  progress: 0,
  currentLesson: 0,
  currentQuestion: 0,
  quizScore: 0
};

let currentStep = 1;
let currentQuestionIndex = 0;

// ===== STUDY MATERIALS =====
function uploadMaterial() {
  try {
    const fileInput = document.getElementById('materialFile');
    const titleInput = document.getElementById('materialTitle');
    const materialsList = document.getElementById('materialsList');
    
    if (!fileInput || !titleInput || !materialsList) {
      alert('File input elements not found!');
      return;
    }
    
    if (!fileInput.files.length || !titleInput.value.trim()) {
      alert('Please select a file and enter a title.');
      return;
    }
    
    for (let i = 0; i < fileInput.files.length; i++) {
      const file = fileInput.files[i];
      const reader = new FileReader();
      reader.onload = function(e) {
        const url = e.target.result;
        const item = document.createElement('div');
        item.className = 'material-item';
        item.innerHTML = '<strong>' + titleInput.value + '</strong> <a href="' + url + '" download="' + file.name + '">Download</a>';
        materialsList.appendChild(item);
      };
      reader.readAsDataURL(file);
    }
    titleInput.value = '';
    fileInput.value = '';
    alert('✓ Materials uploaded successfully!');
  } catch (error) {
    alert('Error: ' + error.message);
  }
}

function skipUpload() {
  const fileInput = document.getElementById('materialFile');
  const titleInput = document.getElementById('materialTitle');
  if (fileInput) fileInput.value = '';
  if (titleInput) titleInput.value = '';
  alert('Upload skipped. You can continue.');
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.remove('hidden');
  }
  window.scrollTo(0, 0);
}

// ===== FORM STEPS =====
function nextStep(step) {
  if (!validateStep(currentStep)) return;
  
  document.getElementById('step' + currentStep).classList.remove('active');
  document.getElementById('step' + currentStep).classList.add('hidden');
  
  currentStep = step;
  document.getElementById('step' + step).classList.add('active');
  document.getElementById('step' + step).classList.remove('hidden');
}

function prevStep() {
  document.getElementById('step' + currentStep).classList.remove('active');
  document.getElementById('step' + currentStep).classList.add('hidden');
  
  currentStep--;
  document.getElementById('step' + currentStep).classList.add('active');
  document.getElementById('step' + currentStep).classList.remove('hidden');
}

function validateStep(step) {
  if (step === 1) {
    const username = document.getElementById('username').value.trim();
    const school = document.getElementById('schoolName').value.trim();
    const studentType = document.getElementById('studentType').value;
    
    if (!username || !school || !studentType) {
      alert('Please fill all fields in Step 1');
      return false;
    }
  } else if (step === 2) {
    const course = document.getElementById('courseSelect').value;
    const level = document.getElementById('skillLevel').value;
    if (!course || !level) {
      alert('Please select course and level');
      return false;
    }
  }
  return true;
}

function updateSubjects() {
  const studentType = document.getElementById('studentType').value;
  const courseSelect = document.getElementById('courseSelect');
  courseSelect.innerHTML = '<option value="">Select</option>';
  
  const subjects = {
    school: ['Mathematics', 'Science', 'English', 'History'],
    college: ['CSE', 'IT', 'Mechanical', 'Civil', 'Electrical']
  };
  
  if (studentType && subjects[studentType]) {
    subjects[studentType].forEach(subject => {
      const option = document.createElement('option');
      option.value = subject;
      option.textContent = subject;
      courseSelect.appendChild(option);
    });
  }
}

// ===== REGISTRATION =====
function handleRegistration(e) {
  e.preventDefault();
  
  userState.username = document.getElementById('username').value.trim();
  userState.schoolName = document.getElementById('schoolName').value.trim();
  userState.studentType = document.getElementById('studentType').value;
  userState.course = document.getElementById('courseSelect').value;
  userState.skillLevel = document.getElementById('skillLevel').value;
  userState.language = document.getElementById('language').value;
  
  localStorage.setItem('studySyncUser', JSON.stringify(userState));
  alert('✓ Welcome ' + userState.username + '!');
  currentStep = 1;
  showDashboardPage();
}

// ===== NAVIGATION =====
function showDashboardPage() {
  document.getElementById('registrationPage').classList.add('hidden');
  document.getElementById('materialsSection').classList.add('hidden');
  document.getElementById('dashboardPage').classList.remove('hidden');
  updateDashboard();
}

// ===== DASHBOARD =====
function updateDashboard() {
  document.getElementById('profileName').textContent = userState.username || 'User';
  document.getElementById('profileCourse').textContent = userState.course || 'Select Course';
  document.getElementById('dashName').textContent = userState.username || 'Student';
  document.getElementById('currentCourse').textContent = userState.course || 'Mathematics';
  document.getElementById('currentLevel').textContent = userState.skillLevel || 'Beginner';
}

function showSection(sectionId, button) {
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
    s.classList.add('hidden');
  });
  document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
  
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
    section.classList.remove('hidden');
  }
  if (button) button.classList.add('active');
}

// ===== LEARNING =====
const lessons = {
  'Mathematics': {
    'beginner': [
      { title: 'Basic Arithmetic', theory: 'Learn addition, subtraction, multiplication, and division.', video: 'https://www.youtube.com/embed/mHlJ3Sn0-qQ' },
      { title: 'Fractions', theory: 'Understand fractions and how to work with them.', video: 'https://www.youtube.com/embed/VgSHIHoBt8E' }
    ],
    'advanced': [
      { title: 'Algebra', theory: 'Introduction to algebraic expressions and equations.', video: 'https://www.youtube.com/embed/WUvTyaaNkzM' },
      { title: 'Calculus', theory: 'Basics of derivatives and integrals.', video: 'https://www.youtube.com/embed/jZr3LN5T6EU' }
    ]
  },
  'Science': {
    'beginner': [
      { title: 'Physics 101', theory: 'Motion, forces, and energy explained.', video: 'https://www.youtube.com/embed/kKKM8Y-u7ds' },
      { title: 'Chemistry Basics', theory: 'Atoms, molecules, and chemical reactions.', video: 'https://www.youtube.com/embed/E4H5s5vLh74' }
    ],
    'advanced': [
      { title: 'Thermodynamics', theory: 'Heat and energy transfer in systems.', video: 'https://www.youtube.com/embed/E_6vZSuKdBI' },
      { title: 'Quantum Mechanics', theory: 'Quantum theory at atomic level.', video: 'https://www.youtube.com/embed/YKHKsZTbUXE' }
    ]
  },
  'English': {
    'beginner': [
      { title: 'Grammar Basics', theory: 'Parts of speech and sentence structure.', video: 'https://www.youtube.com/embed/MvDkpBheznE' },
      { title: 'Vocabulary', theory: 'Learn new words and their meanings.', video: 'https://www.youtube.com/embed/EEH0Xn2yLmQ' }
    ],
    'advanced': [
      { title: 'Literature Analysis', theory: 'Study literary works and themes.', video: 'https://www.youtube.com/embed/8MH3KlmNL3k' },
      { title: 'Essay Writing', theory: 'Structure and writing effective essays.', video: 'https://www.youtube.com/embed/wRvFYvkGxwQ' }
    ]
  },
  'History': {
    'beginner': [
      { title: 'Ancient Civilizations', theory: 'Egypt, Mesopotamia, Greece, and Rome.', video: 'https://www.youtube.com/embed/pxlcKxlOJVc' },
      { title: 'Medieval Period', theory: 'Feudalism and medieval society.', video: 'https://www.youtube.com/embed/wEF89L-Q3Pk' }
    ],
    'advanced': [
      { title: 'Renaissance Era', theory: 'Art, science, and intellectual revival.', video: 'https://www.youtube.com/embed/D8T3I_G_7p4' },
      { title: 'Modern History', theory: 'Industrial revolution to modern era.', video: 'https://www.youtube.com/embed/GZHEAh7DRNU' }
    ]
  },
  'CSE': {
    'beginner': [
      { title: 'Programming Basics', theory: 'Variables, loops, and functions.', video: 'https://www.youtube.com/embed/HgA-R3-HI04' },
      { title: 'Web Development', theory: 'HTML, CSS, JavaScript basics.', video: 'https://www.youtube.com/embed/0afZj1G0BIE' }
    ],
    'advanced': [
      { title: 'Data Structures', theory: 'Arrays, lists, trees, and graphs.', video: 'https://www.youtube.com/embed/92S4zgXN17o' },
      { title: 'Databases', theory: 'SQL and database design.', video: 'https://www.youtube.com/embed/ztHopE5Wnpc' }
    ]
  },
  'IT': {
    'beginner': [
      { title: 'IT Fundamentals', theory: 'Networking and server basics.', video: 'https://www.youtube.com/embed/6QJSv6B3M3Y' },
      { title: 'Networking', theory: 'Network protocols and topologies.', video: 'https://www.youtube.com/embed/3QhU9jd03a0' }
    ],
    'advanced': [
      { title: 'Cloud Computing', theory: 'AWS, Azure, and cloud services.', video: 'https://www.youtube.com/embed/RfvL_423a-I' },
      { title: 'Cybersecurity', theory: 'Security threats and defense.', video: 'https://www.youtube.com/embed/8ZtInClXe1Q' }
    ]
  },
  'Mechanical': {
    'beginner': [
      { title: 'Engineering Basics', theory: 'Mechanics and forces.', video: 'https://www.youtube.com/embed/Fvv6tpFN0N8' },
      { title: 'CAD Basics', theory: '2D and 3D modeling.', video: 'https://www.youtube.com/embed/Rp8pnrm7E9E' }
    ],
    'advanced': [
      { title: 'Thermodynamics', theory: 'Heat engines and energy.', video: 'https://www.youtube.com/embed/Mv9NEXX90RI' },
      { title: 'Turbomachinery', theory: 'Turbines and compressors.', video: 'https://www.youtube.com/embed/OqcJKJH1P_E' }
    ]
  },
  'Civil': {
    'beginner': [
      { title: 'Structural Design', theory: 'Building structures and loads.', video: 'https://www.youtube.com/embed/rVoXCqmwBgg' },
      { title: 'Construction Methods', theory: 'Building processes and safety.', video: 'https://www.youtube.com/embed/A62qYXL9zfg' }
    ],
    'advanced': [
      { title: 'Bridge Engineering', theory: 'Bridge design and analysis.', video: 'https://www.youtube.com/embed/sYFVbAiR0eE' },
      { title: 'Water Systems', theory: 'Dams and hydraulics.', video: 'https://www.youtube.com/embed/7bawEAEJpb8' }
    ]
  },
  'Electrical': {
    'beginner': [
      { title: 'Electricity Basics', theory: 'Voltage, current, resistance.', video: 'https://www.youtube.com/embed/DovunOxlaris' },
      { title: 'Circuits', theory: 'Series, parallel, and components.', video: 'https://www.youtube.com/embed/sBzRH7AxwA4' }
    ],
    'advanced': [
      { title: 'Power Systems', theory: 'Generation and distribution.', video: 'https://www.youtube.com/embed/7J2LC0w7-QY' },
      { title: 'Renewable Energy', theory: 'Solar and wind power.', video: 'https://www.youtube.com/embed/Rf_XLQW-5dg' }
    ]
  }
};

const quizzes = {
  'Basic Arithmetic': [
    { q: 'What is 5 + 3?', options: ['7', '8', '9', '6'], correct: 1 },
    { q: 'What is 10 - 4?', options: ['5', '6', '7', '8'], correct: 1 },
    { q: 'What is 3 × 4?', options: ['10', '12', '14', '11'], correct: 1 }
  ],
  'Fractions': [
    { q: 'What is 1/2 + 1/4?', options: ['2/6', '3/4', '2/4', '1/3'], correct: 1 },
    { q: 'What is 3/4 - 1/4?', options: ['1/2', '2/4', '3/8', '1'], correct: 0 }
  ],
  'Physics 101': [
    { q: 'SI unit of speed:', options: ['km', 'm/s', 'cm/s', 'km/h'], correct: 1 },
    { q: 'Which is kinetic energy?', options: ['mgh', '½mv²', 'mg', 'kx'], correct: 1 }
  ],
  'Chemistry Basics': [
    { q: 'H₂O is:', options: ['Oxygen', 'Water', 'Hydrogen', 'Salt'], correct: 1 }
  ],
  'default': [
    { q: 'What is the capital of India?', options: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'], correct: 1 }
  ]
};

function loadLessonContent() {
  const course = userState.course;
  const level = userState.skillLevel;
  const lessonIndex = userState.currentLesson;
  
  if (!lessons[course] || !lessons[course][level]) return;
  
  const lessonArray = lessons[course][level];
  const lesson = lessonArray[lessonIndex] || lessonArray[0];
  
  document.getElementById('lessonTitle').textContent = lesson.title;
  document.getElementById('lessonTheory').textContent = lesson.theory;
  document.getElementById('lessonVideo').innerHTML = '<iframe src="' + lesson.video + '" allowfullscreen></iframe>';
}

function startQuiz() {
  const course = userState.course;
  const level = userState.skillLevel;
  const lessonIndex = userState.currentLesson;
  
  if (!lessons[course] || !lessons[course][level]) return;
  
  const lessonArray = lessons[course][level];
  const lesson = lessonArray[lessonIndex] || lessonArray[0];
  const quiz = quizzes[lesson.title] || quizzes['default'];
  
  userState.currentQuestion = 0;
  userState.quizScore = 0;
  currentQuestionIndex = 0;
  
  document.getElementById('lessonView').classList.add('hidden');
  document.getElementById('quizView').classList.remove('hidden');
  showQuestion(quiz);
}

function showQuestion(quiz) {
  if (currentQuestionIndex >= quiz.length) {
    showResults(quiz);
    return;
  }
  
  const q = quiz[currentQuestionIndex];
  document.getElementById('questionText').textContent = q.q;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  
  q.options.forEach((opt, i) => {
    const label = document.createElement('label');
    label.innerHTML = '<input type="radio" name="option" value="' + i + '"> ' + opt;
    optionsDiv.appendChild(label);
  });
}

function nextQuestion() {
  const course = userState.course;
  const level = userState.skillLevel;
  const lessonIndex = userState.currentLesson;
  const lessonArray = lessons[course][level];
  const lesson = lessonArray[lessonIndex] || lessonArray[0];
  const quiz = quizzes[lesson.title] || quizzes['default'];
  
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert('Please select an option!');
    return;
  }
  
  if (parseInt(selected.value) === quiz[currentQuestionIndex].correct) {
    userState.quizScore++;
  }
  
  currentQuestionIndex++;
  showQuestion(quiz);
}

function showResults(quiz) {
  document.getElementById('quizView').classList.add('hidden');
  document.getElementById('resultView').classList.remove('hidden');
  document.getElementById('resultMsg').textContent = 'You scored ' + userState.quizScore + ' out of ' + quiz.length;
}

function backToLessons() {
  document.getElementById('resultView').classList.add('hidden');
  document.getElementById('lessonView').classList.remove('hidden');
}

// ===== CHAT =====
function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;
  
  addChatMessage(msg, 'user');
  input.value = '';
  
  setTimeout(() => {
    const reply = generateReply(msg);
    addChatMessage(reply, 'bot');
  }, 500);
}

function addChatMessage(text, type) {
  const box = document.getElementById('chatBox');
  if (!box) return;
  
  const div = document.createElement('div');
  div.className = 'chat-message ' + type + '-msg';
  div.innerHTML = '<p>' + text + '</p>';
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function generateReply(input) {
  const lower = input.toLowerCase();
  
  if (lower.includes('hello') || lower.includes('hi')) {
    return '👋 Hello! How can I help you with your studies?';
  } else if (lower.includes('study')) {
    return '📚 Tip: Study in 50-minute blocks with 10-minute breaks!';
  } else if (lower.includes('health')) {
    return '💪 Stay hydrated and get 8 hours of sleep daily!';
  } else if (lower.includes('quiz')) {
    return '📝 Quizzes help test your knowledge!';
  } else {
    return '💬 Feel free to ask me about studies or wellness!';
  }
}

// ===== SETTINGS =====
function openSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.remove('hidden');
}

function closeSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.add('hidden');
}

function updateLanguage() {
  userState.language = document.getElementById('settingsLanguage').value;
  localStorage.setItem('studySyncUser', JSON.stringify(userState));
  alert('✓ Language updated!');
}

function logout() {
  if (confirm('Logout?')) {
    localStorage.removeItem('studySyncUser');
    userState = {
      username: '',
      schoolName: '',
      studentType: '',
      course: '',
      skillLevel: '',
      language: 'english',
      progress: 0,
      currentLesson: 0,
      currentQuestion: 0,
      quizScore: 0
    };
    currentStep = 1;
    location.reload();
  }
}

// ===== INITIALIZATION =====
window.addEventListener('load', () => {
  const saved = localStorage.getItem('studySyncUser');
  if (saved) {
    userState = JSON.parse(saved);
    showDashboardPage();
  } else {
    document.getElementById('registrationPage').classList.remove('hidden');
    document.getElementById('dashboardPage').classList.add('hidden');
  }
  
  const registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', handleRegistration);
  }
  
  const uploadBtn = document.getElementById('uploadBtn');
  if (uploadBtn) {
    uploadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      uploadMaterial();
    });
  }
  
  const skipBtn = document.getElementById('skipBtn');
  if (skipBtn) {
    skipBtn.addEventListener('click', function(e) {
      e.preventDefault();
      skipUpload();
    });
  }
  
  window.onclick = function(e) {
    const modal = document.getElementById('settingsModal');
    if (e.target === modal) closeSettings();
  };
  
  console.log('✅ StudySync loaded successfully');
});

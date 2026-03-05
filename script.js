// ===== DATA =====
const courseData = {
  school: { subjects: ['Mathematics', 'Science', 'English', 'History'] },
  college: { subjects: ['CSE', 'IT', 'Mechanical', 'Civil', 'Electrical'] }
};

const lessonsData = {
  Mathematics: {
    beginner: [
      { 
        id: 1, 
        title: 'Basic Math - Addition & Subtraction', 
        theory: 'Learn the fundamentals of mathematics including addition, subtraction, multiplication, and division with real-world examples and practice problems.',
        video: 'mHlJ3Sn0-qQ',
        videoSearch: 'https://www.youtube.com/results?search_query=basic+mathematics+addition+subtraction',
        quiz: [
          { q: '5 + 3 = ?', options: ['7', '8', '9', '6'], correct: 1 },
          { q: '10 - 4 = ?', options: ['5', '6', '7', '4'], correct: 1 },
          { q: '6 × 2 = ?', options: ['10', '12', '8', '14'], correct: 1 },
          { q: '15 ÷ 3 = ?', options: ['4', '5', '6', '3'], correct: 1 },
          { q: '8 + 7 - 3 = ?', options: ['10', '12', '14', '16'], correct: 1 }
        ] 
      },
      { 
        id: 2, 
        title: 'Algebra Basics', 
        theory: 'Introduction to algebraic expressions, variables, and simple linear equations.',
        video: 'VgSHIHoBt8E',
        videoSearch: 'https://www.youtube.com/results?search_query=algebra+basics+beginners',
        quiz: [{ q: 'If x + 5 = 12, then x = ?', options: ['5', '6', '7', '8'], correct: 2 }] 
      }
    ],
    advanced: [
      { 
        id: 3, 
        title: 'Calculus Introduction', 
        theory: 'Introduction to calculus concepts: derivatives and integrals with visualizations.',
        video: 'WUvTyaaNkzM',
        videoSearch: 'https://www.youtube.com/results?search_query=calculus+basics+introduction',
        quiz: [{ q: 'Derivative of x² is?', options: ['x', '2x', 'x³', '2x²'], correct: 1 }] 
      },
      { 
        id: 4, 
        title: 'Trigonometry', 
        theory: 'Sine, cosine, tangent and their applications in solving triangles.',
        video: '1mYIsCGV5j0',
        videoSearch: 'https://www.youtube.com/results?search_query=trigonometry+basics',
        quiz: [{ q: 'sin(0°) = ?', options: ['0', '1', '-1', '0.5'], correct: 0 }] 
      }
    ]
  },
  Science: {
    beginner: [
      { 
        id: 1, 
        title: 'Physics 101 - Motion & Forces', 
        theory: 'Overview of motion, Newton\'s laws, energy, and waves. Simple experiments and real-world applications.',
        video: 'kKKM8Y-u7ds',
        videoSearch: 'https://www.youtube.com/results?search_query=physics+motion+forces+basics',
        quiz: [
          { q: 'SI unit of speed:', options: ['km', 'm/s', 'cm/s', 'km/h'], correct: 1 },
          { q: 'Which is kinetic energy?', options: ['mgh', '½mv²', 'mg', 'kx'], correct: 1 },
          { q: 'F = ma means:', options: ['Force = mass + acceleration', 'Force = mass × acceleration', 'Force = mass ÷ acceleration'], correct: 1 },
          { q: 'Sound travels fastest in:', options: ['Air', 'Water', 'Vacuum', 'Steel'], correct: 3 },
          { q: 'Light speed in vacuum:', options: ['3×10⁸ m/s', '3×10⁶ m/s', '3×10¹⁰ m/s', '3×10⁵ m/s'], correct: 0 }
        ] 
      },
      { 
        id: 2, 
        title: 'Chemistry Basics', 
        theory: 'Atoms, molecules, periodic table, and common chemical reactions.',
        video: 'E4H5s5vLh74',
        videoSearch: 'https://www.youtube.com/results?search_query=chemistry+basic+concepts',
        quiz: [{ q: 'H₂O is:', options: ['Oxygen', 'Water', 'Hydrogen', 'Salt'], correct: 1 }] 
      }
    ],
    advanced: [
      { 
        id: 3, 
        title: 'Thermodynamics', 
        theory: 'Heat transfer, thermodynamic laws, and energy conversion in systems.',
        video: 'E_6vZSuKdBI',
        videoSearch: 'https://www.youtube.com/results?search_query=thermodynamics+basics',
        quiz: [{ q: 'Absolute zero:', options: ['0°C', '-273°C', '100°C', '-100°C'], correct: 1 }] 
      },
      { 
        id: 4, 
        title: 'Quantum Mechanics Intro', 
        theory: 'Quantum theory, Planck\'s constant, and behavior of matter at atomic level.',
        video: 'YKHKsZTbUXE',
        videoSearch: 'https://www.youtube.com/results?search_query=quantum+mechanics+basics',
        quiz: [{ q: 'Planck constant ≈', options: ['6.63×10⁻³⁴ J·s', '6.63×10³⁴', '3.14×10⁻³⁴', '2×10⁻³⁴'], correct: 0 }] 
      }
    ]
  },
  English: {
    beginner: [
      { 
        id: 1, 
        title: 'Grammar Basics - Parts of Speech', 
        theory: 'Learn about nouns, verbs, adjectives, adverbs, pronouns, prepositions, and sentence structure.',
        video: 'MvDkpBheznE',
        videoSearch: 'https://www.youtube.com/results?search_query=english+grammar+parts+of+speech',
        quiz: [
          { q: 'A noun is:', options: ['Action word', 'Person/Place/Thing', 'Describing word', 'Connecting word'], correct: 1 },
          { q: 'Choose the verb:', options: ['Apple', 'Run', 'Blue', 'Quick'], correct: 1 },
          { q: 'Plural of "child":', options: ['childs', 'children', 'childes', 'childs\''], correct: 1 },
          { q: 'Which is a pronoun?', options: ['She', 'Table', 'Run', 'Beautiful'], correct: 0 },
          { q: 'End punctuation for question:', options: ['.', '?', '!', ','], correct: 1 }
        ] 
      },
      { 
        id: 2, 
        title: 'Vocabulary Building', 
        theory: 'Learn new words with meanings, synonyms, antonyms, and usage in sentences.',
        video: 'EEH0Xn2yLmQ',
        videoSearch: 'https://www.youtube.com/results?search_query=vocabulary+building+english',
        quiz: [{ q: 'What means happy?', options: ['Sad', 'Joyful', 'Angry', 'Tired'], correct: 1 }] 
      }
    ],
    advanced: [
      { 
        id: 3, 
        title: 'Literature & Analysis', 
        theory: 'Study of literary works, themes, symbolism, and analytical techniques.',
        video: '8MH3KlmNL3k',
        videoSearch: 'https://www.youtube.com/results?search_query=literature+analysis+basics',
        quiz: [{ q: 'Who wrote Hamlet?', options: ['Milton', 'Shakespeare', 'Marlowe', 'Bacon'], correct: 1 }] 
      },
      { 
        id: 4, 
        title: 'Essay Writing', 
        theory: 'Structure, thesis statement, arguments, evidence, and strong conclusions.',
        video: 'wRvFYvkGxwQ',
        videoSearch: 'https://www.youtube.com/results?search_query=how+to+write+essays',
        quiz: [{ q: 'Essay intro should:', options: ['Only data', 'Hook reader', 'Conclusion first', 'List all points'], correct: 1 }] 
      }
    ]
  },
  History: {
    beginner: [
      { 
        id: 1, 
        title: 'Ancient Civilizations', 
        theory: 'Exploration of ancient Egypt, Mesopotamia, Greece, and Rome - their contributions to modern world.',
        video: 'pxlcKxlOJVc',
        videoSearch: 'https://www.youtube.com/results?search_query=ancient+civilizations+overview',
        quiz: [
          { q: 'Pyramids built in:', options: ['Rome', 'Egypt', 'Greece', 'Mesopotamia'], correct: 1 },
          { q: 'Ancient river valley:', options: ['Mesopotamia', 'Amazon', 'Sahara', 'Nile only'], correct: 0 },
          { q: 'Roman language:', options: ['Greek', 'Latin', 'Sanskrit', 'Hebrew'], correct: 1 },
          { q: 'Stone age used:', options: ['Metal tools', 'Stone tools', 'Plastic', 'Iron'], correct: 1 },
          { q: 'Earliest writing form:', options: ['Cuneiform', 'Latin', 'Arabic', 'Chinese'], correct: 0 }
        ] 
      },
      { 
        id: 2, 
        title: 'Medieval Period', 
        theory: 'Feudalism, kingdoms, knights, and medieval society (400-1400 AD).',
        video: 'wEF89L-Q3Pk',
        videoSearch: 'https://www.youtube.com/results?search_query=medieval+history',
        quiz: [{ q: 'Medieval period ≈:', options: ['400-1400 AD', '100-500 AD', '1500-1700 AD', '1800-1900'], correct: 0 }] 
      }
    ],
    advanced: [
      { 
        id: 3, 
        title: 'Renaissance Era', 
        theory: 'Art, science, humanism, and intellectual revival in Europe (14th-17th century).',
        video: 'D8T3I_G_7p4',
        videoSearch: 'https://www.youtube.com/results?search_query=renaissance+history',
        quiz: [{ q: 'Renaissance started in:', options: ['Germany', 'Italy', 'France', 'Spain'], correct: 1 }] 
      },
      { 
        id: 4, 
        title: 'Modern History', 
        theory: 'Industrial revolution, world wars, independence movements, and modern nation states.',
        video: 'GZHEAh7DRNU',
        videoSearch: 'https://www.youtube.com/results?search_query=modern+history+overview',
        quiz: [{ q: 'WWII ended:', options: ['1943', '1945', '1947', '1950'], correct: 1 }] 
      }
    ]
  },
  CSE: {
    beginner: [
      { 
        id: 1, 
        title: 'Programming Basics', 
        theory: 'Introduction to programming concepts: variables, loops, conditionals, functions, and data structures.',
        video: 'HgA-R3-HI04',
        videoSearch: 'https://www.youtube.com/results?search_query=programming+basics+for+beginners',
        quiz: [
          { q: 'Which stores data?', options: ['Variable', 'Loop', 'Function', 'Array'], correct: 0 },
          { q: 'Which repeats code?', options: ['if', 'while', 'return', 'import'], correct: 1 },
          { q: 'HTML stands for:', options: ['Hyper Text Markup Language', 'Home Tool', 'High Text Language'], correct: 0 },
          { q: 'JS used for:', options: ['Structure', 'Styling', 'Interactivity', 'Database'], correct: 2 },
          { q: 'Data structure:', options: ['Table', 'Array', 'Window', 'Button'], correct: 1 }
        ] 
      },
      { 
        id: 2, 
        title: 'Web Development Basics', 
        theory: 'Introduction to building websites using HTML for structure, CSS for styling, and JavaScript for interactivity.',
        video: '0afZj1G0BIE',
        videoSearch: 'https://www.youtube.com/results?search_query=web+development+basics',
        quiz: [{ q: 'HTML for:', options: ['Styling', 'Structure', 'Logic', 'Database'], correct: 1 }] 
      }
    ],
    advanced: [
      { 
        id: 3, 
        title: 'Data Structures', 
        theory: 'Arrays, linked lists, stacks, queues, trees, graphs, and their applications.',
        video: '92S4zgXN17o',
        videoSearch: 'https://www.youtube.com/results?search_query=data+structures+introduction',
        quiz: [{ q: 'Trees for:', options: ['Nothing', 'Search', 'Sorting all', 'I/O'], correct: 1 }] 
      },
      { 
        id: 4, 
        title: 'Database Design', 
        theory: 'SQL, normalization, schemas, relationships, and database optimization.',
        video: 'ztHopE5Wnpc',
        videoSearch: 'https://www.youtube.com/results?search_query=database+design+basics',
        quiz: [{ q: 'SQL for:', options: ['Styling', 'Database query', 'Design', 'Animation'], correct: 1 }] 
      }
    ]
  },
  IT: {
    beginner: [
      { 
        id: 1, 
        title: 'IT Fundamentals', 
        theory: 'Networking basics, servers, routers, IT infrastructure, and computing concepts.',
        video: '6QJSv6B3M3Y',
        videoSearch: 'https://www.youtube.com/results?search_query=it+fundamentals+basics',
        quiz: [
          { q: 'Server is typically:', options: ['Laptop', 'Powerful computer', 'Phone', 'Tablet'], correct: 1 },
          { q: 'LAN stands for:', options: ['Local Area Network', 'Long Area Network', 'Local Access Node'], correct: 0 },
          { q: 'TCP/IP relates to:', options: ['Network protocol', 'Database', 'UI', 'Graphics'], correct: 0 },
          { q: 'IP is:', options: ['Internet Protocol', 'Image Processor', 'Input', 'Industrial'], correct: 0 },
          { q: 'Firewall provides:', options: ['Interface', 'Security', 'Storage', 'Speed'], correct: 1 }
        ] 
      },
      { 
        id: 2, 
        title: 'Network Basics', 
        theory: 'Network topologies, protocols, OSI model, and network communication.',
        video: '3QhU9jd03a0',
        videoSearch: 'https://www.youtube.com/results?search_query=network+basics',
        quiz: [{ q: 'TCP/IP layers:', options: ['1', '2', '4', '7'], correct: 2 }] 
      }
    ],
    advanced: [
      { 
        id: 3, 
        title: 'Cloud Computing', 
        theory: 'Overview of AWS, Azure, GCP, deployment models, and cloud services.',
        video: 'RfvL_423a-I',
        videoSearch: 'https://www.youtube.com/results?search_query=cloud+computing+basics',
        quiz: [{ q: 'AWS stands for:', options: ['Amazon Web Services', 'Advanced Web Skills', 'Always Working System'], correct: 0 }] 
      },
      { 
        id: 4, 
        title: 'Cybersecurity Basics', 
        theory: 'Security threats, encryption, firewalls, VPN, and defensive techniques.',
        video: '8ZtInClXe1Q',
        videoSearch: 'https://www.youtube.com/results?search_query=cybersecurity+basics',
        quiz: [{ q: 'VPN provides:', options: ['Speed', 'Privacy', 'Storage', 'Graphics'], correct: 1 }] 
      }
    ]
  },
  Mechanical: {
    beginner: [
      { 
        id: 1, 
        title: 'Engineering Basics', 
        theory: 'Introduction to mechanics, forces, Newton\'s laws, stress, strain, and material properties.',
        video: 'Fvv6tpFN0N8',
        videoSearch: 'https://www.youtube.com/results?search_query=engineering+basics+mechanics',
        quiz: [
          { q: 'Force = mass ×:', options: ['Velocity', 'Acceleration', 'Distance', 'Time'], correct: 1 },
          { q: 'Material property:', options: ['Color', 'Density', 'Size', 'Shape'], correct: 1 },
          { q: 'CAD used for:', options: ['Design', 'Cooking', 'Music', 'Writing'], correct: 0 },
          { q: 'Torque relates to:', options: ['Rotation', 'Translation', 'Scaling', 'Height'], correct: 0 },
          { q: 'Stress unit:', options: ['Pa', 'm', 's', 'Hz'], correct: 0 }
        ] 
      },
      { 
        id: 2, 
        title: 'CAD Basics', 
        theory: 'Introduction to 2D and 3D modeling, drawing fundamentals, and design software.',
        video: 'Rp8pnrm7E9E',
        videoSearch: 'https://www.youtube.com/results?search_query=cad+basics+tutorial',
        quiz: [{ q: 'CAD for:', options: ['Design', 'Cooking', 'Music', 'Writing'], correct: 0 }] 
      }
    ],
    advanced: [
      { 
        id: 3, 
        title: 'Thermodynamics', 
        theory: 'Heat engines, refrigeration, energy efficiency, and thermodynamic principles.',
        video: 'Mv9NEXX90RI',
        videoSearch: 'https://www.youtube.com/results?search_query=thermodynamics+engineering',
        quiz: [{ q: 'Steam engine uses:', options: ['Electric', 'Heat', 'Wind', 'Solar'], correct: 1 }] 
      },
      { 
        id: 4, 
        title: 'Turbomachinery', 
        theory: 'Turbines, compressors, pumps, and rotary equipment principles.',
        video: 'OqcJKJH1P_E',
        videoSearch: 'https://www.youtube.com/results?search_query=turbomachinery+basics',
        quiz: [{ q: 'Turbine converts:', options: ['Energy', 'Heat to Mech', 'Mech to Heat', 'Sound'], correct: 1 }] 
      }
    ]
  },
  Civil: {
    beginner: [
      { 
        id: 1, 
        title: 'Structural Design', 
        theory: 'Basics of building structures, loads, materials, and safety principles.',
        video: 'rVoXCqmwBgg',
        videoSearch: 'https://www.youtube.com/results?search_query=structural+design+basics',
        quiz: [
          { q: 'Foundation supports:', options: ['Roof', 'Windows', 'Entire Building', 'Doors'], correct: 2 },
          { q: 'Concrete made of:', options: ['Metal', 'Stone', 'Cement & Agg', 'Plastic'], correct: 2 },
          { q: 'Load types:', options: ['Dead, Live, Env', 'Only Dead', 'Only Live', 'Only Wind'], correct: 0 },
          { q: 'Beam resists:', options: ['Compression', 'Bending', 'Shear', 'All'], correct: 3 },
          { q: 'Span is:', options: ['Length between supports', 'Load', 'Width', 'Height'], correct: 0 }
        ] 
      },
      { 
        id: 2, 
        title: 'Construction Methods', 
        theory: 'Construction techniques, site safety, and building processes.',
        video: 'A62qYXL9zfg',
        videoSearch: 'https://www.youtube.com/results?search_query=construction+methods+techniques',
        quiz: [{ q: 'Concrete is:', options: ['Metal', 'Stone', 'Cement & Agg', 'Plastic'], correct: 2 }] 
      }
    ],
    advanced: [
      { 
        id: 3, 
        title: 'Bridge Engineering', 
        theory: 'Design and construction of bridges, types, and analysis.',
        video: 'sYFVbAiR0eE',
        videoSearch: 'https://www.youtube.com/results?search_query=bridge+engineering+basics',
        quiz: [{ q: 'Suspension bridge spans:', options: ['Short', 'Medium', 'Long', 'Very short'], correct: 2 }] 
      },
      { 
        id: 4, 
        title: 'Water Systems', 
        theory: 'Irrigation, dams, hydraulics, and water management systems.',
        video: '7bawEAEJpb8',
        videoSearch: 'https://www.youtube.com/results?search_query=water+systems+hydraulics',
        quiz: [{ q: 'Dam stores:', options: ['Oil', 'Water', 'Gas', 'Coal'], correct: 1 }] 
      }
    ]
  },
  Electrical: {
    beginner: [
      { 
        id: 1, 
        title: 'Electricity Basics', 
        theory: 'Voltage, current, resistance, Ohm\'s law, and basic circuit principles.',
        video: 'DovunOxlaris',
        videoSearch: 'https://www.youtube.com/results?search_query=basic+electricity+ohms+law',
        quiz: [
          { q: 'Ohm\'s law: V = I ×:', options: ['R', 'P', 'E', 'X'], correct: 0 },
          { q: 'Current unit:', options: ['Volt', 'Ampere', 'Ohm', 'Watt'], correct: 1 },
          { q: 'Series circuits share:', options: ['Voltage', 'Current', 'Resistance', 'Power'], correct: 1 },
          { q: 'Ohm\'s law relates:', options: ['V,I,R', 'P,V,I', 'Only V and P', 'Only I and R'], correct: 0 },
          { q: 'AC stands for:', options: ['Alternating Current', 'Always Current', 'Analog Current', 'Atomic Current'], correct: 0 }
        ] 
      },
      { 
        id: 2, 
        title: 'Circuits & Components', 
        theory: 'Series and parallel circuits, resistors, capacitors, inductors.',
        video: 'sBzRH7AxwA4',
        videoSearch: 'https://www.youtube.com/results?search_query=electrical+circuits+basics',
        quiz: [{ q: 'Series = same:', options: ['Voltage', 'Current', 'Resistance', 'Power'], correct: 1 }] 
      }
    ],
    advanced: [
      { 
        id: 3, 
        title: 'Power Systems', 
        theory: 'Generation, transmission, distribution of electricity, transformers.',
        video: '7J2LC0w7-QY',
        videoSearch: 'https://www.youtube.com/results?search_query=power+systems+basics',
        quiz: [{ q: 'Transformer changes:', options: ['Frequency', 'Voltage', 'Resistance', 'Current'], correct: 1 }] 
      },
      { 
        id: 4, 
        title: 'Renewable Energy', 
        theory: 'Solar power, wind energy, and alternative renewable sources.',
        video: 'Rf_XLQW-5dg',
        videoSearch: 'https://www.youtube.com/results?search_query=renewable+energy+basics',
        quiz: [{ q: 'Solar panel:', options: ['Mechanical', 'Photovoltaic', 'Thermal', 'Electric'], correct: 1 }] 
      }
    ]
  }
};

// ===== STATE =====
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

// ===== INIT =====
window.addEventListener('load', () => {
  try {
    console.log('=== PAGE LOADING ===');
    console.log('Document title:', document.title);
    
    const regPage = document.getElementById('registrationPage');
    const dashPage = document.getElementById('dashboardPage');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const registrationForm = document.getElementById('registrationForm');
    
    console.log('Elements found:', {
      regPage: !!regPage,
      dashPage: !!dashPage,
      step1: !!step1,
      step2: !!step2,
      step3: !!step3,
      registrationForm: !!registrationForm
    });
    
    if (!regPage || !dashPage) {
      console.error('CRITICAL: Pages not found!');
      document.body.innerHTML = '<h1 style="color:red;padding:20px;">ERROR: Page elements not found!</h1>';
      return;
    }
    
    // Initialize registration page (visible) and dashboard page (hidden)
    console.log('Initializing page visibility...');
    regPage.classList.remove('hidden');
    dashPage.classList.add('hidden');
    
    // Initialize form steps
    if (step1) {
      step1.classList.add('active');
      step1.classList.remove('hidden');
      console.log('Step1 class active, computed display:', window.getComputedStyle(step1).display);
    }
    
    if (step2) {
      step2.classList.remove('active');
      step2.classList.add('hidden');
    }
    
    if (step3) {
      step3.classList.remove('active');
      step3.classList.add('hidden');
    }
    
    // Attach form submit handler
    if (registrationForm) {
      registrationForm.addEventListener('submit', handleRegistration);
      console.log('Form submit handler attached');
    } else {
      console.error('CRITICAL: registrationForm not found!');
    }
    
    // Hide all sections (they're shown via dashboard)
    const sections = document.querySelectorAll('.section');
    console.log('Found', sections.length, 'sections');
    sections.forEach(s => {
      s.classList.remove('active');
      s.classList.add('hidden');
    });
    
    console.log('=== INITIALIZATION COMPLETE ===');
    console.log('RegPage computed style:', {
      display: window.getComputedStyle(regPage).display,
      visibility: window.getComputedStyle(regPage).visibility,
      opacity: window.getComputedStyle(regPage).opacity
    });
  } catch (error) {
    console.error('CRITICAL ERROR during init:', error);
    console.error('Stack:', error.stack);
    document.body.innerHTML = '<h1 style="color:red;padding:20px;">CRITICAL ERROR: ' + error.message + '</h1>';
  }
});

// ===== NAVIGATION =====
function showDashboardPage() {
  console.log('Showing dashboard page...');
  try {
    const regPage = document.getElementById('registrationPage');
    const dashPage = document.getElementById('dashboardPage');
    
    if (regPage) {
      regPage.classList.add('hidden');
    }
    
    if (dashPage) {
      dashPage.classList.remove('hidden');
    }
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => {
      s.classList.remove('active');
      s.classList.add('hidden');
    });
    
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
      dashboardSection.classList.add('active');
      dashboardSection.classList.remove('hidden');
    }
    
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((m, idx) => {
      m.classList.remove('active');
      if (idx === 0) m.classList.add('active');
    });
    
    updateDashboard();
    console.log('Dashboard page shown');
  } catch (error) {
    console.error('Error in showDashboardPage:', error);
  }
}

// ===== FORM STEPS =====
function nextStep(step) {
  console.log('Moving to step:', step, 'from:', currentStep);
  
  if (!validateStep(currentStep)) {
    console.log('Validation failed for step', currentStep);
    return;
  }
  
  const currentDiv = document.getElementById('step' + currentStep);
  if (currentDiv) {
    currentDiv.classList.remove('active');
    currentDiv.classList.add('hidden');
    console.log('Step', currentStep, 'hidden');
  }
  
  currentStep = step;
  const nextDiv = document.getElementById('step' + step);
  if (nextDiv) {
    nextDiv.classList.add('active');
    nextDiv.classList.remove('hidden');
    console.log('Step', step, 'shown, computed display:', window.getComputedStyle(nextDiv).display);
  } else {
    console.error('Step', step, 'element not found!');
  }
}

function prevStep() {
  console.log('Going back from step:', currentStep);
  
  const currentDiv = document.getElementById('step' + currentStep);
  if (currentDiv) {
    currentDiv.classList.remove('active');
    currentDiv.classList.add('hidden');
  }
  
  currentStep--;
  const prevDiv = document.getElementById('step' + currentStep);
  if (prevDiv) {
    prevDiv.classList.add('active');
    prevDiv.classList.remove('hidden');
    console.log('Step', currentStep, 'shown');
  } else {
    console.error('Step', currentStep, 'element not found!');
  }
}

function validateStep(step) {
  console.log('Validating step:', step);
  
  if (step === 1) {
    const usernameEl = document.getElementById('username');
    const schoolEl = document.getElementById('schoolName');
    const studentTypeEl = document.getElementById('studentType');
    
    if (!usernameEl || !schoolEl || !studentTypeEl) {
      console.error('Step 1 fields not found!', {
        username: !!usernameEl,
        schoolName: !!schoolEl,
        studentType: !!studentTypeEl
      });
      return false;
    }
    
    const username = usernameEl.value.trim();
    const schoolName = schoolEl.value.trim();
    const studentType = studentTypeEl.value;
    
    clearError('usernameError');
    clearError('schoolError');
    clearError('studentError');
    
    if (!username || username.length < 3) {
      showError('usernameError', 'Min 3 characters');
      return false;
    }
    if (!schoolName) {
      showError('schoolError', 'Required');
      return false;
    }
    if (!studentType) {
      showError('studentError', 'Select student type');
      return false;
    }
    return true;
  }
  
  if (step === 2) {
    const courseEl = document.getElementById('courseSelect');
    const levelEl = document.getElementById('skillLevel');
    
    if (!courseEl || !levelEl) {
      console.error('Step 2 fields not found!', {
        courseSelect: !!courseEl,
        skillLevel: !!levelEl
      });
      return false;
    }
    
    const course = courseEl.value;
    const level = levelEl.value;
    
    clearError('courseError');
    clearError('levelError');
    
    if (!course) {
      showError('courseError', 'Select course');
      return false;
    }
    if (!level) {
      showError('levelError', 'Select level');
      return false;
    }
    return true;
  }
  
  if (step === 3) {
    const langEl = document.getElementById('language');
    if (!langEl) {
      console.error('Step 3 language field not found!');
      return false;
    }
    
    const language = langEl.value;
    if (!language) {
      alert('Please select a language');
      return false;
    }
    return true;
  }
  
  return true;
}

function showError(id, msg) {
  document.getElementById(id).textContent = msg;
}

function clearError(id) {
  document.getElementById(id).textContent = '';
}

function updateSubjects() {
  const type = document.getElementById('studentType').value;
  const select = document.getElementById('courseSelect');
  select.innerHTML = '<option value="">Select</option>';
  
  if (type === 'school') {
    courseData.school.subjects.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      select.appendChild(opt);
    });
  } else if (type === 'college') {
    courseData.college.subjects.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      select.appendChild(opt);
    });

function skipUpload() {
  document.getElementById('materialFile').value = '';
  document.getElementById('materialTitle').value = '';
  alert('Skipped uploading. You can continue.');
}
  }
}

// ===== REGISTRATION =====
function handleRegistration(e) {
  try {
    console.log('Form submitted!');
    e.preventDefault();
    
    const usernameEl = document.getElementById('username');
    const schoolEl = document.getElementById('schoolName');
    const typeEl = document.getElementById('studentType');
    const courseEl = document.getElementById('courseSelect');
    const levelEl = document.getElementById('skillLevel');
    const langEl = document.getElementById('language');
    
    console.log('Form elements found:', {
      username: !!usernameEl,
      schoolName: !!schoolEl,
      studentType: !!typeEl,
      courseSelect: !!courseEl,
      skillLevel: !!levelEl,
      language: !!langEl
    });
    
    userState.username = usernameEl ? usernameEl.value.trim() : '';
    userState.schoolName = schoolEl ? schoolEl.value.trim() : '';
    userState.studentType = typeEl ? typeEl.value : '';
    userState.course = courseEl ? courseEl.value : '';
    userState.skillLevel = levelEl ? levelEl.value : '';
    userState.language = langEl ? langEl.value : 'english';
    userState.currentLesson = 0;
    userState.currentQuestion = 0;
    userState.quizScore = 0;
    
    console.log('userState:', userState);
    
    localStorage.setItem('studySyncUser', JSON.stringify(userState));
    console.log('Data saved to localStorage');
    
    alert('Welcome ' + userState.username + '! Account created.');
    showDashboardPage();
  } catch (error) {
    console.error('ERROR in handleRegistration:', error);
    console.error('Stack:', error.stack);
    alert('Error: ' + error.message);
  }
}

// ===== DASHBOARD =====
function updateDashboard() {
  try {
    document.getElementById('userName').textContent = 'Welcome, ' + userState.username;
    document.getElementById('profileName').textContent = userState.username;
    document.getElementById('profileCourse').textContent = userState.course + ' - ' + userState.skillLevel;
    document.getElementById('dashName').textContent = userState.username;
    document.getElementById('currentCourse').textContent = userState.course;
    document.getElementById('currentLevel').textContent = userState.skillLevel;
  } catch (error) {
    console.error('Error updating dashboard:', error);
  }
}

function showSection(sectionName, btn) {
  try {
    console.log('Showing section:', sectionName);
    
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(s => {
      s.classList.remove('active');
      s.classList.add('hidden');
    });
    
    document.querySelectorAll('.menu-item').forEach(m => {
      m.classList.remove('active');
    });
    
    const activeSection = document.getElementById(sectionName);
    if (!activeSection) {
      console.error('Section not found:', sectionName);
      return;
    }
    
    activeSection.classList.add('active');
    activeSection.classList.remove('hidden');
    
    if (btn) {
      btn.classList.add('active');
    }
    
    if (sectionName === 'learning') {
      document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
        v.classList.add('hidden');
      });
      const lessonView = document.getElementById('lessonView');
      if (lessonView) {
        lessonView.classList.add('active');
        lessonView.classList.remove('hidden');
      }
      loadLessonContent();
    }
    
    if (sectionName === 'explore') {
      renderExploreList();
    }
    
    console.log('Section', sectionName, 'displayed');
  } catch (error) {
    console.error('Error in showSection:', error);
  }
}

// ===== LEARNING =====
function loadLessonContent() {
  try {
    const course = userState.course;
    const level = userState.skillLevel;
    
    if (!lessonsData[course] || !lessonsData[course][level]) {
      document.getElementById('lessonTitle').textContent = 'Course Not Available';
      document.getElementById('lessonTheory').textContent = 'Please select a valid course and level.';
      return;
    }
    
    const lessons = lessonsData[course][level];
    if (!lessons || lessons.length === 0) {
      document.getElementById('lessonTitle').textContent = 'No Lessons';
      document.getElementById('lessonTheory').textContent = 'No lessons available for this level.';
      return;
    }
    
    const lessonIndex = Math.min(userState.currentLesson, lessons.length - 1);
    const lesson = lessons[lessonIndex];
    
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonTheory').textContent = lesson.theory;
    
    // Video embed
    const videoDiv = document.getElementById('lessonVideo');
    videoDiv.innerHTML = '';
    if (lesson.video) {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/' + lesson.video;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      videoDiv.appendChild(iframe);
    }
    
    // Video link
    const videoLink = document.getElementById('lessonVideoLink');
    if (videoLink && lesson.videoSearch) {
      videoLink.href = lesson.videoSearch;
    }
    
  } catch (error) {
    console.error('Error loading lesson:', error);
  }
}

function startQuiz() {
  try {
    console.log('Starting quiz...');
    const course = userState.course;
    const level = userState.skillLevel;
    
    if (!lessonsData[course] || !lessonsData[course][level]) {
      alert('Course data not found');
      return;
    }
    
    const lessons = lessonsData[course][level];
    if (!lessons || lessons.length === 0) {
      alert('No lessons available');
      return;
    }
    
    const lesson = lessons[userState.currentLesson];
    if (!lesson || !lesson.quiz || lesson.quiz.length === 0) {
      alert('No quiz available');
      return;
    }
    
    userState.currentQuestion = 0;
    userState.quizScore = 0;
    
    document.querySelectorAll('.view').forEach(v => {
      v.classList.remove('active');
      v.classList.add('hidden');
    });
    
    const quizView = document.getElementById('quizView');
    if (quizView) {
      quizView.classList.add('active');
      quizView.classList.remove('hidden');
    }
    
    showQuestion();
  } catch (error) {
    console.error('Error starting quiz:', error);
    alert('Error starting quiz');
  }
}

function showQuestion() {
  try {
    const course = userState.course;
    const level = userState.skillLevel;
    
    if (!lessonsData[course] || !lessonsData[course][level]) {
      return;
    }
    
    const lessons = lessonsData[course][level];
    const lesson = lessons[userState.currentLesson];
    
    if (!lesson || !lesson.quiz) {
      return;
    }
    
    const quiz = lesson.quiz;
    
    if (userState.currentQuestion >= quiz.length) {
      showResults();
      return;
    }
    
    const q = quiz[userState.currentQuestion];
    document.getElementById('questionText').textContent = (userState.currentQuestion + 1) + '. ' + q.q;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
      const label = document.createElement('label');
      label.innerHTML = '<input type="radio" name="answer" value="' + idx + '"> ' + opt;
      optionsDiv.appendChild(label);
    });
  } catch (error) {
    console.error('Error showing question:', error);
  }
}

function nextQuestion() {
  try {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert('Please select an answer');
      return;
    }
    
    const course = userState.course;
    const level = userState.skillLevel;
    
    if (!lessonsData[course] || !lessonsData[course][level]) {
      alert('Course data not found');
      return;
    }
    
    const lessons = lessonsData[course][level];
    const lesson = lessons[userState.currentLesson];
    
    if (!lesson || !lesson.quiz[userState.currentQuestion]) {
      return;
    }
    
    const q = lesson.quiz[userState.currentQuestion];
    
    if (parseInt(selected.value) === q.correct) {
      userState.quizScore++;
    }
    
    userState.currentQuestion++;
    showQuestion();
  } catch (error) {
    console.error('Error in nextQuestion:', error);
  }
}

function showResults() {
  try {
    console.log('Showing quiz results...');
    
    document.querySelectorAll('.view').forEach(v => {
      v.classList.remove('active');
      v.classList.add('hidden');
    });
    
    const resultView = document.getElementById('resultView');
    if (resultView) {
      resultView.classList.add('active');
      resultView.classList.remove('hidden');
    }
    
    const course = userState.course;
    const level = userState.skillLevel;
    
    if (!lessonsData[course] || !lessonsData[course][level]) {
      document.getElementById('resultMsg').textContent = 'Error loading results';
      return;
    }
    
    const lessons = lessonsData[course][level];
    const lesson = lessons[userState.currentLesson];
    
    if (!lesson || !lesson.quiz) {
      document.getElementById('resultMsg').textContent = 'Error loading quiz';
      return;
    }
    
    const totalQuestions = lesson.quiz.length;
    const percentage = Math.round((userState.quizScore / totalQuestions) * 100);
    
    const msg = '🎉 Your Score: ' + userState.quizScore + '/' + totalQuestions + ' (' + percentage + '%)';
    document.getElementById('resultMsg').textContent = msg;
    
    localStorage.setItem('studySyncUser', JSON.stringify(userState));
  } catch (error) {
    console.error('Error in showResults:', error);
  }
}

function backToLessons() {
  try {
    console.log('Returning to lessons...');
    
    document.querySelectorAll('.view').forEach(v => {
      v.classList.remove('active');
      v.classList.add('hidden');
    });
    
    const lessonView = document.getElementById('lessonView');
    if (lessonView) {
      lessonView.classList.add('active');
      lessonView.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Error in backToLessons:', error);
  }
}

// ===== EXPLORE =====
function renderExploreList() {
  try {
    const container = document.getElementById('exploreList');
    if (!container) return;
    container.innerHTML = '';
    
    const seen = new Set();
    if (courseData.school && Array.isArray(courseData.school.subjects)) {
      courseData.school.subjects.forEach(s => seen.add(s));
    }
    if (courseData.college && Array.isArray(courseData.college.subjects)) {
      courseData.college.subjects.forEach(s => seen.add(s));
    }
    Object.keys(lessonsData).forEach(k => seen.add(k));
    
    Array.from(seen).sort().forEach(courseName => {
      const div = document.createElement('div');
      div.className = 'explore-item';
      div.innerHTML = '<h4>' + courseName + '</h4><p>Click to select this course</p>';
      
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.textContent = 'Select →';
      btn.onclick = () => selectCourseFromExplore(courseName);
      div.appendChild(btn);
      
      container.appendChild(div);
    });
  } catch (err) {
    console.error('Error rendering explore list:', err);
  }
}

function selectCourseFromExplore(courseName) {
  try {
    userState.course = courseName;
    userState.currentLesson = 0;
    userState.currentQuestion = 0;
    userState.quizScore = 0;
    localStorage.setItem('studySyncUser', JSON.stringify(userState));
    
    updateDashboard();
    alert('✓ Course " ' + courseName + '" selected!');
  } catch (err) {
    console.error('Error selecting course:', err);
  }
}

// ===== CHAT =====
function sendMessage() {
  try {
    const input = document.getElementById('userInput');
    if (!input) return;
    
    const msg = input.value.trim();
    if (!msg) return;
    
    addChatMessage(msg, 'user');
    input.value = '';
    
    setTimeout(() => {
      const reply = generateReply(msg);
      addChatMessage(reply, 'bot');
    }, 500);
  } catch (error) {
    console.error('Error in sendMessage:', error);
  }
}

function addChatMessage(text, type) {
  try {
    const box = document.getElementById('chatBox');
    if (!box) return;
    
    const div = document.createElement('div');
    div.className = 'chat-message ' + type + '-message';
    div.innerHTML = '<p>' + text + '</p>';
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
  } catch (error) {
    console.error('Error in addChatMessage:', error);
  }
}

function generateReply(input) {
  const lower = input.toLowerCase();
  
  if (lower.includes('hello') || lower.includes('hi')) {
    return '👋 Hello! How can I help you with your studies today?';
  } else if (lower.includes('study')) {
    return '📚 Tip: Break your topics into chunks and take 10-minute breaks every 50 minutes!';
  } else if (lower.includes('health') || lower.includes('wellness')) {
    return '💪 Stay hydrated, get 8 hours sleep, and exercise daily for better learning!';
  } else if (lower.includes('quiz')) {
    return '📝 Quiz helps test your knowledge! Try taking a quiz in the Learning section.';
  } else if (lower.includes('help')) {
    return '🤖 I can help! Ask me about: studying tips, wellness, health, or courses.';
  } else {
    return '💬 I\'m here to help! Ask me about studies, wellness, or any learning topics.';
  }
}

// ===== SETTINGS =====
function openSettings() {
  try {
    console.log('Opening settings...');
    const modal = document.getElementById('settingsModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Error in openSettings:', error);
  }
}

function closeSettings() {
  try {
    console.log('Closing settings...');
    const modal = document.getElementById('settingsModal');
    if (modal) {
      modal.classList.add('hidden');
    }
  } catch (error) {
    console.error('Error in closeSettings:', error);
  }
}

function updateLanguage() {
  userState.language = document.getElementById('settingsLanguage').value;
  localStorage.setItem('studySyncUser', JSON.stringify(userState));
  alert('✓ Language updated!');
}

// ===== LOGOUT =====
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
    document.getElementById('registrationForm').reset();
    location.reload();
  }
}

// Close modal on outside click
window.onclick = function(e) {
  const modal = document.getElementById('settingsModal');
  if (e.target === modal) {
    closeSettings();
  }
};

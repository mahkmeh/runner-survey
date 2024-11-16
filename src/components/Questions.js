// src/components/Questions.js

const QUESTION_TYPES = {
    WELCOME: 'welcome',
    PERSONAL_INFO: 'personal-info',
    SINGLE_CHOICE: 'single-choice',
    MULTIPLE_CHOICE: 'multiple-choice',
    NUMBER_INPUT: 'number-input',
    TEXT_INPUT: 'text-input',
    DATE_INPUT: 'date-input',
    INFO_PAGE: 'info-page',
    RADIO_GROUP: 'radio-group',
    CHECKBOX_GROUP: 'checkbox-group',
    TIME_INPUT: 'time-input',
    OPEN_TEXT: 'open-text'
  };
  
  export const ALL_QUESTIONS = [
    // === FREE PLAN QUESTIONS ===
    
    // Welcome Page
    {
      id: 'welcome',
      type: QUESTION_TYPES.WELCOME,
      pageNumber: 1,
      planType: 'free',
      title: 'Get Ready for Your Running Journey!',
      description: 'Answer a few questions to help us understand your running profile better.'
    },
  
    // Personal Information
    {
      id: 'personal-info',
      type: QUESTION_TYPES.PERSONAL_INFO,
      pageNumber: 2,
      planType: 'free',
      title: 'Personal Information',
      subtitle: 'alright..lets get started',
      fields: [
        { name: 'name', label: 'What is your name?', type: 'text' },
        { name: 'email', label: 'What is your email?', type: 'email' },
        { name: 'city', label: 'In which city do you currently reside?', type: 'text' },
        { name: 'weight', label: 'What is your weight (in kgs)?', type: 'number' },
        { name: 'height', label: 'What is your height (in ft)?', type: 'number' },
        { name: 'gender', label: 'Gender', type: 'radio', options: ['Male', 'Female'] },
        { name: 'dob', label: 'What is your date of birth?', type: 'date' }
      ]
    },
  
    // Running History
    {
      id: 'running-frequency',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 3,
      planType: 'free',
      title: 'How often do you run?',
      options: [
        { value: 'annual', label: 'Once a year - Annual running event: when peer pressure meets spandex.' },
        { value: 'monthly', label: 'Once a month - My running shoes are my fashion statement.' },
        { value: 'weekly', label: 'Once a week - Weekend warrior: balancing life\'s marathon with fitness sprints.' },
        { value: '2-3times', label: '2-3 times a week - My running shoes rack up more miles than my car\'s odometer.' },
        { value: 'daily', label: 'Daily - In my world, rest days are just slower running days.' },
        { value: 'random', label: 'Random - Just wear my shoes and run, no schedule.' }
      ]
    },
  
    {
      id: 'running-experience',
      type: QUESTION_TYPES.NUMBER_INPUT,
      pageNumber: 4,
      planType: 'free',
      title: 'Since how many years have you been running?'
    },
  
    {
      id: 'running-style',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 5,
      planType: 'free',
      title: 'I usually run',
      options: [
        { value: 'solo', label: 'SOLO - Just me, my music, and my thoughts.' },
        { value: 'small-group', label: 'SMALL GROUP - We\'re 3-4 friends who pace and motivate each other.' },
        { value: 'running-club', label: 'RUNNING CLUB - We\'re united by lycra and early morning madness.' },
        { value: 'track-buddies', label: 'TRACK BUDDIES - We are strangers who smile at each other when we cross.' }
      ]
    },
  
    // Marathon Experience
    {
      id: 'marathon-type',
      type: QUESTION_TYPES.MULTIPLE_CHOICE,
      pageNumber: 6,
      planType: 'free',
      title: 'I have run',
      options: [
        { value: 'half', label: 'HALF MARATHON' },
        { value: 'full', label: 'FULL MARATHON' }
      ],
      conditionalQuestions: {
        'half': {
          id: 'half-marathon-count',
          type: QUESTION_TYPES.SINGLE_CHOICE,
          pageNumber: '6a',
          title: 'How many Half Marathons have you completed?',
          options: [
            { value: '0', label: '0 times - My running experience is purely theoretical and Netflix-based' },
            { value: '1-5', label: '1-5 times - I\'m have a modest collection of \'FINISHER\' t-shirts.' },
            { value: '5+', label: '5+ times - My feet have their own therapist on speed dial' },
            { value: '10+', label: '10+ times - My run medals double as wind chimes now' }
          ]
        },
        'full': {
          id: 'full-marathon-count',
          type: QUESTION_TYPES.SINGLE_CHOICE,
          pageNumber: '6b',
          title: 'How many Full Marathons have you completed?',
          options: [
            { value: '0', label: '0 times - Marathon virgin - still eyeing the starting line' },
            { value: '1-5', label: '1-5 times - I\'ve hit the wall a couple times... and lived to tell the tale' },
            { value: '5+', label: '5+ times - My body is 70% water, 30% energy gel' },
            { value: '10+', label: '10+ times - I\'ve carb-loaded enough pasta to sink Italy' }
          ]
        }
      }
    },
  
    // Race Details
    {
      id: 'mumbai-experience',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 7,
      planType: 'free',
      title: 'I am running in Mumbai for....',
      options: [
        { value: 'first', label: 'First time' },
        { value: '2-5', label: '2-5 times' },
        { value: '5-10', label: '5-10 times' },
        { value: '10+', label: '10+ times' }
      ]
    },
  
    {
      id: 'race-distance',
      type: QUESTION_TYPES.RADIO_GROUP,
      pageNumber: 8,
      planType: 'free',
      title: 'How many kms are you going to run in TMM 2025?',
      options: [
        { value: '21', label: '21KMS' },
        { value: '42', label: '42KMS' }
      ]
    },
  
    {
      id: 'race-approach',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 9,
      planType: 'free',
      title: 'What is your approach for the race?',
      options: [
        { value: 'fun', label: 'I just want to finish and have fun' },
        { value: 'moderate', label: 'I will work hard, but don\'t want to bury myself' },
        { value: 'competitive', label: 'I plan to race at my absolute limit' }
      ]
    },
  
    {
      id: 'target-time',
      type: QUESTION_TYPES.TIME_INPUT,
      pageNumber: 10,
      planType: 'free',
      title: 'What is your target time for the race?'
    },
  
    // Health
    {
      id: 'sweat-rate',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 11,
      planType: 'free',
      title: 'How would you rate your sweating during the race?',
      options: [
        { value: 'none', label: 'Not sweaty at all' },
        { value: 'little', label: 'A bit sweaty, thats it' },
        { value: 'moderate', label: 'Fairly sweaty, gear is wet but not drenched' },
        { value: 'heavy', label: 'Quite sweaty, you can\'t hug me' },
        { value: 'extreme', label: 'Sweat bucket, I am pouring down' }
      ]
    },
  
    {
      id: 'cramps',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 12,
      planType: 'free',
      title: 'Do you get cramps while running?',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'sometimes', label: 'Sometimes' }
      ]
    },
  
    // Carb Loading Info Page
    {
      id: 'carb-loading-info',
      type: QUESTION_TYPES.INFO_PAGE,
      pageNumber: 13,
      planType: 'free',
      title: 'DID YOU KNOW',
      content: `Carb loading should start at least 2-3 days before the race and recommended quantities is 7-10 grams per kg of body weight
  
  Example for 70kg runner:
  • Normal diet would be ~350g carbs
  • Loading diet should be ~ 490 to 700g carbs
  • Hence provides an additional 1000-2000+ calories
  • In turn, each gram of stored glycogen holds 3g water
  • Improving hydration status and adds 1-3 hours of energy on the race day`
    },
  
    // Nutrition
    {
      id: 'running-coach',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 14,
      planType: 'free',
      title: 'Do you have a running coach?',
      options: [
        { value: 'yes-happy', label: 'Yes, my coach is my dronacharya' },
        { value: 'yes-unhappy', label: 'Yes, but not happy with the coach' },
        { value: 'friend', label: 'Kinda, my friend is my coach' },
        { value: 'no', label: 'No, I am lone wolf' },
        { value: 'want-coach', label: 'No, but I wish to have one' }
      ]
    },
  
    {
      id: 'nutrition-plan',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 15,
      planType: 'free',
      title: 'Do you have a proper nutrition plan for the race?',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'somewhat', label: 'Somewhat' },
        { value: 'need-help', label: 'No, I need help' }
      ]
    },
  
    {
      id: 'race-supplies',
      type: QUESTION_TYPES.CHECKBOX_GROUP,
      pageNumber: 16,
      planType: 'free',
      title: 'I will be carrying along the below stuff with me during the race',
      options: [
        { value: 'plain-water', label: 'Plain water' },
        { value: 'electrolyte-water', label: 'Electrolyte water' },
        { value: 'salt-capsules', label: 'Salt capsules' },
        { value: 'energy-gels', label: 'Energy gels' },
        { value: 'energy-bars', label: 'Energy bars' },
        { value: 'energy-drinks', label: 'Energy drinks' },
        { value: 'fruits', label: 'Fruits' },
        { value: 'dry-fruits', label: 'Dry Fruits' },
        { value: 'none', label: 'Nothing, I am dependent on Aid station' },
        { value: 'others', label: 'Others' }
      ]
    },
  
    {
      id: 'water-consumption',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 17,
      planType: 'free',
      title: 'How much water or electrolyte do you consume during the race?',
      options: [
        { value: '500ml-10km', label: '500ml every 10km' },
        { value: '250ml-10km', label: '250ml every 10km' },
        { value: 'aid-station', label: 'At every aid station' },
        { value: 'random', label: 'At random, I sip water whenever/wherever possible' },
        { value: 'other', label: 'Other' }
      ]
    },
  
    {
      id: 'nutrition-importance',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 18,
      planType: 'free',
      title: 'Do you think nutrition plan really makes difference on race day?',
      options: [
        { value: 'no', label: 'Not at all, it\'s time-wasting' },
        { value: 'little', label: 'Just a bit here and there.. that\'s all' },
        { value: 'somewhat', label: 'Important but not critical' },
        { value: 'important', label: 'Does have a good impact but should be done properly' },
        { value: 'very-important', label: 'It\'s all about nutrition, I can become Usain Bolt' }
      ]
    },
  
    // === PAID PLAN QUESTIONS ===
  
    // PRE-RACE Nutrition
    {
      id: 'pre-race-breakfast',
      type: QUESTION_TYPES.SINGLE_CHOICE,
      pageNumber: 1,
      planType: 'paid',
      title: 'Do you have breakfast/snack before running?',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'little', label: 'Little' }
      ]
    },
  
    {
      id: 'pre-run-food',
      type: QUESTION_TYPES.CHECKBOX_GROUP,
      pageNumber: 2,
      planType: 'paid',
      title: 'Yeah, I have below food before running',
      options: [
        { value: 'oats', label: 'Oats meal' },
        { value: 'sandwich', label: 'Sandwich (peanut butter/veg)' },
        { value: 'omlete', label: 'Omlete' },
        { value: 'fruits', label: 'Fruits (banana,oranges etc)' },
        { value: 'desi-food', label: 'Desi stuff (poha,idly,upma etc)' },
        { value: 'anything', label: 'I eat just about anything that\'s in the kitchen' },
        { value: 'wish-to', label: 'I wish to but don\'t have the time/effort/knowledge to do it' },
        { value: 'juice', label: 'Nothing solid..just drink some juice' },
      { value: 'tea', label: 'Desi Tea' },
      { value: 'coffee', label: 'Black Coffee' },
      { value: 'energy-gels', label: 'Energy Gels' },
      { value: 'energy-bars', label: 'Energy Bars' },
      { value: 'cold-drinks', label: 'Cold Drinks' },
      { value: 'energy-drinks', label: 'Energy Drinks' },
      { value: 'others', label: 'Others' }
    ]
  },

  {
    id: 'gi-issues',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 3,
    planType: 'paid',
    title: 'In previous races, have you experienced any GI /Gut issues?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  },

  {
    id: 'medical-conditions',
    type: QUESTION_TYPES.TEXT_INPUT,
    pageNumber: 4,
    planType: 'paid',
    title: 'Do you have any medical conditions that can affect your hydration needs?',
    description: 'like: diabetes, blood pressure etc'
  },

  {
    id: 'training-gauge',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 5,
    planType: 'paid',
    title: 'Training: how do you gauge your current training for TMM25',
    options: [
      { value: '1', label: '1 star "My training plan is a perfect blend of panic and YouTube tutorials"' },
      { value: '2', label: '2 star "I train when my guilty conscience kicks in"' },
      { value: '3', label: '3 star "My weekend social life is now just high-fiving other runners."' },
      { value: '4', label: '4 star "Every run is tracked, logged, and analyzed in the STRAVA group."' },
      { value: '5', label: '5 star "I whisper \'No human is limited\' to myself during hill repeats."' }
    ]
  },

  {
    id: 'heart-rate-zones',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    pageNumber: 6,
    planType: 'paid',
    title: 'During running, can you rank your Heart Rate Zones',
    options: [
      { value: 'zone1', label: 'Zone 1' },
      { value: 'zone2', label: 'Zone 2' },
      { value: 'zone3', label: 'Zone 3' },
      { value: 'zone4', label: 'Zone 4' },
      { value: 'zone5', label: 'Zone 5' }
    ]
  },

  {
    id: 'nutrition-plan-adherence',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 7,
    planType: 'paid',
    title: 'How often do you stick to your nutrition plan?',
    options: [
      { value: 'strict', label: 'to the T (90-100%)' },
      { value: 'moderate', label: 'some what (40-60%)' },
      { value: 'poor', label: 'off of the plan (less than 20%)' }
    ]
  },

  {
    id: 'nutrition-challenges',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    pageNumber: 8,
    planType: 'paid',
    title: 'I find nutrition planning for races challenging because',
    options: [
      { value: 'knowledge', label: 'I have zero knowledge about what to eat and when?' },
      { value: 'choices', label: 'I feel overwhelmed by too many product choices in the market?' },
      { value: 'time', label: 'It seems too time-consuming?' },
      { value: 'tracking', label: 'Is it difficult to track what works and what doesn\'t?' },
      { value: 'priority', label: 'I keep postponing it thinking it\'s less important than running?' }
    ]
  },

  {
    id: 'beetroot-info',
    type: QUESTION_TYPES.INFO_PAGE,
    pageNumber: 9,
    planType: 'paid',
    title: 'DID YOU KNOW',
    content: `Drinking Beet Root Juice Dietary Nitrate (NO3-) before the race can:
- Enhanced blood flow to muscles ↑ by 10-25%
- Reduces oxygen cost of exercise ↓ by 3-5%
- Delayed onset of fatigue in middle of the race
- Improved oxygen delivery to the cells ↑ by 10-30%
- Improves overall hydration status in turn getting additional hours of energy`
  },

  {
    id: 'nutrition-assistance',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 10,
    planType: 'paid',
    title: 'Do you need assistance in making a nutrition plan?',
    description: '(a nutritionist will get on a free introductory call with you)',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  },

  {
    id: 'race-day-routine',
    type: QUESTION_TYPES.OPEN_TEXT,
    pageNumber: 11,
    planType: 'paid',
    title: 'Can you explain Your pre-race routine on race day',
    fields: [
      { name: 'step1', label: 'Step 1' },
      { name: 'step2', label: 'Step 2' },
      { name: 'step3', label: 'Step 3' },
      { name: 'step4', label: 'Step 4: I\'m at the racing line' }
    ]
  },

  {
    id: 'fueling-pattern',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 12,
    planType: 'paid',
    title: 'What\'s your typical fueling pattern?',
    options: [
      { value: 'time', label: 'Time-based (every 30 mins)' },
      { value: 'distance', label: 'Distance-based (every 5km)' },
      { value: 'feel', label: 'Feel-based (when hungry/thirsty)' }
    ]
  },

  {
    id: 'fluid-consumption',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 13,
    planType: 'paid',
    title: 'How do you prefer to consume fluids?',
    options: [
      { value: 'small-sips', label: 'Small sips frequently' },
      { value: 'large-amounts', label: 'Larger amounts less frequently' },
      { value: 'walk-aid', label: 'Walk through aid stations' },
      { value: 'run-aid', label: 'Run through aid stations' }
    ]
  },

  {
    id: 'caffeine-preference',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 14,
    planType: 'paid',
    title: 'Do you prefer Caffeine/Coffee during the race?',
    options: [
      { value: 'no-no', label: 'NO NO: I\'m a self-propelled machine, no caffeine' },
      { value: 'no', label: 'NO: I might sniff a cappuccino, but that\'s it' },
      { value: 'maybe', label: 'MAY BE: I enjoy a espresso shot mid-run.' },
      { value: 'yes', label: 'YES: My shoes have built-in cup holders & I drink' },
      { value: 'yes-yes', label: 'YES YES: I run with portable IV drip of cold brew' }
    ]
  },

  {
    id: 'bathroom-breaks',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 15,
    planType: 'paid',
    title: 'How frequently do you take bathroom breaks during the race?',
    options: [
      { value: 'none', label: 'None' },
      { value: 'rare', label: 'Very rare' },
      { value: 'sometimes', label: 'Sometimes' },
      { value: 'often', label: 'Quite often' }
    ]
  },

  {
    id: 'hit-wall',
    type: QUESTION_TYPES.TEXT_INPUT,
    pageNumber: 16,
    planType: 'paid',
    title: 'Do you hit the wall, If yes any idea when?'
  },

  {
    id: 'nutrition-carrying',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 17,
    planType: 'paid',
    title: 'How do you carry your nutrition during races?',
    options: [
      { value: 'belt', label: 'Running belt' },
      { value: 'handheld', label: 'Handheld bottles' },
      { value: 'pack', label: 'Hydration pack' },
      { value: 'aid-stations', label: 'Rely on aid stations' }
    ]
  },

  {
    id: 'race-shoes',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 18,
    planType: 'paid',
    title: 'What\'s your race day shoe?',
    description: '(use images of brand logos)',
    options: [
      { value: 'nike', label: 'Nike' },
      { value: 'asics', label: 'ASICS' },
      { value: 'brooks', label: 'Brooks' },
      { value: 'hoka', label: 'Hoka' },
      { value: 'saucony', label: 'Saucony' },
      { value: 'adidas', label: 'Adidas' },
      { value: 'new-balance', label: 'New Balance' },
      { value: 'on-running', label: 'On Running' },
      { value: 'under-armour', label: 'Under Armour' },
      { value: 'puma', label: 'Puma' },
      { value: 'reebok', label: 'Reebok' },
      { value: 'quechua', label: 'Quechua By Decathlon' },
      { value: 'others', label: 'Others' }
    ],
    additionalInfo: 'PS: Do you need suggestions on better running shoes that suit your running style/feet?'
  },

  {
    id: 'running-gadgets',
    type: QUESTION_TYPES.CHECKBOX_GROUP,
    pageNumber: 19,
    planType: 'paid',
    title: 'What Gadgets do you use while running',
    options: [
      { value: 'smart-watch', label: 'Smart watch' },
      { value: 'fitness-band', label: 'Fitness band' },
      { value: 'earphones', label: 'Ear phones' },
      { value: 'heart-rate', label: 'Heart Rate Monitor' },
      { value: 'mobile', label: 'Mobile Phone' },
      { value: 'smart-ring', label: 'Smart ring' },
      { value: 'others', label: 'Others' }
    ]
  },

  {
    id: 'product-recommendations',
    type: QUESTION_TYPES.CHECKBOX_GROUP,
    pageNumber: 20,
    planType: 'paid',
    title: 'Do you need any product recommendations?',
    description: '(we have no vested interests with any of the brands, we are here to help runners)',
    options: [
      { value: 'electrolytes', label: 'Electrolytes' },
      { value: 'salt-capsules', label: 'Salt capsules' },
      { value: 'energy-gels', label: 'Energy gels' },
      { value: 'energy-bars', label: 'Energy bars' },
      { value: 'energy-drinks', label: 'Energy drinks' },
      { value: 'bcaas', label: 'BCAAs' },
      { value: 'proteins', label: 'Proteins' },
      { value: 'accessories', label: 'Accessories' },
      { value: 'shoes', label: 'Shoes' }
    ]
  },

  {
    id: 'post-race-strategy',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 21,
    planType: 'paid',
    title: 'Have you considered your post-race hydration and nutrition strategy?',
    options: [
      { value: 'none', label: 'Can\'t even move a finger to do anything' },
      { value: 'restaurant', label: 'I hog at the nearest restaurant' },
      { value: 'vague', label: 'Vague plan: coconut water, whey protein etc' },
      { value: 'planned', label: 'Yes, absolutely to the point my Nutritionists would get jealous' }
    ]
  },

  {
    id: 'memorable-races',
    type: QUESTION_TYPES.OPEN_TEXT,
    pageNumber: 22,
    planType: 'paid',
    title: 'Can you mention your most memorable races and why?'
  },

  {
    id: 'race-week-nutrition',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 23,
    planType: 'paid',
    title: 'I want the race week nutrition plan',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  },

  {
    id: 'pacing-plan-help',
    type: QUESTION_TYPES.SINGLE_CHOICE,
    pageNumber: 24,
    planType: 'paid',
    title: 'Do you need help in making a pacing plan?',
    description: '(it\'s free of cost)',
    options: [
      { value: 'yes', label: 'Yes please email it to me when its ready' },
      { value: 'no', label: 'No thanks' }
    ]
  }
];

export default ALL_QUESTIONS;
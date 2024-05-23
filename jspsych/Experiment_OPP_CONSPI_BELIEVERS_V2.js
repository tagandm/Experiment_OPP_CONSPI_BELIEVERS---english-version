// LICENCE -----------------------------------------------------------------------------

// Copyright 2023 - Maude Tagand

// Initialize jsPsych -----------------------------------------------------------------
var jsPsych = initJsPsych({
});

// browser exclusion ------------------------------------------------------------------
var browser_check = {
  type: jsPsychBrowserCheck,
  inclusion_function: (data) => {
    return data.browser === 'firefox'|| data.browser === 'chrome' && data.mobile === false
  },
  exclusion_message: (data) => {
    if(data.mobile){
      return "p>You must use a desktop/laptop computer to participate in this experiment.</p>";
    } else if (data.browser !== 'firefox' && data.browser !== 'chrome'){
      return "<p>You must use Chrome or Firefox to complete this experiment.</p>"+
             "<p>If you would like to take part in our study, please copy and paste the experiment link into one of the compatible browsers.</p>";
    }
  }
}

// Create Timeline --------------------------------------------------------------------------
var timeline = [];

// Welcome
var welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>Dear participant,</p>" +
  "<p class='instructions'>This study should take about 20 minutes to complete. It's important that you do the study in single session and do not do any Internet searches during the task.</p>" +
  "<p class='instructions'>You may stop the study at any time. Your answers are anonymous and confidential. " +
  "We are only interested in the statistical trends of the responses, and we will not be able to, nor willing to, identify participants. </p>" +
  "<p class='instructions'>By clicking on \u0022Continue\u0022, you give your consent to participate in this study.</p>",
  choices: ['Continuer']
};

//Instruction Scenario Attention event et non events
var scenario_instruction = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class= 'instructions_questionnary'>In this task, you will read short descriptions of events. " +
  "For each event, we ask you to judge whether you believe that these events actually took place.<br>",
  choices: ['Continue']
};

// Conspiracy
var scenario = [
  
 {number: "1",
  name: "tabacco",
  en_name: "tabacco",
  scenario: "A tobacco company conducted laboratory studies to investigate the effects of tobacco on health. These studies revealed the carcinogenic nature of tobacco. Despite these findings, the company and other tobacco industries publicly denied these scientific findings. Instead, they promoted the false benefits of tobacco through misleading advertisements endorsed by doctors.",
  conspiracy: true,
  date: "2013"},

  {number: "2",
  name: "snowden",
  en_name: "snowden",
  scenario: "The US and UK governments employed mass surveillance programs to access citizens' smartphone data, including contacts, texts, phone conversations, GPS coordinates, and Internet connection data. These practices were based on agreements between major companies such as Apple, Facebook, Google and Microsoft, and national security agencies.",
  conspiracy: true,
  date: "2013"},
  
  {number: "3",
  name: "watergate",
  en_name: "watergate",
  scenario: "The re-election committee of an outgoing US president orchestrated a large-scale operation of political sabotage, including illegal wiretapping, document theft, and intimidation against their political opponents. The president was aware of the operation and attempted to cover it up by concealing facts and obstructing the investigation.",
  conspiracy: true,
  date: "1970"},
   
  {number: "4",
  name: "sang_cont",
  en_name: "blood_cont",
  scenario: "Some French doctors and senior officials knowingly allowed patients to receive HIV-infected blood transfusions based on economic and financial considerations, disregarding moral and health considerations.",
  conspiracy: true,
  date: "1950"},
   
  {number: "5",
  name: "mk_ultra",
  en_name: "mk_ultra",
  scenario: "The US intelligence services established a secret program to develop mind and behaviour manipulation techniques, using drugs, hypnosis, or sensory deprivation. Experimental subjects were recruited without their consent and included psychiatric hospital patients, prisoners, prostitutes, and soldiers.",
  conspiracy: true,
  date: "1940"},
   
  {number: "6",
  name: "irangate",
  en_name: "irangate",
  scenario: "Despite the US government's prohibition on weapons sales to Iran, some government members clandestinely conducted weapons transactions with Iran to negotiate the release of American hostages. The proceeds from these sales were then diverted to finance a rebel group engaged in guerrilla operations in South America.",
  conspiracy: true,
  date: "1980"},
   
  {number: "7",
  name: "dieselgate",
  en_name: "dieselgate",
  scenario: "A car manufacturer tried to bypass environmental regulations by using software to falsify emissions data for some of its vehicles. The software falsified emissions tests to portray the vehicles as less polluting than they actually were.",
  conspiracy: true,
  date: "2015"},
   
  {number: "8",
  name: "adm_Irak",
  en_name: "adm_Irak",
  scenario: "The US government provided false evidence of the presence of weapons of mass destruction (including nuclear, chemical, and biological weapons) to justify a military intervention in Iraq.",
  conspiracy: true,
  date: "2003"},
   
  {number: "9",
  name: "campagne_russe",
  en_name: "campaign_russian",
  scenario: "During democratic elections in Germany, the USA, France, the Netherlands, and the UK, actors linked to the Russian government engaged in information manipulation campaigns to polarize debates and influence election results. These activities included hacking and the targeted dissemination of disinformation via social media.",
  conspiracy: true,
  date: "2016"},
   
  {number: "10",
  name: "panama",
  en_name: "panama",
  scenario: "The leaders of several European countries, including Russia, Ukraine, and Iceland, have been implicated in concealing financial activities through the use of shell companies, often for purposes of tax evasion.",
  conspiracy: true,
  date: "2016"},
  
  {number: "11",
  name: "cambridge_analytica",
  en_name: "cambridge_analytica",
  scenario: "A British political consulting firm illegally obtained and exploited personal data from social network users for the purposes of political manipulation and influence. The data was used to create psychological and behavioural profiles for personalized political advertisements during the Brexit debates.",
  conspiracy: true,
  date: "2016"},
   
  {number: "12",
  name: "hacking_team",
  en_name: "hacking_team",
  scenario: "An Italian cybersecurity company has emerged specializing in the development and sale of surveillance software to governments and intelligence services in countries such as Saudi Arabia, Egypt, the United Arab Emirates, Morocco, Sudan and Kazakhstan.",
  conspiracy: true,
  date: "2015"},
   
  {number: "13",
  name: "fifa",
  en_name: "fifa",
  scenario: "In the world of soccer, a vast network of corruption on a global scale involved FIFA executives, sports marketing companies, the media, and government officials. Corruption acts such as bribes, illegal commissions and fraud in various fields were perpetrated. Millions of dollars were secretly exchanged to influence political decisions and enrich those involved.",
  conspiracy: true,
  date: "2015"},
   
  {number: "14",
  name: "tonkin",
  en_name: "tonkin",
  scenario: "To justify military escalation in the Vietnam War, the US administration claimed that US warships had been attacked by the North Vietnamese navy. These attacks never actually took place.",
  conspiracy: true,
  date: "1964"},
   
  {number: "15",
  name: "tuskeegee",
  en_name: "tuskeegee",
  scenario: "In a series of studies designed to understand the natural evolution of syphilis, the US Public Health Service and one of its universities hid their diagnosis from African-American men and led them to believe they were receiving medical care for their health problems, when, in fact, they were left untreated, even after the discovery of an effective cure.",
  conspiracy: true,
  date: "1950"},
   
  {number: "16",
  name: "lavon",
  en_name: "lavon",
  scenario: "Israeli intelligence services attempted to carry out a bomb attack on Western facilities in Egypt and pass it off as attacks by Egyptian extremists. The aim was to discredit the Egyptian government and encourage Western countries to maintain their support for Israel.",
  conspiracy: true,
  date: "1960"},
   
  {number: "17",
  name: "ajax",
  en_name: "ajax",
  scenario: "American and British intelligence services orchestrated clandestine actions, propaganda, demonstrations, and political manipulation to foster a coup d'état against the Iranian prime minister, who sought to nationalize the country's oil industry. Their aim was to preserve their economic and geopolitical interests in Iran.",
  conspiracy: true,
  date: "1953"},
   
  {number: "18",
  name: "paperclip",
  en_name: "paperclip",
  scenario: "The US secretly integrated Nazi scientists into military and scientific research and development programs, allowing them to escape prosecution and enjoy immunity in exchange for their expertise.",
  conspiracy: true,
  date: "1945-1959"},
   
  {number: "19",
  name: "condor",
  en_name: "condor",
  scenario: "Several Latin American countries, including Argentina, Chile, Paraguay, Uruguay, and Brazil, coordinated efforts to implement cross-border actions of political repression, including surveillance, kidnapping, torture, and assassination of political dissidents and activists suspected of threatening the regimes in power.",
  conspiracy: true,
  date: "1970-1980"},
   
  {number: "20",
  name: "hormone",
  en_name: "hormone",
  scenario: "Growth hormones contaminated with brain-damaging substances were marketed even though French laboratories and health authorities were aware of the contamination risks. The pharmaceutical companies marketing them chose to withhold information on the contamination for financial reasons.",
  conspiracy: true,
  date: "1980"},
   
  {number: "21",
  name: "indus_sucre",
  en_name: "sugar_indus",
  scenario: "The sugar industry funded research aimed at minimizing the links between sugar and health problems. These studies were designed to emphasize other factors, such as saturated fats, as primary contributors to heart disease.",
  conspiracy: true,
  date: "1960"},
  
  {number: "22",
  name: "indus_climat",
  en_name: "climat_indus",
  scenario: "Some major oil companies undertook disinformation campaigns to sow doubt about the reality of climate change and the role of fossil fuels in it. These companies deliberately downplayed the effects of climate change and exerted pressure to block policies combating global warming.",
  conspiracy: true,
  date: "1960-2010"},
  
  {number: "23",
  name: "rainbow_warrior",
  en_name: "rainbow_warrior",
  scenario: "French intelligence services organized a bomb attack on a Greenpeace ship to halt its activities against French nuclear testing in the Pacific.",
  conspiracy: true,
  date: "1985"},
  
  {number: "24",
  name: "sterilization",
  en_name: "sterilization",
  scenario: "The Peruvian government implemented a program of forced sterilization of thousands of indigenous women to control births within this population.",
  conspiracy: true,
  date: "1990-2000"},
  
  {number: "25",
  name: "chaos",
  en_name: "chaos",
  scenario: "The US intelligence services conducted a secret operation to monitor and infiltrate anti-government groups and movements involved in protests against the Vietnam War.",
  conspiracy: true,
  date: "1960-1970"},
  
  {number: "26",
  name: "afrikaner_broed",
  en_name: "afrikaner_broed",
  scenario: "A South African secret organization composed of descendants of Dutch settlers helped maintain and promote the apartheid system of racial segregation.",
  conspiracy: true,
  date: "1920"},
  
  {number: "27",
  name: "dsk",
  en_name: "dsk",
  scenario: "Political opponents of a French presidential candidate orchestrated his arrest on false charges of sexual assault to discredit him during his presidential campaign.",
  conspiracy: false,
  date: "2011"},
  
  {number: "28",
  name: "somme",
  en_name: "paris_river",
  scenario: "The technical services of the French state deliberately triggered the flooding of a valley upstream from Paris. This action resulted in significant material damage to local populations, done in favour of protecting the capital, which was also threatened by rising waters.",
  conspiracy: false,
  date: "2001"},
  
  {number: "29",
  name: "kennedy",
  en_name: "kennedy",
  scenario: "US intelligence services orchestrated the assassination of a US president due to disagreements with him, particularly regarding military operations.",
  conspiracy: false,
  date: "NA"},
  
  {number: "30",
  name: "grand_remp",
  en_name: "great_rep",
  scenario: "Some European politicians and intellectuals are encouraging and planning the replacement of European population by people from Africa, with the aim —among others— to destroy white European identities.",
  conspiracy: false,
  date: "NA"},
   
  {number: "31",
  name: "franc_maçon",
  en_name: "freemason",
  scenario: "Members of Masonic lodges belonging to the intellectual and political elite played a leading role in the planning of the French Revolution. They overthrew the monarchy and established a republic to promote their economic interests and consolidate their political power.",
  conspiracy: false,
  date: "1789"},
   
  {number: "32",
  name: "nouvel_ordre_mondial",
  en_name: "new_world_order",
  scenario: "Wealthy and influential families aspire to establish a world government by uniting all nations under centralized economic and media control, to institute a global police state.",
  conspiracy: false,
  date: "NA"},
   
  {number: "33",
  name: "cgmt_cl",
  en_name: "climate_change",
  scenario: "Governments and companies invent data on climate change and used them to justify implementing new taxes and regulations, and exert greater control over the economy.",
  conspiracy: false,
  date: "NA"},
   
  {number: "34",
  name: "sida",
  en_name: "aids",
  scenario: "Western countries engineered and disseminated the AIDS virus to harm politically unstable regions, developing countries, and strategically significant areas. The African continent has been among the regions most affected by these practices with the intentional weakening of local populations contributing to their dependency on pharmaceutical companies.",
  conspiracy: false,
  date: "NA"},
   
  {number: "35",
  name: "ben_laden",
  en_name: "ben_laden",
  scenario: "The US secret services orchestrated the arrest and reported death of Osama bin Laden, the founder of Al Qaeda who actually died several years earlier. This media maneuvers aimed at bolstering the popularity of the incumbent president.",
  conspiracy: false,
  date: "2011"},
  
  {number: "36",
  name: "chemtrail",
  en_name: "chemtrail",
  scenario: "The trails left by aircraft contain chemicals whose existence and function are hidden from the public by governments.",
  conspiracy: false,
  date: "NA"},
   
  {number: "37",
  name: "indus_agro",
  en_name: "agro_indus",
  scenario: "The agri-food industries are deliberately poisoning the population to benefit pharmaceutical industries and increase profits.",
  conspiracy: false,
  date: "NA"},
   
  {number: "38",
  name: "11_sept",
  en_name: "sept_11th",
  scenario: "Despite being aware of the preparation of a terrorist attack by Al-Qaeda, the US government allowed events to unfold to justify military interventions in the Middle East to protect its financial interests.",
  conspiracy: false,
  date: "2001"},
   
  {number: "39",
  name: "avion",
  en_name: "plane",
  scenario: "The plane crash, which resulted in the deaths of the former Polish prime minister and many other government members, was organized by the political opposition with the assistance of Russian agents.",
  conspiracy: false,
  date: "2014"},
   
  {number: "40",
  name: "haarp",
  en_name: "haarp",
  scenario: "The US government possesses secret technology enabling it to manipulate weather conditions and induce natural disasters such as storms and cyclones. It uses this technology to create crises and manipulate the media agenda and migratory flows.",
  conspiracy: false,
  date: "NA"},
   
  {number: "41",
  name: "hydroxychloroquine",
  en_name: "hydroxychloroquine",
  scenario: "The French government has refused to recommend hydroxychloroquine, which is effective against COVID-19, as a treatment, to allow pharmaceutical companies to develop vaccines that are more lucrative.",
  conspiracy: false,
  date: "2020"},
   
  {number: "42",
  name: "labo_covid",
  en_name: "labo_covid",
  scenario: "The Chinese government created COVID-19 in a laboratory and deliberately used it as a biological weapon to weaken Western countries economically and geopolitically.",
  conspiracy: false,
  date: "2020"},
   
  {number: "43",
  name: "vaccin_hepatite_B",
  en_name: "hepatite_B_vaccine",
  scenario: "Certain scientists have been bribed by pharmaceutical companies to manipulate data and conceal the fact that the hepatitis B vaccine could foster the development of multiple sclerosis.",
  conspiracy: false,
  date: "1990"},
   
  {number: "44",
  name: "lune",
  en_name: "moon",
  scenario: "During the Cold War, the US government and NASA staged the successful Apollo lunar landing missions as a demonstration of force against the Russians.",
  conspiracy: false,
  date: "1969"}, 
   
  {number: "45",
  name: "ogm",
  en_name: "gmo",
  scenario: "Certain agri-food companies driven by economic motives continued to market GMOs (genetically modified organisms) after the publication of a scientific report demonstrating they were dangerous.",
  conspiracy: false,
  date: "NA"},
  
  {number: "46",
  name: "loterie",
  en_name: "lottery",
  scenario: "Certain governments and secret groups manipulate and rig winning lottery numbers to prevent individuals with modest incomes from becoming wealthy, and to take some of the population's money.",
  conspiracy: false,
  date: "NA"},
  
  {number: "47",
  name: "indus_boissons",
  en_name: "beverage_indus",
  scenario: "Some soda companies secretly add caffeine to their recipes to create a dependency on their products and ultimately generate more profits.",
  conspiracy: false,
  date: "NA"},
  
  {number: "48",
  name: "tmps_reaction",
  en_name: "reaction_time",
  scenario: "Some media outlets fabricate the reactions of public figures with whom they politically disagree when these figures appear on television. The aim is to portray them as less competent and, ultimately, to influence public opinion.",
  conspiracy: false,
  date: "NA"},
  
  {number: "49",
  name: "juif",
  en_name: "jew",
  scenario: "Jewish intellectuals, politicians, and businessmen control governments, media and financial institutions to further the interests of the Jewish community.",
  conspiracy: false,
  date: "NA"},
   
  {number: "50",
  name: "lady_diana",
  en_name: "lady_diana",
  scenario: "At the request of the royal family, the British intelligence services murdered a Princess of Wales, making it appear as a car accident.",
  conspiracy: false,
  date: "1997"},
  
  {number: "51",
  name: "ondes_nocives",
  en_name: "harmful_waves",
  scenario: "To protect their profits, telecom companies conceal scientific data indicating that electromagnetic waves emitted by electronic devices such as cell phones, cell phone antennas, and wireless networks have harmful effects on human health (they can cause cancer, sleep disorders, etc.).",
  conspiracy: false,
  date: "NA"},
  
  {number: "52",
  name: "lsd_cia",
  en_name: "lsd_cia",
  scenario: "As part of a covert operation, the US intelligence services poisoned the inhabitants of a French village with LSD transported by airplane. As a result, 5 people died and 50 were committed.",
  conspiracy: false,
  date: "1951"},
]

true_side = jsPsych.randomization.sampleWithoutReplacement(["true_right", "true_left"], 1);

//Procedure Categorization
var scenario_categorization = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function(){
  return "<p class='instructions'>"+jsPsych.timelineVariable ('scenario')+"</p>" + "<p class='stimuli'>In your opinion, this statement is...<br></p>"},
  choices: function (){
    if (true_side == "true_right"){
      return ["false", "true"]
    } else {
      return ["true", "false"]
    }
  }
}
  
var scenario_procedure = {
  timeline: [scenario_categorization],
  timeline_variables: scenario,
  randomize_order: false,
    data: {
      number: jsPsych.timelineVariable('number'),
      name: jsPsych.timelineVariable('name'),
      en_name: jsPsych.timelineVariable('en_name'),
      group: jsPsych.timelineVariable('conspiracy'),
      date: jsPsych.timelineVariable('date')
    },
  }      
        
//Survey
var instruction_questionnary = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p class='instructions_questionnary'>The task is now complete. We are now going to ask you a few questions about yourself and your worldview.</p>" ,
  choices: ['Continue']
}

//Attention check
var attention_check = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>When asked for your favorite color, please enter the word \u0022baguette\u0022 instead in the box below.</p>" +
              "<p class='instructions_questionnary'>Based on the text above, what is your favorite color?</p>",
      name: 'attention_check',
      required: true
    }
  ],
  button_label: 'Continue'
}

///Questionnary CMQ
var cmq_label = [
  "<br>0%<br><br>certainly not", 
  "<br>10%<br><br>extremely unlikely",
  "<br>20%<br><br>very unlikely",
  "<br>30%<br><br>unlikely",
  "<br>40%<br><br>somewhat unlikely",
  "<br>50%<br><br>undecided",
  "<br>60%<br><br>somewhat likely",
  "<br>70%<br><br>likely",
  "<br>80%<br><br>very likely", 
  "<br>90%<br><br>extremely likely", 
  "<br>100%<br><br>certainly"
  ];
          
var cmq_questionnary = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnary'>For each of the statements below, please choose the appropriate number to indicate the extent to which you think these statements are true.</br></p>"+ 
  "<p class='instructions_questionnary'>There is no objectively true or false answer, we are interested in your personal opinions.</p>"+
  "<p class='instructions_questionnary'>I think that...",
  questions: [
       {prompt: "...many very important things happen in the world, which the public is never informed about.", name: 'cmq_1', labels: cmq_label, required: true},
       {prompt: "...politicians usually do not tell us the true motives for their decisions.", name: 'cmq_2', labels: cmq_label, required: true},
       {prompt: "...government agencies closely monitor all citizens.", name: 'cmq_3', labels: cmq_label, required: true},
       {prompt: "...events which superficially seem to lack a connection are often the result of secret activities.", name: 'cmq_4', labels: cmq_label, required: true},
       {prompt: "...there are secret organizations that greatly influence political decisions.", name: 'cmq_5', labels: cmq_label, required: true},  
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

//Questionnary CMS
var cms_label = [
"<br>1<br><br>Strongly disagree",
"<br>2",
"<br>3",
"<br>4",
"<br>5",
"<br>6",
"<br>7<br><br>Strongly agree" 
  ];
          
var cms_questionnary = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnary'>For each of the statements below, please choose the appropriate number to indicate the extent to which you think these statements are true.</br></p>"+ 
  "<p class='instructions_questionnary'>There is no objectively true or false answer, we are interested in your personal opinions.</p>",
  questions: [
       {prompt: "There are many very important things happening in the world about which the public is not informed.", name: 'cms_1', labels: cms_label, required: true},
       {prompt: "Those at the top do whatever they want.", name: 'cms_2', labels: cms_label, required: true},
       {prompt: "A few powerful groups of people determine the destiny of millions.", name: 'cmq_3', labels: cms_label, required: true},
       {prompt: "There are secret organizations that have great influence on political decisions.", name: 'cms_4', labels: cms_label, required: true},
       {prompt: "I think that the various conspiracy theories circulating in the media are absolute nonsense.", name: 'cms_5R', labels: cms_label, required: true},
       {prompt: "Politicians and other leaders are nothing but the string puppets of powers operating in the background.", name: 'cms_6', labels: cms_label, required: true},
       {prompt: "Most people do not recognize to what extent our life is determined by conspiracies that are concocted in secret.", name: 'cms_7', labels: cms_label, required: true},
       {prompt: "There is no good reason to distrust governments, intelligence agencies, or the media.", name: 'cms_8R', labels: cms_label, required: true},
       {prompt: "International intelligence agencies have their hands in our everyday life to a much larger degree than people assume.", name: 'cms_9', labels: cms_label, required: true},
       {prompt: "Secret organizations can manipulate people psychologically so that they do not notice how their life is being controlled by others.", name: 'cms_10', labels: cms_label, required: true},
       {prompt: "There are certain political circles with secret agendas that are very influential.", name: 'cms_11', labels: cms_label, required: true},
       {prompt: "Most people do not see how much our lives are determined by plots hatched in secret.", name: 'cms_12', labels: cms_label, required: true}
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

//Questionnary SICBS
var sicbs_label = [
  "<br>1<br><br>Completely false",
  "<br>2",
  "<br>3",
  "<br>4",
  "<br>5",
  "<br>6",
  "<br>7",
  "<br>8",
  "<br>9<br><br>Completely true"
]

var sicbs_questionnary = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnary'>Some political and social events are debated (for example 09/11 attacks, the death of Lady Diana, the assassination of John F. Kennedy). "+
  "It is suggested that the “official version” of these events could be an attempt to hide the truth to the public. "+
  "This “official version” could mask the fact that these events have been planned and secretly prepared by a covert alliance of powerful individuals or organizations (for example secret services or government). What do you think?</p>"+
  "<p class='instructions_questionnary'>To answer, please indicate to what extent the sentence below represents how you think about this: </p>",
  questions: [
    {
      prompt: "I think that the official version of the events given by the authorities very often hides the truth.",
      name: "sicbs",
      labels: sicbs_label,
      required: true
    }
  ]
}

/// Demographic Questions
var instruction_demographic_questionnary = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions_questionnary'>You have almost completed the study. Please answer these last questions.</p>",
  choices: ['Continue']
}
          
var genre = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>What gender do you identify as?</p>", 
      options: ["Woman", "Man","Other"],
      name: 'genre',
      required: true,
      horizontal: true
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}
          
var age = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>How old are you? (in year, just a number, for instance 32)</p>",
      placeholder: 'XX',
      name: 'age',
      required: true
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var interest_label = [
  "<br>1<br><br>Completely disagree", 
  "<br>2",
  "<br>3",
  "<br>4",
  "<br>5",
  "<br>6",
  "<br>7<br><br>Completely agree"
  ];

var political_label = [
  "<br>1<br><br>Radical left",
  "<br>2",
  "<br>3",
  "<br>4",
  "<br>5",
  "<br>6",
  "<br>7<br><br>Radical right"
];

var interest_questionnary = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnary'>Please answer on the following statements:</p>",
  questions: [
       {prompt: "I'm interested in political and geopolitical news.", name: 'geopolitical', labels: interest_label, required: true},
       {prompt: "I'm interested in history.", name: 'histoire', labels: interest_label, required: true},
       {prompt: "<br><br><br>On the political continuum, I position myself:", name:'political_attitude', labels: political_label, required: true},
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var search_check = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>Did you do any Internet searches during the task?</p>" +
      "<p class='instructions_questionnary'>Please answer this question honestly, and we assure you that your answer will have no impact on your remuneration.</p>", 
      options: ["yes", "no"],
      name: 'research_check',
      required: true,
      horizontal: true
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var comment = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions'>Do you have any comments about the study?</p>",
      name: 'comment',
      rows: 5
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var waiting_demand = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>You have now finished answering all the questions. " +
  "After clicking continue, the data will be saved while loading. " +
  "Please wait until the next page appears to exit. " +
  "Otherwise, we will have no proof that you have completed the study.</p>",
  choices: ['Continue']
}

//prolific ----------------------------------------------------------------------------------
var prolific = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p class='instructions'>You have finished the last task. Thanks for participating!</p>"+
  "<p class='instructions'>Please wait a moment, you will automatically be redirected to prolific.</p>",
trial_duration: 3000,
  trial_duration: 3000,
  choices: "NO_KEYS",
  on_finish: function(){
  window.location.href = "https://app.prolific.co/submissions/complete?cc=XXXXXX";
  }
}
var prolific_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
var study_id = jsPsych.data.getURLVariable('STUDY_ID');
var session_id = jsPsych.data.getURLVariable('SESSION_ID');
          
//Save data ---------------------------------------------------------------------------------
const subject_id = jsPsych.randomization.randomID(10);
const filename = `${subject_id}.csv`;
const experiment_id = "WwgAzY6Zfcps";

jsPsych.data.addProperties({
  subject_id: subject_id,
  prolific_id: prolific_id,
  study_id: study_id,
  session_id: session_id,
  true_side: true_side
})

var save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: experiment_id,
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
}

//timeline
timeline.push 
  (browser_check,
  welcome,
  scenario_instruction,
  scenario_procedure,
  instruction_questionnary,
  attention_check,
  cmq_questionnary,
  cms_questionnary,
  sicbs_questionnary,
  instruction_demographic_questionnary,
  genre,
  age,
  interest_questionnary,
  search_check,
  comment,
  waiting_demand,
  save_data,
  prolific)

jsPsych.run(timeline)
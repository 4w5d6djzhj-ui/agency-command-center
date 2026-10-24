// Match / Fit / Ask for every scenario x communication style, written from the actual drafts.
// label = what the move says (quotes are the draft's own words), why = why it fits this style,
// say = the same move spoken on a call. Tokens: {first} {rep} {proposed} {current} {send}.
const XMOVES = {
  raw: {
    story: {
      m: { label: "“I read your note twice”", why: "A Storyteller wrote you a story. Showing you read it is the match: a person answered, not a form.", say: "Hi {first}, it's {rep} from your local office. I'm the one taking care of your quote, and I read your note twice." },
      f: { label: "What it covers, and who picks up the phone", why: "They buy the relationship. Explain the coverage in plain words, and tell them who they'll talk to when something happens.", say: "I'll walk you through what it covers and why, so you know what you have before you ever need it. And it's me who picks up the phone." },
      a: { label: "“Are you opposed to a quick, no-obligation call this week?”", why: "A no-question. Saying no feels safe, and “no, I'm not opposed” is a yes. “You pick the time” keeps it theirs.", say: "Do you have ten minutes now, or is later this week better? You pick the time." },
    },
    asker: {
      m: { label: "“You asked for specifics, so here they are”", why: "Questioners open with questions. Lead with the number and the line-by-line before anything else.", say: "Hi {first}, it's {rep} from your local office. You asked for specifics, so here's the number first: {proposed} a month for the coverage you asked about." },
      f: { label: "Price next to how it pays", why: "They compare. Mark the two places a lower price usually comes from a coverage cut, so the comparison is fair, not just cheap.", say: "Every discount is already applied, and I marked the two places where a cheaper quote usually cuts coverage, so you can compare fairly." },
      a: { label: "“How much are you paying now?”", why: "One number they can answer in a line, plus candor: if you can't beat it, you'll say so.", say: "How much are you paying now? If I can beat it, I'll tell you. If I can't, I'll tell you that too." },
    },
    doer: {
      m: { label: "“I did the work already”", why: "Doers write one line. Match it: the quote is done, the price comes first, nothing to fill out.", say: "Hi {first}, it's {rep} from your local office. I did the work already: your quote is ready, nothing to fill out." },
      f: { label: "We handle the paperwork", why: "Effort is what a Doer weighs. Say how little it takes: if it's a yes, the paperwork is on us.", say: "If you say yes, we handle the paperwork on our end. Five minutes covers anything unclear." },
      a: { label: "“AM or PM?”", why: "Two easy choices instead of an open question. The fastest possible yes.", say: "Want to go over it now, or is AM or PM tomorrow better?" },
    },
    thinker: {
      m: { label: "“Read it on your own time”", why: "Thinkers slow down to decide. Hand them the quote and the time to read it.", say: "Hi {first}, it's {rep} from your local office. Your quote is ready, and I'll send it so you can read it on your own time." },
      f: { label: "The one date that matters", why: "No decision today. The renewal date is the reason to look, and you say when you'll check back.", say: "No need to decide anything today. The date that matters is your renewal, because that's the day switching costs nothing. I'll check back a week before." },
      a: { label: "“Would it be a terrible idea to take a closer look before then?”", why: "A no-question with explicit control: “You decide.” Nothing is pushed.", say: "Would it be a terrible idea to take a closer look before then? You decide." },
    },
  },
  current: {
    story: {
      m: { label: "“Noticed something kind of… strange”", why: "Something unexpected, plus proof you looked at their file personally. Storytellers notice when someone actually looked.", say: "Hi {first}, it's {rep}. I was reviewing your account and noticed something kind of strange." },
      f: { label: "Protecting you, and your income", why: "Make it about the people they protect. The policies the bank and the state require protect someone else.", say: "Your home is with another company, and I don't see a life policy. The policies the bank and the state require protect them. I want to make sure you and your income are protected." },
      a: { label: "“Are you opposed to a quick, no-obligation call this week to look at it together?”", why: "“Together” keeps it a conversation, and saying no feels safe.", say: "Are you opposed to looking at it together for ten minutes this week?" },
    },
    asker: {
      m: { label: "“Your home insurance is elsewhere”", why: "State the finding first, plainly. Questioners want the fact before the story.", say: "Hi {first}, it's {rep}. Reviewing your account, I noticed your home insurance is with another company." },
      f: { label: "The bundle math, side by side", why: "The discount applies to both policies. Every figure on one page, plus the two details you need to run the exact number.", say: "The bundle discount applies to both policies, so your auto gets cheaper too. To run the exact number I need two things from your home policy: the dwelling coverage and the deductible." },
      a: { label: "“How much are you paying on the home now?”", why: "One number to answer, and a promise to tell them if you can't beat it.", say: "How much are you paying on the home now? If I can beat it, I'll tell you." },
    },
    doer: {
      m: { label: "“Noticed your home insurance is elsewhere”", why: "One line, one finding. No preamble.", say: "Hi {first}, it's {rep}. Quick one: your home insurance is elsewhere." },
      f: { label: "Quoted from what's on file", why: "No forms, ready before you talk, and the switch handled on our end. The work is the message.", say: "I can quote it from what I already have on file. No forms, and if it's a yes, we handle the switch." },
      a: { label: "“Want the number? Reply YES”", why: "One word to answer, and the number today.", say: "Want the number? I can have it to you today." },
    },
    thinker: {
      m: { label: "“I was reviewing your account”", why: "Calm and specific: what you noticed, nothing asked yet. Thinkers stay with you when nothing is rushed.", say: "Hi {first}, it's {rep}. I was reviewing your account and noticed your home insurance is elsewhere. Nothing needed today." },
      f: { label: "Line by line, on their own time", why: "Put the bundle next to what they have now, and name the renewal as the one day switching costs nothing.", say: "I'll send the bundled option next to what you have now, line by line, so you can look on your own time before your home renewal." },
      a: { label: "“Would it be a terrible idea to take a closer look before then?”", why: "They answer when they're ready, and you answer anything they flag.", say: "Would it be a terrible idea to take a closer look before then? You decide." },
    },
  },
  winback: {
    story: {
      m: { label: "“It has been exactly one year since you left”", why: "A precise anniversary and an honest “we were sad to see you go.” Storytellers remember how leaving felt.", say: "Hi {first}, it's {rep}. It's been exactly one year since you left, and we were sad to see you go." },
      f: { label: "A promise kept", why: "You said you'd work to earn them back. The quote with the same coverage is the proof, and you thank them for the chance.", say: "As promised, I prepared a quote with the same coverage you had. Thank you for giving us a chance to earn your business back." },
      a: { label: "“Out of curiosity, why did you switch?”", why: "An invitation to tell the story. Their answer tells you what would bring them back.", say: "Out of curiosity, why did you switch?" },
    },
    asker: {
      m: { label: "“It has been exactly one year since you left”", why: "Just the date. Questioners want the facts, not the feelings.", say: "Hi {first}, it's {rep}. It's been a year since you left, and our rates have changed." },
      f: { label: "The discount is back, line by line", why: "The accident-free discount returns at the same limits, side by side with what they have. A new fact makes coming back a fresh decision.", say: "I can give you back your accident-free discount on all your cars: {proposed} a month for the same limits. I'll send it side by side." },
      a: { label: "“Are you still paying {current}/mo?”", why: "Their own number, back to them. If price was why they left, one figure reopens it.", say: "Are you still paying {current} a month?" },
    },
    doer: {
      m: { label: "“I hope you'll give me a chance to win you back”", why: "Short and direct: a year, and an honest ask for another chance.", say: "Hi {first}, it's {rep}. It's been a year since you left, and I'd like a chance to win you back." },
      f: { label: "The quote is done", why: "Same coverage, discount back, nothing to fill out, switch handled. All they do is say yes.", say: "The quote is done, with your discount back. Nothing to fill out, and we handle the switch." },
      a: { label: "“Is AM or PM better for a quick call?”", why: "Two choices, both easy.", say: "Is AM or PM better to go over it?" },
    },
    thinker: {
      m: { label: "“It has been exactly one year since you left”", why: "A plain date and no pressure. Thinkers need room to reconsider.", say: "Hi {first}, it's {rep}. It's been a year since you left, and I'm not calling to push." },
      f: { label: "Compare it without talking to anyone", why: "Same limits, the discount they'd get back, line by line, and no need to decide before renewal.", say: "I prepared a quote with the same limits you had and the discount you'd get back. I'll send it so you can compare it on your own." },
      a: { label: "“Would it be a terrible idea to compare them?”", why: "Explicit control, and a check-back tied to their date.", say: "Would it be a terrible idea to compare them before your renewal? You decide." },
    },
  },
  xdate: {
    story: {
      m: { label: "“You better be staying out of trouble! 😉”", why: "Light humor honors the six months since you talked. Storytellers like being remembered as people.", say: "Hi {first}, it's {rep}. It's been six months since we quoted you. Staying out of trouble?" },
      f: { label: "A custom proposal, before the date", why: "Prepared for them and sent before the renewal, because that's the one date switching costs nothing.", say: "Your renewal is coming up, so I prepared a proposal for you. I'd rather you see it before the renewal than after." },
      a: { label: "“Should I walk you through it, or would you rather read it first?”", why: "Two good options, both theirs. Either answer moves it forward.", say: "Should I walk you through it now, or would you rather read it first?" },
    },
    asker: {
      m: { label: "“It's been 6 months since we last quoted you”", why: "The fact, no small talk.", say: "Hi {first}, it's {rep}. It's been six months since we quoted you, and our rates have changed." },
      f: { label: "New rates, next to the last quote", why: "The new number with every discount, beside the old quote and their renewal offer, line by line.", say: "It's {proposed} a month for the same coverage, with every discount applied. I'll put it next to your renewal offer, line by line." },
      a: { label: "“Are you still paying {current}/mo?”", why: "Their number, so the comparison is real.", say: "Are you still paying {current} a month?" },
    },
    doer: {
      m: { label: "“Staying out of trouble? 😉”", why: "One light line, then straight to it.", say: "Hi {first}, it's {rep}. Staying out of trouble? Your renewal's coming up." },
      f: { label: "Nothing to do but yes or no", why: "The proposal is done and the switch is on us. Say how little it takes.", say: "The new proposal is done. Nothing for you to do but say yes or no, and we handle the switch." },
      a: { label: "“If no longer interested, simply reply NO. If yes, AM or PM?”", why: "The easiest possible out, and the easiest possible yes.", say: "If it's a no, just say so. If yes, AM or PM?" },
    },
    thinker: {
      m: { label: "“It's been 6 months since we last quoted you”", why: "Calm, factual, no rush.", say: "Hi {first}, it's {rep}. It's been six months since we quoted you. No rush on anything." },
      f: { label: "Why now: the renewal date", why: "A detailed proposal with every option, sent now so they can compare on their own time before the one day switching costs nothing.", say: "Our rates have changed, so I prepared a detailed proposal. I'm sending it now so you have time to compare before your renewal." },
      a: { label: "“Would it be a terrible idea to take a closer look before you renew?”", why: "A no-question, with the decision left with them.", say: "Would it be a terrible idea to take a closer look before you renew? You decide." },
    },
  },
  following: {
    story: {
      m: { label: "“I haven't heard back from you in a while”", why: "Say who you are and name the gap kindly. Storytellers go quiet when they feel they've let you down.", say: "Hi {first}, it's {rep} from your local office. I haven't heard back from you in a while about your quote." },
      f: { label: "“I'd hate to feel like I'm bothering you”", why: "Name the awkwardness. For a Storyteller the relationship is the reason to answer, so here the apology is the point.", say: "I'd hate to feel like I'm bothering you." },
      a: { label: "“Just let me know, and I'll remove you from my follow-up list”", why: "Going another direction is okay, and saying so is easy. Taking away the guilt gets the reply.", say: "If you went another direction, that's okay. Just let me know and I'll take you off my list." },
    },
    asker: {
      m: { label: "“Did you see my email with the quote…?”", why: "Point to the numbers they already have. Questioners stall on details, not feelings.", say: "Hi {first}, it's {rep}. Did you get a chance to see the quote at {proposed} a month, line by line?" },
      f: { label: "Still good, and what would change it", why: "The quote holds for now, rates move, and a better number is welcome next to ours. Candor keeps the comparison open.", say: "It's still good for now. If you found a better number, I'd want to see it next to ours; if it's close, I can usually find the difference." },
      a: { label: "“Are you still shopping, or did you go another direction?”", why: "Either answer is fine, and one line is enough.", say: "Are you still shopping, or did you go another direction? Either answer is fine." },
    },
    doer: {
      m: { label: "“Did you see my email with the quote?”", why: "One line. Doers don't need the backstory.", say: "Hi {first}, it's {rep}. Did you see the quote?" },
      f: { label: "“I'm starting to feel like I'm bugging you”", why: "Name the silence in eight words, then get out of the way.", say: "I'm starting to feel like I'm bugging you." },
      a: { label: "“YES or NO is all I need”", why: "A one-word answer is the easiest reply there is.", say: "Should I keep following up? Yes or no is all I need." },
    },
    thinker: {
      m: { label: "“I know this is a big decision”", why: "Meet the hesitation: a lot to read, and a real decision.", say: "Hi {first}, it's {rep}. I know this is a big decision, and I sent you a lot to read." },
      f: { label: "Take your time; nobody is chasing you", why: "The proposal stays put, there's no pressure, and you'll check back a week before renewal. Space is what a Thinker needs to answer.", say: "Take your time. The proposal stays where it is, and I'll check back a week before your renewal." },
      a: { label: "“What would need to be true for this to make sense for you?”", why: "Turns “let me think” into the one thing they'd need to know.", say: "What would need to be true for this to make sense for you?" },
    },
  },
};

// Where Fit and Ask begin inside each text message (Match is everything before Fit).
const XSMS = {
  raw: { story: ["it's in your email with a short note", "Are you opposed"], asker: ["the limits and options are in your email", "How much are you paying now?"], doer: ["If you say yes, we handle the paperwork", "AM or PM?"], thinker: ["No rush; I'll check back", "Would it be a terrible idea"] },
  current: { story: ["your home insurance is elsewhere, and I don't see", "Are you opposed"], asker: ["Bundling home + auto", "How much are you paying on the home now?"], doer: ["I can quote it from what I already have", "Want the number?"], thinker: ["No action needed today", "Would it be a terrible idea"] },
  winback: { story: ["As promised, I prepared a quote", "Out of curiosity"], asker: ["Our rates have changed", "Are you still paying"], doer: ["I prepared the quote already", "Is AM or PM better"], thinker: ["I prepared a quote for your cars", "Would it be a terrible idea"] },
  xdate: { story: ["Your renewal is coming up", "Should I walk you through it"], asker: ["I know we weren't able to help you then", "Are you still paying"], doer: ["Your renewal is coming up", "If no longer interested"], thinker: ["Our rates have changed", "Would it be a terrible idea"] },
  following: { story: ["I'd hate to feel", "If you went another direction"], asker: ["It's still good for now", "Still shopping, or went another direction?"], doer: ["I'm starting to feel like I'm bugging you", "Should I keep following up?"], thinker: ["Take your time", "What would need to be true"] },
};

const XVM = {
  raw: "Hi {first}, it's {rep} from your local office. I'm the one taking care of the quote you requested. I'll {send} you so you have my number.",
  current: "Hi {first}, it's {rep} from your office. I was reviewing your account and noticed something worth a quick look. I'll {send} you the details.",
  winback: "Hi {first}, it's {rep}. It's been a year since you left, and I prepared something for you. I'll {send} you so it's easy to reply.",
  xdate: "Hi {first}, it's {rep}. Your renewal is coming up and your proposal is ready. I'll {send} it over; reply whenever it works for you.",
  following: "Hi {first}, it's {rep}. Just making sure you got the quote. No pressure; I'll {send} you so a one-word reply is all it takes.",
};

const XESSENCE = {
  story: "Answer something they said. Offer a real person to call.",
  asker: "Figures first, line by line. Answer every question before adding anything.",
  doer: "Short. The work already done. One easy choice.",
  thinker: "No pressure. Something to think with. A date for the next touch.",
};

// Style levers: where each communication style sets the message. Scenario and channel nudge them.
const XLEVER_DEFS = [
  { k: "length", name: "Length", lo: "Short", hi: "Full" },
  { k: "detail", name: "Detail", lo: "Big picture", hi: "Line by line" },
  { k: "warmth", name: "Warmth", lo: "Plain", hi: "Personal" },
  { k: "timing", name: "The ask", lo: "Decide now", hi: "Their time" },
];
const XLEVER_STYLE = {
  story: { length: 70, detail: 34, warmth: 92, timing: 55 },
  asker: { length: 76, detail: 94, warmth: 32, timing: 45 },
  doer: { length: 14, detail: 20, warmth: 28, timing: 8 },
  thinker: { length: 60, detail: 72, warmth: 52, timing: 92 },
};
const XLEVER_SCEN = { raw: {}, current: { warmth: 4, detail: 4 }, winback: { warmth: 6 }, xdate: { timing: 6 }, following: { length: -12, detail: -10 } };
const XLEVER_CH = { email: {}, text: { length: -18, detail: -12 }, call: { length: -8, warmth: 6 } };
function xLeverValues(style, scenario, channel) {
  const base = XLEVER_STYLE[style] || XLEVER_STYLE.story, s = XLEVER_SCEN[scenario] || {}, c = XLEVER_CH[channel] || {};
  const out = {};
  for (const d of XLEVER_DEFS) out[d.k] = Math.max(4, Math.min(96, base[d.k] + (s[d.k] || 0) + (c[d.k] || 0)));
  return out;
}

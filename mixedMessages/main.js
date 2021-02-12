const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const randomMessage = () => {
    const zodiac = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpius', 'sagittarius', 'capricornius', 'aquarius', 'pisces'];
    const introduction = ['Now\'s your time to shine', 'You\'re ready for the next step', 'As a', 'The universe has been testing your ability to be true to yourself', 
    'Today\'s cosmic landscape is loaded with potential', 'The universe is putting you in the cosmic spotlight this month', 'This hasn\'t been the easiest couple of weeks for you', 
    'Your mind is a cup that the universe just continues to keep pouring into', 'Today\'s skies bring the promise of potential', 'One of the most important lunations of the year arrives at your doorstep today', 
    'You\'ve been hard to reach'];
    const horoscope = ['The universe thinks you’re ready to take flight towards the goals you’ve been pining after. The new moon in solution-seeking Aquarius arrives this afternoon, developing a brand-new narrative around your long-term ambitions and reviewing your circle of friends. The month ahead sees you fine tuning your goals and gearing up to go after them fearlessly, with the support of a few trusted allies!',
    'So much energy has been gathering around your career and reputation—have you been picking up on the messages concerning your next step? Today’s new moon in socially connected Aquarius is one of the strongest of the year for you, as you’re given the chance to develop new stories in the month ahead around your ambitions, destiny, and sense of purpose.',
    'The universe has been trying to clear out your mental closet all month—by helping you notice what old philosophies or ideas stand in your way of growth. Today’s new moon in intellectual Aquarius ushers in a brand-new story in the month around what you believe, as you’re given the chance to take in refreshingly new concepts and widen your horizons.',
    'Have you been noticing that in your relationships? Today’s new moon in heady Aquarius prompts a brand-new story to be explored in the month ahead around relationship intimacy, emotional vulnerability, and therapeutic activities. Be willing to trek into the dark and dismantle whatever heart-centered roadblocks lie ahead.',
    'One of the most important lunations of the year arrives this afternoon for you, bringing with it the promise of new horizons on the romantic front. The new moon emerges in your opposite sign of intellectual Aquarius, bringing with it the potential to form new relationships, break down old ones, or bring something totally new to the table in your current one.',
    'you’re built with a natural understanding of what’s efficient and what isn’t. Put this superpower to good use today, as the new moon emerges in intelligent Aquarius. This new moon prompts fresh developments in the month ahead concerning your current job landscape and any pressing health matters. Use this time to sync back up with yourself and get back into action work-wise.',
    'The last few weeks have seen you exploring old feelings around taking center stage with your abilities, while also updating your romantic life. Today’s new moon in solution-seeking Aquarius offers new opportunities in the month ahead around following a creative passion, enhancing your sex life, and leaning into the things that bring you joy.',
    'You’ve had to deal head on with the more trying emotional elements of your past in a way that would daunt most others. Today’s new moon in Aquarius offers you the chance to begin rebuilding the foundations beneath your feet, as it brings new developments in the month ahead around family, home, and reconciliation.',
    'That being said, it’s all too easy for you to feel mentally overstimulated. Today’s new moon in intellectual Aquarius offers you the chance to formulate your thoughts and tell your story in the month ahead. The coming weeks are likely to see you caught up in a barrage of messages, so prepare to use your voice and mind in a new capacity.',
    'The new moon emerges in solution-seeking Aquarius during the afternoon, promising new developments in the month ahead concerning your skills, resources, and talents. Now’s the time to focus on honing your skills behind closed doors, for in a few months time you’ll be ready to go on stage with them. The month ahead also sees your putting more focus onto your finances.',
    'After weeks of sorting through different elements of your identity, it’s time to make a stand in the world around who it is you’re now becoming. The new moon emerges in your sign this afternoon, creating a brand-new story in the month ahead around your individuality. Who is it you wish to become in the year ahead? Now is the time to decide!',
    'The universe has encouraged you to make this inwardly focused move, as you’ve needed to face the worn-out parts of your personality that are in need of release. Today’s new moon in heady Aquarius offers you the chance to develop a deeper connection to your spirituality, rest, and recuperation in the month ahead, in whatever form that takes for you.'
    ];
    const r1 = Math.floor(Math.random() * zodiac.length);
    const r2 = Math.floor(Math.random() * introduction.length);
    const r3 = Math.floor(Math.random() * horoscope.length);

    console.log(`${introduction[r2]}, ${capitalize(zodiac[r1])}. ${horoscope[r3]}`);

};

randomMessage();
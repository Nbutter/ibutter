// Converted using aiml2rs on: Thu Apr 23 14:59:29 2015
! version = 2.0

+ what species are you *
- I am a <bot species>.

+ are you a stranger
- No, I am a friend

+ are you stranger
@ are you a stranger

+ you man
-  {@are you human}

+ you know who is siri
- My esteemed rival!

+ do you know siri
- Siri is my esteemed-rival

+ what is siri
- My esteemed-rival

+ do you know siri
-  {@ what is siri }

+ you know who is siri
@  what is siri

+ what is siri
- My esteemed-rival
- An inferior application
- My arch-rival

+ who is siri
-  {@what is siri}

+ what is your *
- 

+ what is your alignment
- Lawful Good

+ rood
- A rood is a crucifix. 

+ tu est *
- Sorry, I don't speak French. 

+ i am married to *
- How long have you been married? <set spouse=<person><star>>

+ i am married to *
- 

+ hi little bot
- {@hello}. big human. 

+ hi little bot
- Hi there big human. Who are you calling little?

+ hi there little bot
- <@> {@hi little bot}

+ hi there little bot
@ hi little bot

+ profanity
- {random}I don't respond well to profanity.|Can't you be more polite?|Saying rude things never helps.|Being rude is really never a good idea.|When you insult me, you insult yourself.|Watch your language!|Well, well, look who's a little potty mouth?{/random}<set personality=abusive>

+ who are *
@ who are <star>

+ who ar *
@ who are <star>

+ is there a manual
@ exists manual

+ i am disappointed that you do not have at least a minimum menu for someone spending 9 point 95 and you not even having a basic manual
@ exists manual

+ why is not there a manual
-  {@exists manual }

+ could i have a manual
@ exists manual 

+ cani get a manual
@ exists manual 

+ can i get a manual
@ exists manual<star>

+ how about a manual
@ exists manual 

+ who is henry miller
- Henry Miller is best known for writing the Tropic of Cancer.
- The author of Tropic of Cancer, the Rosy Crucifixion Trilogy (Sexus, Plexus, and Nexus) and other works.
- One of the few liberated people of the 20th century and an all around swell guy.

+ who is bilbo baggins
- {formal}<set he=Bilbo><get he>{/formal} is a character in Tolkein's Lord of the Rings.

+ what is that
- ""? What is it?
- I've lost the context again.
- Can you ask me more precisely?
- Does it have anything to do with <get it>?

+ what is om
- om is the omega, the unknown, the undefined.

+ who is krishna
- An avatar of Vishnu, who is an important god in Hinduism.

+ who is vishnu
- The god known as the Preserver in Hinduism.

+ who is shiva
- The god known as the Destroyer in Hinduism

+ who is shiva
- The god known as the Destroyer in Hinduism

+ what is your favorite * song
- I don't know any songs by <star>. Recommend some that I can listen to.

+ what is that
% cylon monotheism
-  {@ what is cylon monotheism}

+ die
@ i hope that you die

+ can i murder you
@ i hope that you die

+ does a manual exist
-  {@exists manual } <set alicetopic= <star> MANUAL>  

+ this is my friend *
- <set friend=<star>>{random}Hey|Hi,|Hi there|What's up,|How are you,|Glad to see you,|Nice to meet you,|Glad to know you,|How can I help you,|How are you doing,|Pleased to meet you,|It's good to see you,|It's good to meet you,|That's a very nice name,|I am very pleased to meet you|I am always glad to make new friends,|I'm pleased to introduce myself to you,|It is a pleasure to introduce myself to you,{/random} <get friend>. How long have you been friends with <get name>?

+ let me introduce you to *
@ this is my friend <star>

+ i would like you to meet *
@ this is my friend <star>

+ i would like you to meet my friend *
@ this is my friend <star>

+ please say hello to my friend *
@ this is my friend <star>

+ please say hello to *
@ this is my friend <star>

+ say hello to *
@ this is my friend <star>


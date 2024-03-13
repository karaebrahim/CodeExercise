# Submission Notes

These notes are for the benefit of the reviewer - they are not required for the project submission, but feel free to include any additional information about your submission that you would like the reviewer to know.

We've provided some questions to help guide you, but feel free to include any additional information if you feel it will be helpful.

## Given more time, what would you have included or done differently?

- I didn't have time to implement fuzzy search, and my test suite could definitely be more robust. I'm not happy with the Lighthouse performance score, but I'm happy with the app's overall functionality. I tried not to get too distracted by the design because I can go down a rabbit hole of trying to make everything look pixel perfect—if I had more time, I'd probably play with more animations and image optimization.

## Did you deviate from the instructions? If so, why?

- I didn't realize until literally the time of submission that the dropdowns were supposed to be multi-select checkboxes 😭 My mistake, just completely missed that in the description and design.

## What part of the exercise did you find the biggest challenge, and why?

- I don't have as much experience building Express apps from scratch, so that was a lot of fun. At the very beginning, I forgot to switch from `npm run dev` to `npm run serve` when I was working on the client, which caused some issues that I thought were CORS related. I don't often have control over the data and the API when I'm working client-side, so it was challenging to determine on a case-by-case basis if it was better and more performant to manipulate the data on the server or on the client. I went back-and-forth on that decision a couple times: I opted to do all of that on the server because I thought it would result in faster load speeds.

- I was determined to use React Query for this because I think it handles filtering, pagination, and data caching the best. The devtools were helpul but React Query is fairly new and the documentation is certainly lacking, so it took some time to feel comfortable using it. But I'm happy with the on-page experience—the data is cached on first render, so when toggling back, the data loads instantly.

- I also opted to use vitest instead of Jest. Not sure if it was the best call, but here we are.

## Is there anything else you'd like to us to know?

- Please let me know the areas on which you think I need to focus in order to achieve more technical growth. Thanks!

## Kara's additional section: questions and feedback

### Questions

1. It's been 7 years since I last took this test and I see not much has changed about the data and UI 😊 Any plans on updating this to be a bit more modern (at least to get some new movies in there)? It'd also be nice to include an actual design file and not a moving gif that started to drive me crazy.
2. Why not Next.js as an option?
3. Why do you give so much of the Express app already setup? That surprised me.
4. Why Parcel and not Webpack? That's not something we use on this team (that I know of). When I tried submitting my compressed folder, I realized there's a hidden `parcel-cache` folder that made my initial submission way too big.
5. `npm` was throwing a lot of errors for the `better-sqlite3` library because of my version of Node. If there's a specific version required, could you include that information?

### Feedback

- I found the hard 4-day turnaround time difficult and exclusionary as a working parent, I recommend updating that to be more inclusive. We could at least make it 4 _working_ days (my weekends are not usually very flexible). The turnaround time was definitely not doable for me with such little notice. I understand it says to reach out to the recruiter if you need more time, but nobody wants to do that—nobody wants to be less than an ideal candidate. I'm not sure what the best solution is, but maybe it's something we can discuss.

- It'd be cool if applicants could submit their final project via GitHub. That would make it more true-to-life and then we could assess their iterative code, their branching strategies, what description they give in their PR, what questions they ask, etc. It could be a good assessment of overall communication.

### Typos

1. "SUBMISSION.MD" link in the fullstack doc leads to a 404, should go to `https://github.com/HubSpotWebTeam/CodeExercise/blob/main/submission.md`.
3. "You can find all of the data for the media items at this url" in the fullstack doc leads to a 404, should go to `https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data.json` (actually, I think this has already been fixed after I received the assessment).
4. "You should try recreate" in the Basic section should be "You should try to recreate".

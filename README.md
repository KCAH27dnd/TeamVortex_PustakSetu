# TeamVortex_PustakSetu
This project is build for the hackathon Tech Sprint( GDG on Campus )by our team Vortex.
Its a prototype website where books can find their new owners and spread its knowledge among the underpriveliged as we beleive education is key to opening doors of new opportunities.

The link to the prototype website 📚📚:
[PustakSetu](https://vortex-8d4ee.web.app/)

## [Scripts]
PUBLIC:
1) [index.html](https://github.com/KCAH27dnd/TeamVortex_PustakSetu/blob/main/public/index.html) : HTML script for the frontend of the Donation panel.
2) [my-donations.html](https://github.com/KCAH27dnd/TeamVortex_PustakSetu/blob/main/public/my-donations.html) : HTML script for the frontend of the record of donated books by the user
3) [find-books.html](https://github.com/KCAH27dnd/TeamVortex_PustakSetu/blob/main/public/find-books.html): HTML script for the webpage where user can find the books issued by donor
4) [choose-ngo.html](https://github.com/KCAH27dnd/TeamVortex_PustakSetu/blob/main/public/choose-ngo.html): HTML scipt for the webpage to search navigate list of different NGOs , their information(adress) according to the state user enters.
5) [firebase.json](https://github.com/KCAH27dnd/TeamVortex_PustakSetu/blob/main/firebase.json) : Configuration file on how our project's Firebase services are deployed
SERVER:
6) [server.js](https://github.com/KCAH27dnd/TeamVortex_PustakSetu/blob/main/server/server.js): Node.js backend server uses the Eexpress framework to handle request and then Google Gemini 1.5 flash model to process viksual data.

7. [pakage-lock.json](https://github.com/KCAH27dnd/TeamVortex_PustakSetu/blob/main/server/package-lock.json): A record of every detail of dependency and sub-dependency to ensure project consistency.

## Features
* **AI-Powered Donation:** Our Website leverages Gemini 1.5 Flash to automatically extract book details from images, reducing user effort.

* **State-Wise NGO Mapping:** The website uses a dynamic filtering system to connect donors with verified NGOs across India based on the PDF database provided.

* **Real-time Synchronization:** It also utilises Firebase to ensure book availability and requests are updated instantly across all clients.

## 🛠️ Tech Stack(for the prototype
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Backend:** Node.js with Express Framework.
* **Database & Hosting:** Firebase Realtime Database & Firebase Hosting
* **AI integration:** Google Gemini 1.5 Flash API (for automated book analysis)
* **Tools:** Firebase Studio, Node.js,VS code, Google Gemini pro.

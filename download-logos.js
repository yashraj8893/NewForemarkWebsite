import fs from 'fs';
import https from 'https';
import path from 'path';

const logos = [
  { name: 'nappadori', url: 'https://logo.clearbit.com/nappadori.com' },
  { name: 'pdr', url: 'https://logo.clearbit.com/pdrclinics.com' },
  { name: 'regius', url: 'https://logo.clearbit.com/regiuscare.com' },
  { name: 'centerspread', url: 'https://logo.clearbit.com/centerspread.pk' },
  { name: 'getvantage', url: 'https://logo.clearbit.com/getvantage.co' },
  { name: 'samruddhi', url: 'https://logo.clearbit.com/samruddhi.com' },
  { name: 'techguru', url: 'https://logo.clearbit.com/techguru.com' },
  { name: 'athena', url: 'https://logo.clearbit.com/athenahealth.com' },
  { name: 'mainstay', url: 'https://logo.clearbit.com/mainstay.com' },
  { name: 'karma', url: 'https://logo.clearbit.com/karma.com' },
];

const dir = path.join(process.cwd(), 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download() {
  for (const logo of logos) {
    const dest = path.join(dir, `${logo.name}.png`);
    https.get(logo.url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
      } else if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res2) => {
           if(res2.statusCode === 200) {
               const file = fs.createWriteStream(dest);
               res2.pipe(file);
           }
        })
      }
    });
  }
}
download();

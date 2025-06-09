const project_name = `Generalization in Robotics Manipulation Workshop and Challenges`
const proj_small_caps = `<span class="small-caps">GRAIL</span>: `
const conference_details = ['CVPR 2025', 'https://cvpr.thecvf.com/', 'Location', 'assets/images/cvpr25-logo.png']
const workshop_date = `June 11, 2025`

const talk_speaker_details = {
  'jm': ['Jitendra Malik', './assets/images/talks/jitendra_malik.jpg', 'Professor', 'University of California at Berkeley', 'https://people.eecs.berkeley.edu/~malik/', 'Learning Dexterous Manipulation', ' '],
  'ag': ['Abhinav Gupta', './assets/images/talks/abhinav_gupta.jpg', 'Professor', 'Carnegie Mellon University', 'https://www.cs.cmu.edu/~abhinavg/', 'title', 'TBD'],
  'yl': ['Yunzhu Li', './assets/images/talks/yunzhu_li.jpg', 'Assistant Professor', 'Columbia University', 'https://yunzhuli.github.io/', 'title', 'TBD'],
  'rk': ['Ranjay Krishna', './assets/images/talks/ranjay_krishna.jpeg', 'Assistant Professor', 'University of Washington', 'https://ranjaykrishna.com/index.html', 'title', 'TBD'],
  'cf': ['Chelsea Finn', './assets/images/talks/chelsea_finn.jpg', 'Assistant Professor', 'Stanford University', 'https://ai.stanford.edu/~cbfinn/', 'How to Develop Generalizable and Reliable Robot Policies', ' '],
}

const organizers_details = [
  ['Shizhe Chen', 'assets/images/organizers/shizhe_chen.jpg', 'Research Scientist', 'Inria Paris', 'https://cshizhe.github.io/'],
  ['Ricardo Garcia', 'assets/images/organizers/ricardo_garcia.jpg', 'PhD Student', 'Inria Paris', 'https://rjgpinel.github.io/'],
  ['Jiafei Duan', 'assets/images/organizers/jiafei_duan.png', 'PhD Student', 'University of Washington', 'https://duanjiafei.com/'],
  ['Ishika Singh', 'assets/images/organizers/ishika_singh.jpg', 'PhD Student', 'University of Southern California', 'https://ishikasingh.github.io/'],  
  ['Wilbert Pumacay', 'assets/images/organizers/wilbert_pumacay.png', 'MSc Student', 'Universidad Catolica San Pablo', 'https://wpumacay.github.io'],
  ['Harsh Singh', 'assets/images/organizers/harsh_singh.jpeg', 'MSc Student', 'MBZUAI', 'https://www.linkedin.com/in/harshln/'],
  ['Mingfei Han', 'assets/images/organizers/mingfei_han.jpeg', 'Postdoc', 'MBZUAI', 'https://mingfei.info/'],
  ['Dieter Fox', 'assets/images/organizers/dieter_fox.jpg', 'Professor', 'University of Washington', 'https://homes.cs.washington.edu/~fox/'],
  ['Cordelia Schmid', 'assets/images/organizers/cordelia_schmid.jpg', 'Research Director', 'Inria Paris', 'https://cordeliaschmid.github.io/'],
  ['Ivan Laptev', 'assets/images/organizers/ivan_laptev.jpg', 'Professor', 'MBZUAI', 'https://mbzuai.ac.ae/study/faculty/ivan-laptev/'],
  ['Sami Haddadin', 'assets/images/organizers/sami_haddadin.jpg', 'Vice President for Research', 'MBZUAI', 'https://mbzuai.ac.ae/study/faculty/sami-haddadin/'],
]

const accepted_presentations = [
  // ['Fullname', 'website', 'photo', 'Affiliation-title', 'Affiliation', 'Presentation title', 'abstract'],
]

const org_affiliation_logos = [
  // 'assets/images/affiliation-logos/LOGO.png',
]



// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '09:00 -09:05', 'Introduction and welcome'],
  ['inv-talk', '09:05 - 09:35', 'Invited Talk', 'jm', 'virtual'],
  ['inv-talk', '09:35 - 10:05', 'Invited Talk', 'yl', 'in-person'],
  ['inv-talk', '10:05 - 10:35', 'Invited Talk',  'ag', 'in-person'],
  ['coffee-break', '10:35 - 11:00', '<span class="bold has-text-info">Coffee Break</span>'],
  ['inv-talk', '11:00 - 11:30', 'Invited Talk', 'cf', 'virtual'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk', 'rk', 'in-person'],
  ['spot-ppt', '12:00 - 12:30', 'Challenge summary, winner presentations, and award ceremony'],
]

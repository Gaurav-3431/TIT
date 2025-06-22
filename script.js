
const btn = document.getElementById('toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});


    const smilies = document.querySelectorAll('.smily');

    smilies.forEach(smily => {
        smily.addEventListener('click', () => {
            smilies.forEach(s => s.classList.remove('selected'));
            smily.classList.add('selected');
            localStorage.setItem('mood', smily.textContent);
        });
    });

    window.addEventListener('DOMContentLoaded', () => {
        const savedMood = localStorage.getItem('mood');
        if (savedMood) {
            smilies.forEach(s => {
                if (s.textContent === savedMood) {
                    s.classList.add('selected');
                }
            });
        }
    });


